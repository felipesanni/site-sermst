'use client';

import { FormEvent, useMemo, useState } from 'react';
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  Loader2,
  MapPin,
  MessageCircle,
  Pencil,
  Plus,
  Send,
  Trash2,
  X,
} from 'lucide-react';
import { cnaeData, grauRiscoInfo, type CnaeEntry } from '@/lib/data/cnae-data';
import { calculateNr05, getNr05ReferenceLabel } from '@/lib/nr05';

type BillingCycle = 'monthly' | 'annual';
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';
type LookupStatus = 'idle' | 'loading' | 'found' | 'error';
type AddressStatus = 'pending' | 'confirmed' | 'manual' | 'edited';

type ContractPlan = {
  id: string;
  title: string;
  monthly: number;
  annualPix: number;
};

type BusinessAddress = {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
};

type CnpjLookupResponse = {
  razaoSocial: string;
  cnaeFiscal: string;
  cnaeDescricao: string;
  source: 'brasilapi' | 'receitaws';
  endereco?: BusinessAddress;
};

type CepLookupResponse = BusinessAddress & {
  source: 'viacep';
};

type BranchLocation = {
  id: string;
  identificacao: string;
  cnpj: string;
  razaoSocial: string;
  address: BusinessAddress;
  cnpjAddress: BusinessAddress | null;
  addressStatus: AddressStatus;
  cnpjStatus: LookupStatus;
  cnpjError: string;
  cepStatus: LookupStatus;
  cepError: string;
};

type AttributionSnapshot = {
  page: string;
  referrer: string;
  capturedAt: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
  utm_id: string;
};

type StoredAttribution = {
  first: AttributionSnapshot;
  last: AttributionSnapshot;
};

type AssinaturaContractModalProps = {
  plan: ContractPlan;
  employees: number;
  initialCnpj: string;
  initialCnpjInfo: CnpjLookupResponse | null;
  initialCompanyName: string;
  attribution: StoredAttribution | null;
  conversionPage: string;
  formStartedAt: string;
  onClose: () => void;
};

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
});

function digits(value: string) {
  return value.replace(/\D/g, '');
}

