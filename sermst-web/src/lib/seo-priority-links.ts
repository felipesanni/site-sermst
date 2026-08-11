export interface SeoPriorityLink {
  href: string;
  label: string;
  description: string;
}

/**
 * Links contextualizados para aproximar páginas de serviço dos conteúdos que
 * já demonstram demanda orgânica. O texto explica a relação entre as páginas
 * para reforçar arquitetura e intenção, sem criar uma lista genérica de links.
 */
export function getServicePriorityLinks(servico: string): SeoPriorityLink[] {
  switch (servico) {
    case 'exame-admissional-expresso':
      return [
        {
          href: '/exames/como-funciona-o-exame-admissional',
          label: 'Exame admissional: o que é e como funciona',
          description: 'Veja etapas, documentos, exames complementares e a emissão do ASO antes de encaminhar o candidato.',
        },
        {
          href: '/normas/o-que-e-nr-07',
          label: 'NR-07: PCMSO, ASO e exames ocupacionais',
          description: 'Entenda a base normativa que define o protocolo médico e a relação com o eSocial S-2220.',
        },
        {
          href: '/saude/tabela-exames-admissionais-por-funcao',
          label: 'Exames admissionais por função',
          description: 'Consulte exemplos de exames complementares sem aplicar um pacote igual para todos os cargos.',
        },
        {
          href: '/saude/aso-atestado-saude-ocupacional',
          label: 'ASO: o que é e quando emitir',
          description: 'Saiba o que o atestado precisa registrar e como ele fecha o fluxo do exame ocupacional.',
        },
      ];
    case 'exame-demissional':
      return [
        {
          href: '/saude/exame-demissional',
          label: 'Exame demissional: prazo, dispensa e próximos passos',
          description: 'Leia a explicação completa antes de agendar ou aplicar a dispensa do exame.',
        },
        {
          href: '/normas/o-que-e-nr-07',
          label: 'NR-07: regra do exame demissional',
          description: 'Confira os prazos de até 10 dias e os critérios de dispensa ligados ao último exame ocupacional.',
        },
        {
          href: '/saude/pcmso-programa-controle-medico',
          label: 'PCMSO e exames ocupacionais',
          description: 'Entenda por que o demissional precisa estar coerente com riscos, função e programa médico.',
        },
      ];
    case 'pericia-trabalhista-assistente-tecnico':
      return [
        {
          href: '/normas/nr-15-insalubridade',
          label: 'NR-15: insalubridade e avaliação técnica',
          description: 'Revise a base normativa de exposição e adicional antes de discutir o objeto da perícia.',
        },
        {
          href: '/normas/nr-16-periculosidade',
          label: 'NR-16: periculosidade',
          description: 'Veja como o enquadramento técnico de atividades perigosas entra na análise do processo.',
        },
        {
          href: '/saude/gestao-sst',
          label: 'Gestão de SST e prova documental',
          description: 'Organize PGR, PCMSO, laudos e evidências que ajudam a explicar a operação real.',
        },
      ];
    case 'exames-complementares-laboratoriais':
      return [
        {
          href: '/exames/como-funciona-o-exame-admissional',
          label: 'Exame admissional e exames complementares',
          description: 'Veja quando audiometria, laboratório, acuidade visual ou espirometria podem ser solicitados.',
        },
        {
          href: '/saude/pcmso-programa-controle-medico',
          label: 'PCMSO: como definir a grade de exames',
          description: 'O protocolo deve partir dos riscos da função, e não de uma lista fixa para todos os trabalhadores.',
        },
        {
          href: '/servicos/audiometria-ocupacional-clinica/sao-paulo',
          label: 'Audiometria ocupacional em São Paulo',
          description: 'Acesse o serviço específico para exames de audição integrados ao ASO e ao PCMSO.',
        },
      ];
    case 'audiometria-ocupacional-clinica':
      return [
        {
          href: '/normas/o-que-e-nr-07',
          label: 'NR-07 e acompanhamento da saúde',
          description: 'Entenda como o exame de audiometria entra no monitoramento ocupacional.',
        },
        {
          href: '/saude/pcmso-programa-controle-medico',
          label: 'PCMSO: quando a audiometria é indicada',
          description: 'O exame deve acompanhar os riscos e o protocolo médico da empresa.',
        },
        {
          href: '/servicos/exames-complementares-laboratoriais/sao-paulo',
          label: 'Exames complementares ocupacionais',
          description: 'Centralize audiometria e outros exames complementares quando a função exigir.',
        },
      ];
    case 'pcmso-nr07-programa':
      return [
        {
          href: '/normas/o-que-e-nr-07',
          label: 'O que é a NR-07?',
          description: 'Consulte a regra que organiza PCMSO, ASO e exames ocupacionais.',
        },
        {
          href: '/saude/pcmso-programa-controle-medico',
          label: 'PCMSO: significado, validade e conteúdo',
          description: 'Veja como o programa deve acompanhar riscos, funções, exames e mudanças na operação.',
        },
        {
          href: '/normas/nr-01-pgr-atualizada',
          label: 'NR-01 e PGR: a base de riscos do PCMSO',
          description: 'O programa médico precisa conversar com o inventário e o plano de ação do PGR.',
        },
      ];
    case 'treinamentos-nrs-cipa-brigada':
      return [
        {
          href: '/normas/nr-18-construcao-civil',
          label: 'NR-18 na construção civil',
          description: 'Veja quais treinamentos e controles precisam acompanhar cada fase da obra.',
        },
        {
          href: '/treinamentos/nr-18-seguranca-construcao-civil',
          label: 'Treinamento NR-18 para construção civil',
          description: 'Acesse o conteúdo programático, carga horária e público do treinamento específico.',
        },
        {
          href: '/rh/calculadora-cnae-grau-de-risco',
          label: 'CNAE e grau de risco para dimensionar treinamentos',
          description: 'Use o enquadramento como ponto de partida, sempre conferindo os riscos reais da operação.',
        },
      ];
    default:
      return [];
  }
}
