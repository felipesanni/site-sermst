import fs from 'node:fs';
import path from 'node:path';

const rootDir = path.resolve('src');

const literalReplacements = [
  ['Ã£', 'ã'],
  ['Ã¡', 'á'],
  ['Ã¢', 'â'],
  ['Ã ', 'à'],
  ['Ã¤', 'ä'],
  ['Ã©', 'é'],
  ['Ãª', 'ê'],
  ['Ã­', 'í'],
  ['Ã³', 'ó'],
  ['Ã´', 'ô'],
  ['Ãµ', 'õ'],
  ['Ãº', 'ú'],
  ['Ã¼', 'ü'],
  ['Ã§', 'ç'],
  ['Ã‰', 'É'],
  ['Ã', 'Á'],
  ['Ã‚', 'Â'],
  ['Ã€', 'À'],
  ['Ã', 'Í'],
  ['Ã“', 'Ó'],
  ['Ã”', 'Ô'],
  ['Ã•', 'Õ'],
  ['Ãš', 'Ú'],
  ['Ã‡', 'Ç'],
  ['â€™', '’'],
  ['â€˜', '‘'],
  ['â€œ', '“'],
  ['â€', '”'],
  ['â€“', '–'],
  ['â€”', '—'],
  ['â€¦', '…'],
  ['â†’', '→'],
  ['â†', '←'],
  ['Â', ''],
];

const regexReplacements = [
  [/(?<![-/])\bSao Paulo\b/g, 'São Paulo'],
  [/(?<![-/])\bSanto Andre\b/g, 'Santo André'],
  [/(?<![-/])\bSao Bernardo\b/g, 'São Bernardo'],
  [/(?<![-/])\bSao Caetano\b/g, 'São Caetano'],
  [/(?<![-/])\bGestao Ocupacional\b/g, 'Gestão Ocupacional'],
  [/(?<![-/])\bSaude Ocupacional\b/g, 'Saúde Ocupacional'],
  [/(?<![-/])\bSeguranca do Trabalho\b/g, 'Segurança do Trabalho'],
  [/(?<![-/])\bMedicina e Seguranca do Trabalho\b/g, 'Medicina e Segurança do Trabalho'],
  [/(?<![-/])\bgestao\b(?![-/])/g, 'gestão'],
  [/(?<![-/])\bGestao\b(?![-/])/g, 'Gestão'],
  [/(?<![-/])\bsaude\b(?![-/])/g, 'saúde'],
  [/(?<![-/])\bSaude\b(?![-/])/g, 'Saúde'],
  [/(?<![-/])\badmissao\b(?![-/])/g, 'admissão'],
  [/(?<![-/])\badmissoes\b(?![-/])/g, 'admissões'],
  [/(?<![-/])\bfiscalizacao\b(?![-/])/g, 'fiscalização'],
  [/(?<![-/])\bfiscalizacoes\b(?![-/])/g, 'fiscalizações'],
  [/(?<![-/])\boperacao\b(?![-/])/g, 'operação'],
  [/(?<![-/])\boperacoes\b(?![-/])/g, 'operações'],
  [/(?<![-/])\bdocumentacao\b(?![-/])/g, 'documentação'],
  [/(?<![-/])\binformacoes\b(?![-/])/g, 'informações'],
  [/(?<![-/])\baplicacao\b(?![-/])/g, 'aplicação'],
  [/(?<![-/])\bsolucoes\b(?![-/])/g, 'soluções'],
  [/(?<![-/])\bsolucao\b(?![-/])/g, 'solução'],
  [/(?<![-/])\bduvidas\b(?![-/])/g, 'dúvidas'],
  [/(?<![-/])\bclinicas\b(?![-/])/g, 'clínicas'],
  [/(?<![-/])\bjuridica\b(?![-/])/g, 'jurídica'],
  [/(?<![-/])\bjuridico\b(?![-/])/g, 'jurídico'],
  [/(?<![-/])\bpericia\b(?![-/])/g, 'perícia'],
  [/(?<![-/])\btoxicologico\b(?![-/])/g, 'toxicológico'],
  [/(?<![-/])\bfuncao\b(?![-/])/g, 'função'],
  [/(?<![-/])\bprevencao\b(?![-/])/g, 'prevenção'],
  [/(?<![-/])\bvalidacao\b(?![-/])/g, 'validação'],
  [/(?<![-/])\bintegracao\b(?![-/])/g, 'integração'],
  [/(?<![-/])\bpromocao\b(?![-/])/g, 'promoção'],
  [/(?<![-/])\bdemissao\b(?![-/])/g, 'demissão'],
  [/(?<![-/])\bprotecao\b(?![-/])/g, 'proteção'],
  [/(?<![-/])\bavaliacao\b(?![-/])/g, 'avaliação'],
  [/(?<![-/])\bexplicacao\b(?![-/])/g, 'explicação'],
  [/(?<![-/])\bcertificacao\b(?![-/])/g, 'certificação'],
  [/(?<![-/])\bexigencias\b(?![-/])/g, 'exigências'],
  [/(?<![-/])\btecnico\b(?![-/])/g, 'técnico'],
  [/(?<![-/])\btecnica\b(?![-/])/g, 'técnica'],
  [/(?<![-/])\btecnicas\b(?![-/])/g, 'técnicas'],
  [/(?<![-/])\btecnicos\b(?![-/])/g, 'técnicos'],
  [/(?<![-/])\bclinico\b(?![-/])/g, 'clínico'],
  [/(?<![-/])\bclinica\b(?![-/])/g, 'clínica'],
  [/(?<![-/])\bclinicos\b(?![-/])/g, 'clínicos'],
  [/(?<![-/])\brelogio\b(?![-/])/g, 'relógio'],
  [/(?<![-/])\batraves\b(?![-/])/g, 'através'],
  [/(?<![-/])\bnegocio\b(?![-/])/g, 'negócio'],
  [/(?<![-/])\bnegocios\b(?![-/])/g, 'negócios'],
  [/(?<![-/])\bservicos\b(?![-/])/g, 'serviços'],
  [/(?<![-/])\bservico\b(?![-/])/g, 'serviço'],
  [/(?<![-/])\bcriterio\b(?![-/])/g, 'critério'],
  [/(?<![-/])\bcriterios\b(?![-/])/g, 'critérios'],
  [/(?<![-/])\breferencia\b(?![-/])/g, 'referência'],
  [/(?<![-/])\bagil\b(?![-/])/g, 'ágil'],
  [/(?<![-/])\blogistica\b(?![-/])/g, 'logística'],
  [/(?<![-/])\baeroportuarias\b(?![-/])/g, 'aeroportuárias'],
  [/(?<![-/])\bquimicas\b(?![-/])/g, 'químicas'],
  [/(?<![-/])\bmedico\b(?![-/])/g, 'médico'],
  [/(?<![-/])\bmedica\b(?![-/])/g, 'médica'],
  [/(?<![-/])\bmedicas\b(?![-/])/g, 'médicas'],
  [/(?<![-/])\bmedicos\b(?![-/])/g, 'médicos'],
];

function collectFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(fullPath));
      continue;
    }
    if (/\.(ts|tsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

const changed = [];

for (const file of collectFiles(rootDir)) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  for (const [from, to] of literalReplacements) {
    content = content.split(from).join(to);
  }

  for (const [pattern, replacement] of regexReplacements) {
    content = content.replace(pattern, replacement);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changed.push(path.relative(process.cwd(), file));
  }
}

console.log(`updated ${changed.length} files`);
for (const file of changed) {
  console.log(file);
}