function formatCnpj(value: string) {
  const d = digits(value).slice(0, 14);
  if (d.length <= 2) return d;
  if (d.length <= 5) return `${d.slice(0, 2)}.${d.slice(2)}`;
  if (d.length <= 8) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5)}`;
  if (d.length <= 12) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8)}`;
  return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12)}`;
}

function formatCep(value: string) {
  const d = digits(value).slice(0, 8);
  if (d.length <= 5) return d;
  return `${d.slice(0, 5)}-${d.slice(5)}`;
}

function emptyAddress(): BusinessAddress {
  return {
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
  };
}

function hasAddress(address?: BusinessAddress | null) {
  return Boolean(address?.cep || address?.logradouro || address?.bairro || address?.cidade || address?.estado);
}

function formatAddress(address: BusinessAddress) {
  const street = [
    address.logradouro,
    address.numero ? `nº ${address.numero}` : '',
    address.complemento,
  ]
    .filter(Boolean)
    .join(', ');
  const region = [
    address.bairro,
    address.cidade || address.estado ? `${address.cidade}${address.estado ? `/${address.estado}` : ''}` : '',
    address.cep ? `CEP ${address.cep}` : '',
  ]
    .filter(Boolean)
    .join(' - ');

  return [street, region].filter(Boolean).join(' | ') || 'Endereço ainda não preenchido';
}

function normalizeCnaeCode(value: string | number) {
  return digits(String(value)).padStart(7, '0');
}

function findCnaeEntry(value: string) {
  const normalized = normalizeCnaeCode(value);
  return cnaeData.find((entry) => entry.codigo === normalized) ?? null;
}

function getPorteFromEmployees(employeeCount: number) {
  if (employeeCount <= 20) return 'ate-20';
  if (employeeCount <= 100) return '21-100';
  if (employeeCount <= 500) return '101-500';
  return '500-mais';
}

function getNr05Summary(cnaeEntry: CnaeEntry | null, employees: number) {
  if (!cnaeEntry) return '';

  const nr05 = calculateNr05(cnaeEntry.grauRisco, employees);
  const reference = getNr05ReferenceLabel(employees);

  if (nr05?.kind === 'cipa') {
    return `NR-05 ${reference}: CIPA com ${nr05.empregados.efetivos} efetivo(s) e ${nr05.empregados.suplentes} suplente(s) por lado.`;
  }

  if (nr05?.kind === 'representante') {
    return `NR-05 ${reference}: tendência de representante da organização.`;
  }

  if (nr05?.kind === 'sesmt') {
    return `NR-05 ${reference}: atribuições tendem a ser cobertas pelo SESMT.`;
  }

  return reference ? `NR-05 ${reference}.` : '';
}

function addressStatusLabel(status: AddressStatus) {
  if (status === 'confirmed') return 'confirmado';
  if (status === 'pending') return 'aguardando confirmação';
  if (status === 'edited') return 'editado manualmente';
  return 'informado manualmente';
}

function createBranchLocation(): BranchLocation {
  const id =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  return {
    id,
    identificacao: '',
    cnpj: '',
    razaoSocial: '',
    address: emptyAddress(),
    cnpjAddress: null,
    addressStatus: 'manual',
    cnpjStatus: 'idle',
    cnpjError: '',
    cepStatus: 'idle',
    cepError: '',
  };
}

function buildAttributionPayload(attribution: StoredAttribution | null, conversionPage: string) {
  return {
    landing_page: attribution?.first.page || '',
    conversion_page: conversionPage,
    original_referrer: attribution?.first.referrer || '',
    utm_source: attribution?.last.utm_source || '',
    utm_medium: attribution?.last.utm_medium || '',
    utm_campaign: attribution?.last.utm_campaign || '',
    utm_content: attribution?.last.utm_content || '',
    utm_term: attribution?.last.utm_term || '',
    gclid: attribution?.last.gclid || '',
    fbclid: attribution?.last.fbclid || '',
    utm_id: attribution?.last.utm_id || '',
    utm_source_first: attribution?.first.utm_source || '',
    utm_medium_first: attribution?.first.utm_medium || '',
    utm_campaign_first: attribution?.first.utm_campaign || '',
    utm_content_first: attribution?.first.utm_content || '',
    utm_term_first: attribution?.first.utm_term || '',
    gclid_first: attribution?.first.gclid || '',
    fbclid_first: attribution?.first.fbclid || '',
    utm_id_first: attribution?.first.utm_id || '',
    attribution_first_captured_at: attribution?.first.capturedAt || '',
    attribution_last_captured_at: attribution?.last.capturedAt || '',
  };
}

function buildWhatsAppUrl(planTitle: string, employees: number, monthly: number, companyName: string) {
  const companyLine = companyName ? `A empresa é ${companyName}. ` : '';
  const message =
    `Olá! Solicitei uma simulação de assinatura SST no site da SERMST. ${companyLine}` +
    `Plano: ${planTitle}. Funcionários: ${employees}. Simulação: ${formatter.format(monthly)}/mês.`;

  return `https://wa.me/5511915146447?text=${encodeURIComponent(message)}`;
}

function buildSubscriptionMessage({
  plan,
  employees,
  billingCycle,
  companyName,
  cnpj,
  cnpjInfo,
  cnaeEntry,
  mainAddress,
  mainAddressStatus,
  branches,
}: {
  plan: ContractPlan;
  employees: number;
  billingCycle: BillingCycle;
  companyName: string;
  cnpj: string;
  cnpjInfo: CnpjLookupResponse | null;
  cnaeEntry: CnaeEntry | null;
  mainAddress: BusinessAddress;
  mainAddressStatus: AddressStatus;
  branches: BranchLocation[];
}) {
  const riskInfo = cnaeEntry ? grauRiscoInfo[cnaeEntry.grauRisco] : null;
  const branchSummary = branches.length
    ? branches
        .map((branch, index) => {
          const name = branch.identificacao || branch.razaoSocial || `Filial ${index + 1}`;
          const branchCnpj = branch.cnpj ? ` CNPJ ${branch.cnpj}.` : '';
          const branchCompany = branch.razaoSocial ? ` Razão social: ${branch.razaoSocial}.` : '';
          return `${name}.${branchCnpj}${branchCompany} Endereço: ${formatAddress(branch.address)} (${addressStatusLabel(branch.addressStatus)}).`;
        })
        .join(' ')
    : 'Sem filiais adicionais informadas.';

  const message = [
    'Lead originado pela calculadora de assinatura da SERMST.',
    `Empresa: ${companyName}.`,
    `Plano escolhido: ${plan.title}.`,
    `Funcionários informados: ${employees}.`,
    `Valor mensal estimado: ${formatter.format(plan.monthly)}.`,
    `Valor anual à vista estimado: ${formatter.format(plan.annualPix)}.`,
    `Preferência inicial: ${billingCycle === 'annual' ? 'anual à vista' : 'mensal'}.`,
    cnpj ? `CNPJ matriz: ${cnpj}.` : '',
    cnpjInfo?.cnaeFiscal ? `CNAE principal: ${cnpjInfo.cnaeFiscal} - ${cnpjInfo.cnaeDescricao || 'sem descrição retornada'}.` : '',
    riskInfo ? `Grau de risco pela base interna: ${riskInfo.label}. ${riskInfo.sesmt}` : '',
    getNr05Summary(cnaeEntry, employees),
    `Endereço principal: ${formatAddress(mainAddress)} (${addressStatusLabel(mainAddressStatus)}).`,
    `Filiais adicionais: ${branchSummary}`,
    'Validar proposta final por CNAE, grau de risco, unidades, cargos, exames complementares, treinamentos, PGR, PCMSO, LTCAT, PPP e eSocial.',
  ]
    .filter(Boolean)
    .join(' ');

  return message.slice(0, 3900);
}

async function fetchCnpj(raw: string) {
  const response = await fetch(`/api/cnpj/${raw}`);
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data?.error || 'CNPJ não encontrado.');
  }
  return (await response.json()) as CnpjLookupResponse;
}

async function fetchCep(raw: string) {
  const response = await fetch(`/api/cep/${raw}`);
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data?.error || 'CEP não encontrado.');
  }
  return (await response.json()) as CepLookupResponse;
}

function AddressReview({
  address,
  status,
  onConfirm,
  onReject,
}: {
  address: BusinessAddress | null;
  status: AddressStatus;
  onConfirm: () => void;
  onReject: () => void;
}) {
  if (!address || !hasAddress(address)) return null;

  const isPending = status === 'pending';
  const statusBadgeClass =
    status === 'confirmed'
      ? 'border-green-200 bg-green-50 text-green-700'
      : 'border-amber-200 bg-amber-50 text-amber-700';

  return (
    <div className="rounded-2xl border border-brand-900/10 bg-slate-50 p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-pink/10 text-accent-pink">
          <MapPin className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-black text-brand-900">Endereço encontrado pelo CNPJ</p>
            {!isPending ? (
              <span className={`rounded-full border px-3 py-1 text-xs font-black ${statusBadgeClass}`}>
                {status === 'confirmed' ? 'Confirmado' : 'Editado manualmente'}
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-600">
            {formatAddress(address)}
          </p>
          {isPending ? (
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={onConfirm} className="btn-primary-safe px-5 py-3">
                <CheckCircle2 className="h-4 w-4" />
                Sim, está correto
              </button>
              <button
                type="button"
                onClick={onReject}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-brand-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-900 hover:bg-slate-50"
              >
                <Pencil className="h-4 w-4" />
                Não, é outro endereço
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function AddressFields({
  prefix,
  address,
  cepStatus,
  cepError,
  onChange,
  onCepChange,
}: {
  prefix: string;
  address: BusinessAddress;
  cepStatus: LookupStatus;
  cepError: string;
  onChange: (field: keyof BusinessAddress, value: string) => void;
  onCepChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor={`${prefix}-cep`} className="mb-2 block text-sm font-bold text-brand-900">
          CEP *
        </label>
        <div className="relative">
          <input
            id={`${prefix}-cep`}
            type="text"
            inputMode="numeric"
            required
            value={address.cep}
            onChange={(event) => onCepChange(event.target.value)}
            placeholder="00000-000"
            maxLength={9}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-10 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
          />
          {cepStatus === 'loading' ? (
            <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-slate-400" />
          ) : null}
        </div>
        {cepStatus === 'error' ? (
          <p className="mt-2 text-xs font-semibold text-red-600">{cepError || 'Não foi possível consultar o CEP.'}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${prefix}-logradouro`} className="mb-2 block text-sm font-bold text-brand-900">
          Endereço *
        </label>
        <input
          id={`${prefix}-logradouro`}
          type="text"
          required
          value={address.logradouro}
          onChange={(event) => onChange('logradouro', event.target.value)}
          placeholder="Rua, Avenida..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
        />
      </div>

      <div>
        <label htmlFor={`${prefix}-numero`} className="mb-2 block text-sm font-bold text-brand-900">
          Número *
        </label>
        <input
          id={`${prefix}-numero`}
          type="text"
          required
          value={address.numero}
          onChange={(event) => onChange('numero', event.target.value)}
          placeholder="Nº"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
        />
      </div>

      <div>
        <label htmlFor={`${prefix}-complemento`} className="mb-2 block text-sm font-bold text-brand-900">
          Complemento
        </label>
        <input
          id={`${prefix}-complemento`}
          type="text"
          value={address.complemento}
          onChange={(event) => onChange('complemento', event.target.value)}
          placeholder="Apto, sala, bloco..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
        />
      </div>

      <div>
        <label htmlFor={`${prefix}-bairro`} className="mb-2 block text-sm font-bold text-brand-900">
          Bairro *
        </label>
        <input
          id={`${prefix}-bairro`}
          type="text"
          required
          value={address.bairro}
          onChange={(event) => onChange('bairro', event.target.value)}
          placeholder="Bairro"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-[1fr_0.42fr]">
        <div>
          <label htmlFor={`${prefix}-cidade`} className="mb-2 block text-sm font-bold text-brand-900">
            Cidade *
          </label>
          <input
            id={`${prefix}-cidade`}
            type="text"
            required
            value={address.cidade}
            onChange={(event) => onChange('cidade', event.target.value)}
            placeholder="Cidade"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
          />
        </div>
        <div>
          <label htmlFor={`${prefix}-estado`} className="mb-2 block text-sm font-bold text-brand-900">
            UF *
          </label>
          <input
            id={`${prefix}-estado`}
            type="text"
            required
            value={address.estado}
            onChange={(event) => onChange('estado', event.target.value.toUpperCase().slice(0, 2))}
            placeholder="SP"
            maxLength={2}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
          />
        </div>
      </div>
    </div>
  );
}

export function AssinaturaContractModal({
  plan,
  employees,
  initialCnpj,
  initialCnpjInfo,
  initialCompanyName,
  attribution,
  conversionPage,
  formStartedAt,
  onClose,
}: AssinaturaContractModalProps) {
  const initialAddress = initialCnpjInfo?.endereco && hasAddress(initialCnpjInfo.endereco)
    ? initialCnpjInfo.endereco
    : emptyAddress();

  const [cnpj, setCnpj] = useState(initialCnpj);
  const [cnpjInfo, setCnpjInfo] = useState<CnpjLookupResponse | null>(initialCnpjInfo);
  const [cnpjStatus, setCnpjStatus] = useState<LookupStatus>(initialCnpjInfo ? 'found' : 'idle');
  const [cnpjError, setCnpjError] = useState('');
  const [companyName, setCompanyName] = useState(initialCompanyName || initialCnpjInfo?.razaoSocial || '');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [mainAddress, setMainAddress] = useState<BusinessAddress>(initialAddress);
  const [cnpjAddress, setCnpjAddress] = useState<BusinessAddress | null>(
    hasAddress(initialAddress) ? initialAddress : null,
  );
  const [mainAddressStatus, setMainAddressStatus] = useState<AddressStatus>(
    hasAddress(initialAddress) ? 'pending' : 'manual',
  );
  const [mainCepStatus, setMainCepStatus] = useState<LookupStatus>('idle');
  const [mainCepError, setMainCepError] = useState('');
  const [branches, setBranches] = useState<BranchLocation[]>([]);
  const [acceptedEstimate, setAcceptedEstimate] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitError, setSubmitError] = useState('');

  const cnaeEntry = useMemo(
    () => (cnpjInfo?.cnaeFiscal ? findCnaeEntry(cnpjInfo.cnaeFiscal) : null),
    [cnpjInfo],
  );

  function markMainAddressEdited() {
    setMainAddressStatus((current) => (current === 'pending' || current === 'confirmed' ? 'edited' : current));
  }

  function updateMainAddress(field: keyof BusinessAddress, value: string) {
    setMainAddress((current) => ({
      ...current,
      [field]: field === 'estado' ? value.toUpperCase().slice(0, 2) : value,
    }));
    markMainAddressEdited();
  }

  async function lookupMainCep(raw: string) {
    setMainCepStatus('loading');
    setMainCepError('');

    try {
      const data = await fetchCep(raw);
      setMainAddress((current) => ({
        ...current,
        cep: data.cep,
        logradouro: data.logradouro,
        complemento: current.complemento || data.complemento,
        bairro: data.bairro,
        cidade: data.cidade,
        estado: data.estado,
      }));
      setMainAddressStatus((current) => (current === 'pending' || current === 'confirmed' ? 'edited' : 'manual'));
      setMainCepStatus('found');
    } catch (error) {
      setMainCepStatus('error');
      setMainCepError(error instanceof Error ? error.message : 'Não foi possível consultar o CEP.');
    }
  }

  function handleMainCepChange(value: string) {
    const formatted = formatCep(value);
    const raw = digits(formatted);
    setMainAddress((current) => ({ ...current, cep: formatted }));
    markMainAddressEdited();

    if (raw.length < 8) {
      setMainCepStatus('idle');
      setMainCepError('');
      return;
    }

    lookupMainCep(raw);
  }

  async function lookupMainCnpj(raw: string) {
    setCnpjStatus('loading');
    setCnpjError('');
    setCnpjInfo(null);

    try {
      const data = await fetchCnpj(raw);
      setCnpjInfo(data);
      setCompanyName(data.razaoSocial || companyName);
      setCnpjStatus('found');

      if (data.endereco && hasAddress(data.endereco)) {
        setCnpjAddress(data.endereco);
        setMainAddress(data.endereco);
        setMainAddressStatus('pending');
      }
    } catch (error) {
      setCnpjStatus('error');
      setCnpjError(error instanceof Error ? error.message : 'Não foi possível consultar este CNPJ.');
    }
  }

  function handleMainCnpjChange(value: string) {
    const formatted = formatCnpj(value);
    const raw = digits(formatted);
    setCnpj(formatted);

    if (raw.length < 14) {
      setCnpjStatus('idle');
      setCnpjError('');
      setCnpjInfo(null);
      setCnpjAddress(null);
      return;
    }

    lookupMainCnpj(raw);
  }

  function confirmMainAddress() {
    if (!cnpjAddress) return;
    setMainAddress(cnpjAddress);
    setMainAddressStatus('confirmed');
  }

  function rejectMainAddress() {
    setMainAddress(emptyAddress());
    setMainAddressStatus('manual');
    setMainCepStatus('idle');
    setMainCepError('');
  }

  function addBranch() {
    setBranches((current) => [...current, createBranchLocation()]);
  }

  function removeBranch(id: string) {
    setBranches((current) => current.filter((branch) => branch.id !== id));
  }

  function updateBranch(id: string, updater: (branch: BranchLocation) => BranchLocation) {
    setBranches((current) => current.map((branch) => (branch.id === id ? updater(branch) : branch)));
  }

  function markBranchAddressEdited(id: string) {
    updateBranch(id, (branch) => ({
      ...branch,
      addressStatus:
        branch.addressStatus === 'pending' || branch.addressStatus === 'confirmed'
          ? 'edited'
          : branch.addressStatus,
    }));
  }

  function updateBranchAddress(id: string, field: keyof BusinessAddress, value: string) {
    updateBranch(id, (branch) => ({
      ...branch,
      addressStatus:
        branch.addressStatus === 'pending' || branch.addressStatus === 'confirmed'
          ? 'edited'
          : branch.addressStatus,
      address: {
        ...branch.address,
        [field]: field === 'estado' ? value.toUpperCase().slice(0, 2) : value,
      },
    }));
  }

  async function lookupBranchCep(id: string, raw: string) {
    updateBranch(id, (branch) => ({ ...branch, cepStatus: 'loading', cepError: '' }));

    try {
      const data = await fetchCep(raw);
      updateBranch(id, (branch) => ({
        ...branch,
        cepStatus: 'found',
        addressStatus:
          branch.addressStatus === 'pending' || branch.addressStatus === 'confirmed'
            ? 'edited'
            : 'manual',
        address: {
          ...branch.address,
          cep: data.cep,
          logradouro: data.logradouro,
          complemento: branch.address.complemento || data.complemento,
          bairro: data.bairro,
          cidade: data.cidade,
          estado: data.estado,
        },
      }));
    } catch (error) {
      updateBranch(id, (branch) => ({
        ...branch,
        cepStatus: 'error',
        cepError: error instanceof Error ? error.message : 'Não foi possível consultar o CEP.',
      }));
    }
  }

  function handleBranchCepChange(id: string, value: string) {
    const formatted = formatCep(value);
    const raw = digits(formatted);
    updateBranchAddress(id, 'cep', formatted);
    markBranchAddressEdited(id);

    if (raw.length < 8) {
      updateBranch(id, (branch) => ({ ...branch, cepStatus: 'idle', cepError: '' }));
      return;
    }

    lookupBranchCep(id, raw);
  }

  async function lookupBranchCnpj(id: string, raw: string) {
    updateBranch(id, (branch) => ({ ...branch, cnpjStatus: 'loading', cnpjError: '' }));

    try {
      const data = await fetchCnpj(raw);
      updateBranch(id, (branch) => ({
        ...branch,
        cnpjStatus: 'found',
        razaoSocial: data.razaoSocial || branch.razaoSocial,
        cnpjAddress: data.endereco && hasAddress(data.endereco) ? data.endereco : null,
        address: data.endereco && hasAddress(data.endereco) ? data.endereco : branch.address,
        addressStatus: data.endereco && hasAddress(data.endereco) ? 'pending' : branch.addressStatus,
      }));
    } catch (error) {
      updateBranch(id, (branch) => ({
        ...branch,
        cnpjStatus: 'error',
        cnpjError: error instanceof Error ? error.message : 'Não foi possível consultar este CNPJ.',
      }));
    }
  }

  function handleBranchCnpjChange(id: string, value: string) {
    const formatted = formatCnpj(value);
    const raw = digits(formatted);
    updateBranch(id, (branch) => ({ ...branch, cnpj: formatted }));

    if (raw.length < 14) {
      updateBranch(id, (branch) => ({
        ...branch,
        cnpjStatus: 'idle',
        cnpjError: '',
        cnpjAddress: null,
      }));
      return;
    }

    lookupBranchCnpj(id, raw);
  }

  function confirmBranchAddress(id: string) {
    updateBranch(id, (branch) => {
      if (!branch.cnpjAddress) return branch;
      return {
        ...branch,
        address: branch.cnpjAddress,
        addressStatus: 'confirmed',
      };
    });
  }

  function rejectBranchAddress(id: string) {
    updateBranch(id, (branch) => ({
      ...branch,
      address: emptyAddress(),
      addressStatus: 'manual',
      cepStatus: 'idle',
      cepError: '',
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus('submitting');
    setSubmitError('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const company = companyName.trim();

    if (digits(cnpj).length !== 14) {
      setSubmitStatus('error');
      setSubmitError('Informe um CNPJ válido para iniciar a contratação.');
      return;
    }

    const payload = {
      nome: String(formData.get('nome') || '').trim(),
      empresa: company,
      email: String(formData.get('email') || '').trim().toLowerCase(),
      telefone: String(formData.get('telefone') || '').trim(),
      porte: getPorteFromEmployees(employees),
      dor: 'assinatura-sst',
      mensagem: buildSubscriptionMessage({
        plan,
        employees,
        billingCycle,
        companyName: company,
        cnpj,
        cnpjInfo,
        cnaeEntry,
        mainAddress,
        mainAddressStatus,
        branches,
      }),
      website: String(formData.get('website') || ''),
      form_started_at: formStartedAt || String(Date.now() - 5000),
      lead_type: 'assinatura-sst',
      cargo: String(formData.get('cargo') || '').trim(),
      dia_pagamento: String(formData.get('dia_pagamento') || '').trim(),
      plano_assinatura: plan.title,
      funcionarios: String(employees),
      valor_mensal: formatter.format(plan.monthly),
      valor_anual: formatter.format(plan.annualPix),
      ciclo_pagamento: billingCycle === 'annual' ? 'anual-a-vista' : 'mensal',
      cnpj: digits(cnpj),
      cnae: cnpjInfo?.cnaeFiscal || '',
      grau_risco: cnaeEntry ? String(cnaeEntry.grauRisco) : '',
      unidades_adicionais: String(branches.length),
      ...buildAttributionPayload(attribution, conversionPage),
    };

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || 'Não foi possível enviar a solicitação.');
      }

      setSubmitStatus('success');
      form.reset();

      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'subscription_plan_lead_generated',
          plan_id: plan.id,
          plan_name: plan.title,
          employees,
          cnae_codigo: cnpjInfo?.cnaeFiscal || '',
          cnae_grau_risco: cnaeEntry?.grauRisco || '',
          additional_locations: branches.length,
        });
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Lead');
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitError(error instanceof Error ? error.message : 'Erro inesperado ao enviar.');
    }
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-brand-900/70 px-4 py-6 backdrop-blur-sm md:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="subscription-contract-title"
    >
      <div className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white/95 p-5 backdrop-blur md:p-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent-pink">
              Dados para contratação
            </p>
            <h3 id="subscription-contract-title" className="mt-1 text-2xl font-black text-brand-900">
              {plan.title} para {employees} funcionário{employees === 1 ? '' : 's'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-brand-900"
            aria-label="Fechar formulário de contratação"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitStatus === 'success' ? (
          <div className="p-8 text-center md:p-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="mb-3 text-2xl font-black text-brand-900">Solicitação enviada.</h4>
            <p className="mx-auto max-w-xl leading-relaxed text-slate-600">
              A SERMST recebeu a simulação com plano, porte, CNPJ, endereço principal e filiais
              informadas. A equipe comercial entra em contato para validar o escopo final.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button type="button" onClick={onClose} className="btn-primary-safe">
                Fechar
              </button>
              <a
                href={buildWhatsAppUrl(plan.title, employees, plan.monthly, companyName)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-safe"
              >
                <MessageCircle className="h-5 w-5" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 p-5 md:p-6">
            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                Resumo da simulação
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={
                    billingCycle === 'monthly'
                      ? 'rounded-2xl border-2 border-accent-pink bg-white p-4 text-left shadow-sm'
                      : 'rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-brand-900'
                  }
                  aria-pressed={billingCycle === 'monthly'}
                >
                  <span className="block text-xs font-black uppercase tracking-[0.14em] text-slate-500">Mensal</span>
                  <span className="mt-1 block text-2xl font-black text-brand-900">{formatter.format(plan.monthly)}</span>
                  <span className="text-sm font-semibold text-slate-500">por mês</span>
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={
                    billingCycle === 'annual'
                      ? 'rounded-2xl border-2 border-accent-pink bg-white p-4 text-left shadow-sm'
                      : 'rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-brand-900'
                  }
                  aria-pressed={billingCycle === 'annual'}
                >
                  <span className="block text-xs font-black uppercase tracking-[0.14em] text-slate-500">Anual à vista</span>
                  <span className="mt-1 block text-2xl font-black text-brand-900">{formatter.format(plan.annualPix)}</span>
                  <span className="text-sm font-semibold text-slate-500">5% de desconto</span>
                </button>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 p-5">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-900 text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-accent-pink">Empresa e unidades</p>
                  <h4 className="text-xl font-black text-brand-900">Dados da Empresa</h4>
                </div>
              </div>

              <div className="mb-5 grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="contract-cnpj" className="mb-2 block text-sm font-bold text-brand-900">
                    CNPJ *
                  </label>
                  <div className="relative">
                    <input
                      id="contract-cnpj"
                      type="text"
                      inputMode="numeric"
                      required
                      value={cnpj}
                      onChange={(event) => handleMainCnpjChange(event.target.value)}
                      placeholder="00.000.000/0001-00"
                      maxLength={18}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-10 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
                    />
                    {cnpjStatus === 'loading' ? (
                      <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-slate-400" />
                    ) : null}
                  </div>
                  {cnpjStatus === 'error' ? (
                    <p className="mt-2 text-xs font-semibold text-red-600">{cnpjError}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contract-empresa" className="mb-2 block text-sm font-bold text-brand-900">
                    Razão Social *
                  </label>
                  <input
                    id="contract-empresa"
                    type="text"
                    required
                    value={companyName}
                    onChange={(event) => setCompanyName(event.target.value)}
                    autoComplete="organization"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
                  />
                </div>
              </div>

              {cnpjInfo ? (
                <div className="mb-5 rounded-2xl border border-brand-900/10 bg-slate-50 p-4 text-sm text-slate-700">
                  <span className="mb-1 block text-xs font-black uppercase tracking-[0.16em] text-accent-pink">
                    Enquadramento inicial pelo CNPJ
                  </span>
                  <strong className="text-brand-900">CNAE {cnpjInfo.cnaeFiscal}</strong>
                  {cnpjInfo.cnaeDescricao ? ` - ${cnpjInfo.cnaeDescricao}` : ''}
                  {cnaeEntry ? ` · ${grauRiscoInfo[cnaeEntry.grauRisco].label}` : ''}
                </div>
              ) : null}

              <div className="space-y-5">
                <AddressReview
                  address={cnpjAddress}
                  status={mainAddressStatus}
                  onConfirm={confirmMainAddress}
                  onReject={rejectMainAddress}
                />
                <AddressFields
                  prefix="main-address"
                  address={mainAddress}
                  cepStatus={mainCepStatus}
                  cepError={mainCepError}
                  onChange={updateMainAddress}
                  onCepChange={handleMainCepChange}
                />
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-black text-brand-900">Outros endereços / filiais</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Adicione todos os locais que devem ser atendidos por esta proposta.
                    </p>
                  </div>
                  <button type="button" onClick={addBranch} className="btn-outline-safe shrink-0 px-5 py-3">
                    <Plus className="h-4 w-4" />
                    Adicionar filial
                  </button>
                </div>

                {branches.length ? (
                  <div className="mt-5 space-y-5">
                    {branches.map((branch, index) => (
                      <div key={branch.id} className="rounded-2xl border border-slate-200 bg-white p-5">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-black text-brand-900">Filial {index + 1}</p>
                            <p className="text-xs text-slate-500">CNPJ opcional, endereço obrigatório.</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeBranch(branch.id)}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                            aria-label={`Remover filial ${index + 1}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mb-5 grid gap-4 md:grid-cols-3">
                          <div>
                            <label htmlFor={`branch-${branch.id}-identificacao`} className="mb-2 block text-sm font-bold text-brand-900">
                              Identificação
                            </label>
                            <input
                              id={`branch-${branch.id}-identificacao`}
                              type="text"
                              value={branch.identificacao}
                              onChange={(event) =>
                                updateBranch(branch.id, (current) => ({ ...current, identificacao: event.target.value }))
                              }
                              placeholder="Ex.: Filial SP, Galpão 2"
                              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
                            />
                          </div>
                          <div>
                            <label htmlFor={`branch-${branch.id}-cnpj`} className="mb-2 block text-sm font-bold text-brand-900">
                              CNPJ da filial
                            </label>
                            <div className="relative">
                              <input
                                id={`branch-${branch.id}-cnpj`}
                                type="text"
                                inputMode="numeric"
                                value={branch.cnpj}
                                onChange={(event) => handleBranchCnpjChange(branch.id, event.target.value)}
                                placeholder="00.000.000/0001-00"
                                maxLength={18}
                                className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-10 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
                              />
                              {branch.cnpjStatus === 'loading' ? (
                                <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-slate-400" />
                              ) : null}
                            </div>
                            {branch.cnpjStatus === 'error' ? (
                              <p className="mt-2 text-xs font-semibold text-red-600">{branch.cnpjError}</p>
                            ) : null}
                          </div>
                          <div>
                            <label htmlFor={`branch-${branch.id}-razao`} className="mb-2 block text-sm font-bold text-brand-900">
                              Razão social
                            </label>
                            <input
                              id={`branch-${branch.id}-razao`}
                              type="text"
                              value={branch.razaoSocial}
                              onChange={(event) =>
                                updateBranch(branch.id, (current) => ({ ...current, razaoSocial: event.target.value }))
                              }
                              placeholder="Se for diferente da matriz"
                              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
                            />
                          </div>
                        </div>

                        <div className="space-y-5">
                          <AddressReview
                            address={branch.cnpjAddress}
                            status={branch.addressStatus}
                            onConfirm={() => confirmBranchAddress(branch.id)}
                            onReject={() => rejectBranchAddress(branch.id)}
                          />
                          <AddressFields
                            prefix={`branch-${branch.id}-address`}
                            address={branch.address}
                            cepStatus={branch.cepStatus}
                            cepError={branch.cepError}
                            onChange={(field, value) => updateBranchAddress(branch.id, field, value)}
                            onCepChange={(value) => handleBranchCepChange(branch.id, value)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 p-5">
              <h4 className="mb-5 text-xl font-black text-brand-900">Dados do contato</h4>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contract-nome" className="mb-2 block text-sm font-bold text-brand-900">
                    Nome do contato *
                  </label>
                  <input
                    id="contract-nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
                  />
                </div>
                <div>
                  <label htmlFor="contract-cargo" className="mb-2 block text-sm font-bold text-brand-900">
                    Cargo *
                  </label>
                  <input
                    id="contract-cargo"
                    name="cargo"
                    type="text"
                    required
                    placeholder="RH, DP, sócio..."
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contract-email" className="mb-2 block text-sm font-bold text-brand-900">
                    E-mail profissional *
                  </label>
                  <input
                    id="contract-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
                  />
                </div>
                <div>
                  <label htmlFor="contract-telefone" className="mb-2 block text-sm font-bold text-brand-900">
                    WhatsApp *
                  </label>
                  <input
                    id="contract-telefone"
                    name="telefone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="(11) 91234-5678"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="contract-dia-pagamento" className="mb-2 block text-sm font-bold text-brand-900">
                  Melhor dia de pagamento *
                </label>
                <select
                  id="contract-dia-pagamento"
                  name="dia_pagamento"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="05">Dia 05</option>
                  <option value="10">Dia 10</option>
                  <option value="15">Dia 15</option>
                  <option value="20">Dia 20</option>
                  <option value="25">Dia 25</option>
                  <option value="a-combinar">A combinar</option>
                </select>
              </div>
            </section>

            <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <input
                type="checkbox"
                checked={acceptedEstimate}
                onChange={(event) => setAcceptedEstimate(event.target.checked)}
                required
                className="mt-1 h-4 w-4 rounded border-slate-300 accent-accent-pink"
              />
              <span className="text-sm font-semibold leading-relaxed text-slate-700">
                Entendo que este valor é uma estimativa comercial e que a SERMST precisa validar
                CNAE, grau de risco, unidades, funções, exames e documentos antes da proposta final.
              </span>
            </label>

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {submitStatus === 'error' ? (
              <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                <p>
                  <strong>Não conseguimos enviar.</strong>{' '}
                  {submitError || 'Tente novamente em alguns instantes ou use o WhatsApp.'}
                </p>
              </div>
            ) : null}

            <button
              type="submit"
              disabled={submitStatus === 'submitting' || !acceptedEstimate}
              className="btn-primary-safe-lg flex w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitStatus === 'submitting' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Enviando solicitação...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Enviar solicitação de contratação
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
