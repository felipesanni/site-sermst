import type { ContentBridgeLink, FAQItem, SEODocument } from '@/lib/data/seo-content';

export type EmpresarioSection =
  | 'Abertura e cadastro'
  | 'MEI, impostos e dinheiro'
  | 'Funcionários e gestão'
  | 'Licenças e fiscalização';

export interface EmpresarioGuideDocument extends SEODocument {
  section: EmpresarioSection;
  summary: string;
  supportingLinks: ContentBridgeLink[];
  articleSections: Array<{
    title: string;
    paragraphs: string[];
  }>;
  practicalChecklistTitle: string;
  practicalChecklist: string[];
  officialSources: Array<{
    label: string;
    href: string;
  }>;
  lastReviewedAt: string;
}

interface EmpresarioTopicInput {
  section: EmpresarioSection;
  h1: string;
  seoTitle: string;
  hook: string;
  summary: string;
  dor: string;
  solucao: string;
  beneficios: string[];
  note: string;
  articleSections: EmpresarioGuideDocument['articleSections'];
  practicalChecklistTitle: string;
  practicalChecklist: string[];
  faq: FAQItem[];
  officialSources: EmpresarioGuideDocument['officialSources'];
  related: string[];
}

const officialUrls = {
  cnpj: 'https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/cadastros/cnpj',
  redesim: 'https://www.gov.br/empresas-e-negocios/pt-br/redesim',
  registrarEmpresa:
    'https://www.gov.br/empresas-e-negocios/pt-br/drei/orientacoes-de-abertura/quero-registrar-minha-empresa',
  tiposEmpresa:
    'https://www.gov.br/empresas-e-negocios/pt-br/drei/orientacoes-de-abertura/tipos-de-pessoas-juridicas/tipos-de-pessoas-juridicas_capa/',
  dreiFaq:
    'https://www.gov.br/empresas-e-negocios/pt-br/drei/arquivos/faq/perguntas-frequentes',
  nomeEmpresarial:
    'https://www.gov.br/empresas-e-negocios/pt-br/drei/legislacao/instrucoes-normativas/inatrucoes-normativas-em-vigor-html/in_81',
  simples:
    'https://www8.receita.fazenda.gov.br/simplesnacional/documentos/pagina.aspx?id=3',
  notaFiscalMei:
    'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/nota-fiscal',
  nfse: 'https://www.gov.br/pt-br/servicos/emitir-nota-fiscal-de-servico-eletronica',
  meiEmpregado:
    'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/servicos-para-mei/contratacao-de-empregado',
  esocialMei: 'https://www.gov.br/esocial/pt-br/microempreendedor-individual/manual-web-mei',
  esocialEmpresa: 'https://www.gov.br/esocial/pt-br/empresas/manual-web-geral',
  direitosTrabalhistas:
    'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/perguntas-frequentes',
  fgts: 'https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/fgts',
  licenciamento:
    'https://www.gov.br/empresas-e-negocios/pt-br/redesim/ajuda/licenciamento',
  vigilancia:
    'https://www.gov.br/anvisa/pt-br/assuntos/snvs/contatos-vigilancias-sanitarias',
  proLabore: 'https://www.caixa.gov.br/educacao-financeira/empresa/pro-labore/Paginas/default.aspx',
  proLaboreReceita:
    'https://normas.receita.fazenda.gov.br/sijut2consulta/link.action?idAto=134391',
  inscricaoEstadual:
    'https://apdigital.portal.ap.gov.br/carta-de-servico/emitir-a-inscricao-estadual56',
} as const;

const empresarioTopics: Record<string, EmpresarioTopicInput> = {
  'cnpj-ativo-o-que-significa': {
    section: 'Abertura e cadastro',
    h1: 'CNPJ ativo: o que significa e o que essa situação não comprova',
    seoTitle: 'CNPJ ativo: o que significa | SERMST',
    hook:
      'Entenda o que aparece na consulta de CNPJ ativo, a diferença entre situação cadastral e situação fiscal e quais dados precisam ser conferidos.',
    summary:
      'CNPJ ativo indica que a inscrição não está suspensa, inapta, baixada ou nula. O status cadastral, sozinho, não informa se a empresa tem débitos nem substitui licenças e outras verificações.',
    dor:
      'A consulta pública mostra a palavra “ativa” em destaque, e isso costuma ser interpretado como um atestado geral de regularidade. A leitura parece lógica, mas mistura cadastros que têm finalidades diferentes.',
    solucao:
      'Use a consulta do CNPJ para confirmar identidade e situação cadastral. Quando a dúvida envolver tributos, licenças ou obrigações específicas, confira também o órgão responsável por cada assunto.',
    beneficios: [
      'Entender exatamente o alcance da situação cadastral ativa',
      'Diferenciar CNPJ, certidão fiscal e licença de funcionamento',
      'Saber quais dados conferir antes de fechar negócio com outra empresa',
    ],
    note:
      'Situação cadastral e situação fiscal não são a mesma consulta. Uma empresa pode ter CNPJ ativo e ainda precisar resolver débitos, declarações ou licenças em outros órgãos.',
    articleSections: [
      {
        title: 'O que significa CNPJ ativo',
        paragraphs: [
          'O Cadastro Nacional da Pessoa Jurídica identifica empresas e outras entidades perante a Receita Federal. Quando a situação aparece como ativa, a inscrição não se encontra nas categorias suspensa, inapta, baixada ou nula. Em termos simples, o cadastro existe e está habilitado naquela classificação.',
          'A consulta também apresenta informações como nome empresarial, endereço, data de abertura, natureza jurídica e atividades econômicas. Vale conferir se esses dados correspondem à empresa com a qual você está lidando, especialmente o número completo do CNPJ e o nome empresarial.',
        ],
      },
      {
        title: 'O que o status ativo não responde',
        paragraphs: [
          'A situação ativa não funciona como certidão negativa de débitos. Ela também não confirma, por si só, que todas as inscrições estaduais ou municipais, licenças, obrigações trabalhistas e autorizações do estabelecimento estejam regulares.',
          'Para verificar regularidade fiscal, procure as certidões e consultas próprias da Receita, do estado ou do município. Para licenciamento, observe a atividade e o endereço do estabelecimento. Cada órgão responde por uma parte diferente da vida da empresa.',
        ],
      },
      {
        title: 'Como consultar um CNPJ com atenção',
        paragraphs: [
          'Comece pelo comprovante oficial da Receita Federal ou pelos serviços da Redesim. Evite tomar decisões com base apenas em capturas de tela enviadas por terceiros, pois os dados podem estar antigos ou incompletos.',
          'Além do status, compare razão social, nome fantasia, CNAEs, endereço e data de abertura. Se o objetivo for avaliar risco comercial, inclua certidões e documentos compatíveis com o tipo e o valor da operação.',
        ],
      },
    ],
    practicalChecklistTitle: 'O que conferir numa consulta de CNPJ',
    practicalChecklist: [
      'Número completo do CNPJ e situação cadastral.',
      'Nome empresarial e nome fantasia, quando informado.',
      'Endereço cadastrado e data de abertura.',
      'Atividade principal e atividades secundárias.',
      'Certidões ou licenças necessárias para a finalidade da consulta.',
    ],
    faq: [
      {
        q: 'CNPJ ativo significa que a empresa não tem dívidas?',
        a: 'Não. O status ativo é cadastral. Para verificar débitos e regularidade fiscal, é preciso consultar certidões e serviços específicos dos órgãos tributários competentes.',
      },
      {
        q: 'CNPJ ativo significa que a empresa pode funcionar?',
        a: 'Não necessariamente. O funcionamento pode depender de viabilidade do endereço, alvará e licenças sanitárias, ambientais ou de segurança, conforme a atividade e as regras locais.',
      },
      {
        q: 'Onde consultar a situação de um CNPJ?',
        a: 'Use os canais oficiais da Receita Federal ou da Redesim para emitir o comprovante de inscrição e situação cadastral.',
      },
    ],
    officialSources: [
      { label: 'Receita Federal: Cadastro Nacional da Pessoa Jurídica', href: officialUrls.cnpj },
      { label: 'Redesim: consultas e comprovantes do CNPJ', href: officialUrls.redesim },
    ],
    related: ['razao-social', 'inscricao-estadual', 'alvara-de-funcionamento'],
  },

  'inscricao-estadual': {
    section: 'Abertura e cadastro',
    h1: 'Inscrição estadual: o que é, para que serve e quem precisa ter',
    seoTitle: 'Inscrição estadual: o que é e para que serve | SERMST',
    hook:
      'Veja como a inscrição estadual se relaciona com o ICMS, por que nem toda empresa precisa dela e onde consultar as regras do seu estado.',
    summary:
      'A inscrição estadual é o registro do contribuinte no cadastro do ICMS mantido pela Secretaria da Fazenda do estado. A necessidade depende da atividade e da legislação estadual.',
    dor:
      'CNPJ, inscrição estadual e inscrição municipal aparecem juntos em muitos cadastros. Como os nomes são parecidos, é comum imaginar que os três números cumprem a mesma função.',
    solucao:
      'Relacione cada inscrição ao tributo e ao órgão responsável. O CNPJ é federal, a inscrição estadual está ligada ao cadastro do ICMS e a inscrição municipal costuma se relacionar às atividades e tributos do município.',
    beneficios: [
      'Entender quando a inscrição estadual entra na abertura da empresa',
      'Evitar confundir cadastro estadual com CNPJ ou inscrição municipal',
      'Saber onde confirmar situação e regras aplicáveis ao estabelecimento',
    ],
    note:
      'As regras de inscrição estadual variam entre os estados e conforme a atividade econômica. A Secretaria da Fazenda local é a fonte adequada para confirmar dispensa, obrigatoriedade e procedimentos.',
    articleSections: [
      {
        title: 'Para que serve a inscrição estadual',
        paragraphs: [
          'A inscrição estadual identifica o estabelecimento no cadastro de contribuintes do ICMS. Esse imposto aparece principalmente em operações com mercadorias e em algumas prestações de transporte e comunicação, conforme a legislação aplicável.',
          'O número permite que a administração tributária estadual acompanhe as operações do contribuinte. Ele também costuma ser solicitado em cadastros comerciais, emissão de documentos fiscais e consultas de regularidade ligadas ao estado.',
        ],
      },
      {
        title: 'Toda empresa precisa de inscrição estadual?',
        paragraphs: [
          'Não. Empresas que atuam apenas em atividades não sujeitas ao ICMS podem não precisar do cadastro. A resposta depende do CNAE, do que a empresa efetivamente faz e das regras do estado onde está estabelecida.',
          'Um prestador de serviços pode lidar principalmente com inscrição municipal e ISS, enquanto um comércio normalmente precisa observar o cadastro estadual. Há exceções e tratamentos próprios, inclusive para MEI, por isso a validação local é indispensável.',
        ],
      },
      {
        title: 'Como consultar ou solicitar a inscrição',
        paragraphs: [
          'A abertura integrada pela Redesim pode encaminhar informações aos órgãos estaduais, mas o fluxo muda de um estado para outro. Em alguns casos a inscrição é concedida junto com o registro; em outros, há exigências adicionais.',
          'Para consultar, acesse a Secretaria da Fazenda estadual ou o sistema indicado por ela. Confirme o número, a situação cadastral, o endereço do estabelecimento e as atividades vinculadas.',
        ],
      },
    ],
    practicalChecklistTitle: 'Antes de pedir ou consultar a inscrição estadual',
    practicalChecklist: [
      'Confirme o CNAE e a atividade exercida na prática.',
      'Identifique se a operação envolve ICMS.',
      'Consulte o procedimento da Secretaria da Fazenda do estado.',
      'Confira se endereço e atividades estão atualizados.',
      'Não use a inscrição estadual como substituta de outras licenças.',
    ],
    faq: [
      {
        q: 'Inscrição estadual e CNPJ são a mesma coisa?',
        a: 'Não. O CNPJ é um cadastro federal. A inscrição estadual identifica o contribuinte no cadastro de ICMS do estado.',
      },
      {
        q: 'Prestador de serviço precisa de inscrição estadual?',
        a: 'Depende da atividade. Muitos prestadores lidam com inscrição municipal e ISS, mas algumas operações também podem envolver ICMS. A regra deve ser conferida no estado.',
      },
      {
        q: 'MEI precisa de inscrição estadual?',
        a: 'A exigência varia conforme a atividade e o estado. O portal da Secretaria da Fazenda local deve ser consultado para uma resposta segura.',
      },
    ],
    officialSources: [
      { label: 'Redesim: etapas para registrar uma empresa', href: officialUrls.registrarEmpresa },
      { label: 'Serviço estadual: definição de inscrição estadual', href: officialUrls.inscricaoEstadual },
    ],
    related: ['cnpj-ativo-o-que-significa', 'nota-fiscal-mei', 'tipos-de-empresa'],
  },

  'tipos-de-empresa': {
    section: 'Abertura e cadastro',
    h1: 'Tipos de empresa no Brasil: diferenças entre MEI, EI, LTDA e outros formatos',
    seoTitle: 'Tipos de empresa: MEI, EI, LTDA e outros | SERMST',
    hook:
      'Entenda a diferença entre natureza jurídica, porte e regime tributário antes de comparar MEI, Empresário Individual, Sociedade Limitada e outros formatos.',
    summary:
      'Tipo jurídico, porte e regime tributário são escolhas diferentes. MEI, Empresário Individual e Sociedade Limitada tratam da estrutura; ME e EPP indicam porte; Simples Nacional é um regime tributário.',
    dor:
      'Siglas como MEI, ME, EPP, EI e LTDA aparecem lado a lado, embora não pertençam à mesma classificação. Essa mistura leva muita gente a comparar opções que respondem a perguntas diferentes.',
    solucao:
      'Separe a decisão em três partes: forma jurídica, porte e tributação. Depois avalie número de sócios, responsabilidade patrimonial, atividade, faturamento e planos de crescimento.',
    beneficios: [
      'Distinguir tipo jurídico, porte empresarial e regime tributário',
      'Comparar estruturas com ou sem sócios',
      'Chegar mais preparado à conversa com contador ou profissional jurídico',
    ],
    note:
      'A escolha depende do caso concreto. Número de sócios, atividade, risco patrimonial, faturamento e regras profissionais podem mudar a opção mais adequada.',
    articleSections: [
      {
        title: 'A diferença entre tipo, porte e regime tributário',
        paragraphs: [
          'A natureza jurídica define como a empresa é constituída e quem responde por ela. O porte organiza a empresa por critérios legais, como receita. Já o regime tributário estabelece a forma de apuração e recolhimento de tributos.',
          'Uma Sociedade Limitada, por exemplo, pode ser enquadrada como microempresa e optar pelo Simples Nacional se cumprir os requisitos. LTDA, ME e Simples descrevem aspectos diferentes da mesma empresa.',
        ],
      },
      {
        title: 'Os formatos mais conhecidos',
        paragraphs: [
          'O MEI é uma modalidade simplificada, individual e sujeita a limites próprios. O Empresário Individual também não tem sócios e, em regra, responde de forma ilimitada pelas obrigações empresariais. A Sociedade Limitada pode ter uma ou mais pessoas no quadro societário e usa contrato social.',
          'A Sociedade Anônima divide o capital em ações e possui estrutura mais complexa. Cooperativas, sociedades simples e outros formatos atendem situações específicas. Nem toda atividade profissional ou econômica pode usar qualquer estrutura.',
        ],
      },
      {
        title: 'Como comparar antes de abrir',
        paragraphs: [
          'Comece pela pergunta mais concreta: haverá sócios? Em seguida, avalie responsabilidade patrimonial, atividade permitida, necessidade de investimento, forma de administração e previsão de faturamento.',
          'Também vale pensar no futuro. A estrutura que serve para uma operação individual pode precisar de alteração quando entram sócios, investidores ou novas atividades. Registrar a empresa corretamente desde o início reduz retrabalho.',
        ],
      },
    ],
    practicalChecklistTitle: 'Perguntas para comparar tipos de empresa',
    practicalChecklist: [
      'A empresa terá um titular ou mais sócios?',
      'Qual atividade será exercida e quais regras profissionais se aplicam?',
      'Como ficará a responsabilidade dos participantes?',
      'Qual é a expectativa de faturamento e crescimento?',
      'Qual regime tributário pode ser usado dentro dos requisitos legais?',
    ],
    faq: [
      {
        q: 'ME e LTDA são a mesma coisa?',
        a: 'Não. ME é um enquadramento de porte. LTDA é um tipo jurídico. Uma Sociedade Limitada pode ser enquadrada como ME se atender aos requisitos.',
      },
      {
        q: 'Uma LTDA pode ter apenas um sócio?',
        a: 'Sim. A Sociedade Limitada pode ser constituída por uma única pessoa ou por mais sócios.',
      },
      {
        q: 'Simples Nacional é um tipo de empresa?',
        a: 'Não. Simples Nacional é um regime tributário disponível para empresas que atendem às condições legais.',
      },
    ],
    officialSources: [
      { label: 'DREI: tipos de pessoas jurídicas', href: officialUrls.tiposEmpresa },
      { label: 'DREI: perguntas frequentes sobre registro empresarial', href: officialUrls.dreiFaq },
    ],
    related: ['contrato-social', 'capital-social', 'simples-nacional'],
  },

  'contrato-social': {
    section: 'Abertura e cadastro',
    h1: 'Contrato social: o que é, o que deve constar e quando atualizar',
    seoTitle: 'Contrato social: o que é e para que serve | SERMST',
    hook:
      'Saiba para que serve o contrato social, quais decisões da sociedade aparecem no documento e em quais mudanças ele costuma precisar de atualização.',
    summary:
      'O contrato social é o ato constitutivo usado por sociedades contratuais, como a Sociedade Limitada. Ele registra regras sobre sócios, objeto, capital, quotas, administração, nome e endereço.',
    dor:
      'Muita gente só volta a olhar o contrato social quando o banco, um cliente ou a Junta Comercial pede uma cópia atualizada. Nesse intervalo, a empresa pode ter mudado sem levar as alterações ao documento.',
    solucao:
      'Trate o contrato como o registro das decisões centrais da sociedade. Sempre que houver mudança relevante em sócios, capital, administração, endereço, nome ou objeto, confirme se é necessária alteração formal.',
    beneficios: [
      'Entender a função prática do contrato social',
      'Saber quais informações precisam estar coerentes com a empresa atual',
      'Reconhecer mudanças que pedem avaliação de alteração contratual',
    ],
    note:
      'O conteúdo e a forma do ato constitutivo dependem do tipo jurídico e do órgão de registro. Alterações societárias devem ser avaliadas com apoio contábil ou jurídico.',
    articleSections: [
      {
        title: 'O que é contrato social',
        paragraphs: [
          'O contrato social formaliza a constituição de uma sociedade contratual. Na Sociedade Limitada, ele define as bases do negócio e a relação entre os sócios. É comum compará-lo a uma certidão de nascimento da empresa, mas sua função vai além de identificar a pessoa jurídica.',
          'O documento costuma indicar nome empresarial, objeto social, sede, capital, quotas, participantes e forma de administração. Também pode trazer regras para deliberações, retirada de sócios, distribuição de resultados e outras situações relevantes.',
        ],
      },
      {
        title: 'O que conferir no documento',
        paragraphs: [
          'Leia com atenção quem pode representar a sociedade, quais poderes foram atribuídos ao administrador e como o capital foi dividido. Essas cláusulas afetam contratos, contas bancárias e decisões internas.',
          'O objeto social merece cuidado porque descreve as atividades da empresa. Ele precisa conversar com os cadastros e com a operação real. Um texto genérico demais ou desatualizado pode gerar dúvidas em registros e licenças.',
        ],
      },
      {
        title: 'Quando o contrato social precisa mudar',
        paragraphs: [
          'Entrada ou saída de sócio, alteração de endereço, mudança de nome, capital, administração ou atividade costumam exigir análise de alteração contratual. O procedimento e os documentos variam conforme a Junta Comercial e a natureza da mudança.',
          'Guardar apenas a primeira versão pode causar confusão. Mantenha o ato constitutivo e suas alterações organizados, além da versão consolidada quando houver, para saber qual regra está vigente.',
        ],
      },
    ],
    practicalChecklistTitle: 'Pontos para revisar no contrato social',
    practicalChecklist: [
      'Nome empresarial e endereço da sede.',
      'Objeto social e atividades atuais.',
      'Sócios, quotas e capital social.',
      'Administrador, poderes e forma de representação.',
      'Alterações registradas e versão vigente do documento.',
    ],
    faq: [
      {
        q: 'MEI tem contrato social?',
        a: 'Não no mesmo formato de uma Sociedade Limitada. O MEI comprova sua constituição pelo CCMEI e segue regras próprias de formalização.',
      },
      {
        q: 'Contrato social e CNPJ são a mesma coisa?',
        a: 'Não. O contrato social é o ato constitutivo da sociedade. O CNPJ é a inscrição cadastral da pessoa jurídica perante a Receita Federal.',
      },
      {
        q: 'É preciso atualizar o contrato ao mudar de endereço?',
        a: 'A mudança de sede normalmente exige procedimento de alteração e atualização dos cadastros. O fluxo exato depende do órgão de registro e do local.',
      },
    ],
    officialSources: [
      { label: 'DREI: características da Sociedade Limitada', href: officialUrls.tiposEmpresa },
      { label: 'DREI: perguntas frequentes sobre atos empresariais', href: officialUrls.dreiFaq },
    ],
    related: ['razao-social', 'capital-social', 'tipos-de-empresa'],
  },

  'razao-social': {
    section: 'Abertura e cadastro',
    h1: 'Razão social: o que é e qual a diferença para nome fantasia',
    seoTitle: 'Razão social: diferença para nome fantasia | SERMST',
    hook:
      'Entenda por que razão social é chamada de nome empresarial nos registros, onde ela aparece e como se diferencia do nome usado na comunicação com o público.',
    summary:
      'Razão social é a expressão usada no dia a dia para o nome empresarial registrado. Nome fantasia é a identificação comercial pela qual o negócio pode se apresentar ao público.',
    dor:
      'O formulário pede razão social, a fachada mostra outro nome e a nota fiscal traz os dois. Sem entender a diferença, é fácil preencher contratos e cadastros com a informação errada.',
    solucao:
      'Use o nome empresarial exatamente como consta no ato registrado e no CNPJ quando o campo pedir razão social. Use o nome fantasia somente nos espaços destinados à identificação comercial.',
    beneficios: [
      'Preencher contratos e cadastros com o nome correto',
      'Diferenciar identificação jurídica e comunicação comercial',
      'Conferir divergências entre CNPJ, documento societário e nota fiscal',
    ],
    note:
      'O termo técnico usado nas regras de registro é nome empresarial. Sua composição e alteração seguem critérios próprios e não substituem o registro de marca.',
    articleSections: [
      {
        title: 'O que é razão social',
        paragraphs: [
          'Razão social é o nome pelo qual muitas pessoas conhecem a identificação jurídica da empresa. Nos atos de registro, a expressão usada é nome empresarial. Ele aparece no CNPJ, no contrato social ou requerimento de empresário, em notas e em outros documentos formais.',
          'A composição depende do tipo jurídico. O nome empresarial pode assumir forma de firma ou denominação e precisa observar regras como veracidade e novidade no âmbito do registro competente.',
        ],
      },
      {
        title: 'Razão social e nome fantasia',
        paragraphs: [
          'O nome fantasia é usado na apresentação comercial: fachada, site, redes sociais e materiais de divulgação. Ele pode ser mais curto e fácil de lembrar. Já o nome empresarial identifica formalmente a pessoa jurídica.',
          'Os dois podem ser parecidos ou completamente diferentes. Em um contrato, boleto ou cadastro de fornecedor, observe o rótulo do campo. Quando houver dúvida, compare com o comprovante oficial do CNPJ.',
        ],
      },
      {
        title: 'Como escolher e alterar o nome empresarial',
        paragraphs: [
          'Antes do registro, a consulta de viabilidade verifica a disponibilidade do nome e a compatibilidade inicial do endereço. As regras consideram o tipo jurídico e evitam nomes idênticos ou excessivamente semelhantes dentro da proteção registral.',
          'A alteração posterior exige ato próprio e atualização dos cadastros integrados. Também é importante lembrar que nome empresarial, nome fantasia, domínio de internet e marca registrada são proteções diferentes.',
        ],
      },
    ],
    practicalChecklistTitle: 'Onde usar cada nome',
    practicalChecklist: [
      'Razão social ou nome empresarial em contratos e cadastros oficiais.',
      'Nome fantasia na comunicação comercial, quando houver.',
      'CNPJ para confirmar a identidade da pessoa jurídica.',
      'Consulta de viabilidade antes de registrar um novo nome empresarial.',
      'Pesquisa de marca quando a intenção for proteger a identidade comercial.',
    ],
    faq: [
      {
        q: 'Razão social e nome empresarial são a mesma coisa?',
        a: 'No uso comum, sim. A legislação e os órgãos de registro usam a expressão nome empresarial.',
      },
      {
        q: 'Razão social e nome fantasia podem ser iguais?',
        a: 'Podem, mas não precisam. O nome empresarial identifica formalmente a empresa, enquanto o nome fantasia é usado na apresentação comercial.',
      },
      {
        q: 'Registrar a razão social protege a marca?',
        a: 'Não de forma equivalente. Nome empresarial e marca seguem sistemas de proteção diferentes. A proteção de marca depende do procedimento próprio perante o INPI.',
      },
    ],
    officialSources: [
      { label: 'DREI: regras de composição do nome empresarial', href: officialUrls.nomeEmpresarial },
      { label: 'Redesim: registro e consulta de viabilidade', href: officialUrls.registrarEmpresa },
    ],
    related: ['contrato-social', 'cnpj-ativo-o-que-significa', 'capital-social'],
  },

  'capital-social': {
    section: 'Abertura e cadastro',
    h1: 'Capital social: o que é, como definir e o que significa integralizar',
    seoTitle: 'Capital social: o que é e como funciona | SERMST',
    hook:
      'Veja o que o capital social representa, como ele é dividido entre os sócios e por que esse valor não deve ser confundido com faturamento ou saldo bancário.',
    summary:
      'Capital social representa os recursos que os participantes se comprometem a colocar na empresa. Na sociedade limitada, ele é dividido em quotas e consta do contrato social.',
    dor:
      'Ao abrir a empresa, muita gente informa um valor apenas para concluir o cadastro. Depois percebe que o capital aparece em contratos, divisão de quotas e discussões sobre responsabilidade dos sócios.',
    solucao:
      'Defina o capital com base no que o negócio precisa para começar e na forma como cada participante contribuirá. Registre prazos, bens e valores de maneira coerente com o contrato e com a contabilidade.',
    beneficios: [
      'Entender a diferença entre capital, faturamento e patrimônio',
      'Visualizar como as quotas representam a participação dos sócios',
      'Evitar informar um valor sem relação com o plano inicial da empresa',
    ],
    note:
      'Alguns tipos de empresa ou atividades têm regras específicas de capital. A forma de integralização e os efeitos sobre a responsabilidade devem ser analisados no caso concreto.',
    articleSections: [
      {
        title: 'O que é capital social',
        paragraphs: [
          'O capital social é o valor destinado pelos sócios ou pelo titular à formação da empresa. Pode representar dinheiro e, quando permitido e corretamente avaliado, bens usados no negócio. O contrato registra o total e a participação de cada sócio.',
          'Esse valor ajuda a mostrar como a estrutura inicial será financiada. Ele não é uma promessa de faturamento e não corresponde necessariamente ao saldo disponível na conta bancária em todos os momentos.',
        ],
      },
      {
        title: 'Capital subscrito e capital integralizado',
        paragraphs: [
          'Capital subscrito é o montante que os participantes se comprometem a aportar. Capital integralizado é a parte que já foi efetivamente entregue à sociedade, conforme a forma e o prazo previstos no contrato.',
          'Se o contrato indicar integralização futura, os sócios precisam cumprir o compromisso. Na Sociedade Limitada, a integralização também se relaciona com a responsabilidade prevista para as quotas.',
        ],
      },
      {
        title: 'Como pensar no valor inicial',
        paragraphs: [
          'Considere despesas de abertura, equipamentos, estoque, tecnologia, aluguel e capital de giro. O cálculo não precisa adivinhar todo o futuro da empresa, mas deve ter uma justificativa econômica razoável.',
          'O capital pode ser alterado depois mediante o procedimento societário adequado. Aumentos e reduções têm efeitos jurídicos e contábeis, por isso não devem ser tratados como simples edição cadastral.',
        ],
      },
    ],
    practicalChecklistTitle: 'O que avaliar ao definir o capital social',
    practicalChecklist: [
      'Investimento necessário para iniciar a operação.',
      'Contribuição de cada sócio em dinheiro ou bens.',
      'Percentual de quotas e poder de decisão previsto no contrato.',
      'Prazo e forma de integralização.',
      'Necessidade de regras especiais para a atividade ou tipo jurídico.',
    ],
    faq: [
      {
        q: 'Capital social é o faturamento da empresa?',
        a: 'Não. Faturamento é a receita gerada pelas vendas e serviços. Capital social é o recurso comprometido pelos participantes para formar a empresa.',
      },
      {
        q: 'Capital social precisa ficar parado na conta?',
        a: 'Não. Depois de integralizado, ele pode ser usado nas atividades da empresa. A movimentação deve ser registrada corretamente na contabilidade.',
      },
      {
        q: 'É possível alterar o capital social?',
        a: 'Sim, mediante o procedimento societário e registral adequado. A alteração deve considerar efeitos jurídicos, contábeis e tributários.',
      },
    ],
    officialSources: [
      { label: 'DREI: tipos jurídicos e capital social', href: officialUrls.tiposEmpresa },
      { label: 'DREI: perguntas frequentes sobre Sociedade Limitada', href: officialUrls.dreiFaq },
    ],
    related: ['contrato-social', 'pro-labore', 'tipos-de-empresa'],
  },

  'alvara-de-funcionamento': {
    section: 'Licenças e fiscalização',
    h1: 'Alvará de funcionamento: o que é, quem precisa e como funciona o licenciamento',
    seoTitle: 'Alvará de funcionamento: o que é e como obter | SERMST',
    hook:
      'Entenda como viabilidade, grau de risco e licenciamento se relacionam com o alvará de funcionamento e por que as regras variam conforme atividade e município.',
    summary:
      'O alvará integra o licenciamento que autoriza o funcionamento do estabelecimento. Exigências, dispensas, validade e vistoria dependem do risco, da atividade e das normas locais.',
    dor:
      'A empresa recebe o CNPJ e imagina que já pode abrir as portas. Só depois descobre que endereço, atividade e risco precisam passar pela análise do município e, em alguns casos, de outros órgãos.',
    solucao:
      'Verifique a viabilidade do endereço antes de assumir compromissos e acompanhe o licenciamento pela Redesim ou pelo portal local. Considere todas as autorizações ligadas à atividade.',
    beneficios: [
      'Entender em que momento o alvará aparece na abertura',
      'Relacionar grau de risco, vistoria e tipo de licença',
      'Evitar confundir CNPJ emitido com autorização para funcionar',
    ],
    note:
      'Municípios e órgãos licenciadores aplicam regras próprias. Atividades de baixo risco podem ter tratamento simplificado, enquanto atividades de maior risco dependem de análise ou vistoria prévia.',
    articleSections: [
      {
        title: 'O que é alvará de funcionamento',
        paragraphs: [
          'O alvará é uma licença relacionada ao funcionamento da empresa em determinado local. Ele aparece na etapa de licenciamento, depois das verificações de registro e inscrições tributárias previstas no fluxo de abertura.',
          'A autorização considera atividade, endereço e requisitos locais. Dependendo do caso, entram segurança sanitária, meio ambiente, prevenção contra incêndio, uso do solo e outras exigências.',
        ],
      },
      {
        title: 'Viabilidade e classificação de risco',
        paragraphs: [
          'A consulta de viabilidade verifica se a atividade pode ser exercida no endereço escolhido. Fazer essa consulta antes de assinar um contrato longo de aluguel reduz o risco de descobrir uma restrição quando o investimento já foi feito.',
          'A classificação de risco influencia o fluxo. Atividades de baixo risco podem ter dispensa ou licenciamento simplificado. Atividades de risco moderado ou alto podem exigir licença provisória, análise documental ou vistoria antes do início.',
        ],
      },
      {
        title: 'Alvará não é a única licença possível',
        paragraphs: [
          'Restaurantes, clínicas, indústrias, escolas, obras e outros negócios podem precisar de autorizações específicas. A lista depende do que é feito no local, não apenas do nome comercial da empresa.',
          'Se a atividade, o endereço ou a estrutura mudarem, revise o licenciamento. Uma autorização emitida para uma condição anterior pode não cobrir a operação atual.',
        ],
      },
    ],
    practicalChecklistTitle: 'Antes de iniciar o funcionamento',
    practicalChecklist: [
      'Faça a consulta de viabilidade do endereço.',
      'Confirme CNAEs e atividades realizadas no local.',
      'Veja a classificação de risco e o fluxo de licenciamento.',
      'Identifique licenças sanitárias, ambientais e de segurança aplicáveis.',
      'Guarde autorizações e acompanhe validade e alterações.',
    ],
    faq: [
      {
        q: 'Toda empresa precisa de alvará de funcionamento?',
        a: 'A exigência e a possibilidade de dispensa dependem da atividade, do risco e das regras locais. A consulta deve ser feita no município e no sistema de licenciamento aplicável.',
      },
      {
        q: 'Ter CNPJ permite abrir o estabelecimento?',
        a: 'Não necessariamente. O CNPJ é uma inscrição cadastral. O funcionamento pode depender de viabilidade, alvará e outras licenças.',
      },
      {
        q: 'Negócio em casa precisa de alvará?',
        a: 'Depende da atividade e da legislação municipal. Mesmo sem atendimento ao público, pode haver regras de uso do endereço e licenciamento.',
      },
    ],
    officialSources: [
      { label: 'Redesim: orientações sobre licenciamento', href: officialUrls.licenciamento },
      { label: 'DREI: etapas para registrar uma empresa', href: officialUrls.registrarEmpresa },
    ],
    related: ['vigilancia-sanitaria', 'cnpj-ativo-o-que-significa', 'inscricao-estadual'],
  },

  'simples-nacional': {
    section: 'MEI, impostos e dinheiro',
    h1: 'Simples Nacional: o que é, como funciona e quem pode optar',
    seoTitle: 'Simples Nacional: o que é e como funciona | SERMST',
    hook:
      'Entenda como funciona o Simples Nacional, quais empresas podem pedir a opção e por que o DAS não elimina todas as obrigações tributárias e trabalhistas.',
    summary:
      'Simples Nacional é um regime tributário para microempresas e empresas de pequeno porte que cumprem os requisitos legais. Ele reúne tributos no DAS, mas não transforma todas as rotinas em uma única obrigação.',
    dor:
      'O nome “Simples” sugere que basta pagar uma guia por mês. Na prática, enquadramento, atividade, faturamento, folha, documentos fiscais e declarações continuam exigindo acompanhamento.',
    solucao:
      'Entenda primeiro se a empresa pode optar pelo regime. Depois acompanhe faturamento, anexos, obrigações acessórias e situações que podem gerar impedimento ou exclusão.',
    beneficios: [
      'Diferenciar Simples Nacional, MEI e porte empresarial',
      'Entender a função do DAS sem criar uma falsa sensação de cobertura total',
      'Saber quais dados levar para uma análise tributária responsável',
    ],
    note:
      'A escolha de regime depende de atividade, receita, folha, despesas e regras vigentes. Comparações de carga tributária devem ser feitas com números da empresa e orientação contábil.',
    articleSections: [
      {
        title: 'O que é Simples Nacional',
        paragraphs: [
          'O Simples Nacional é um regime compartilhado de arrecadação, cobrança e fiscalização de tributos voltado a microempresas e empresas de pequeno porte. A Lei Complementar 123 criou o tratamento diferenciado e o Comitê Gestor regulamenta sua aplicação.',
          'O pagamento ocorre por meio do Documento de Arrecadação do Simples Nacional, o DAS. A guia reúne tributos abrangidos pelo regime, mas a composição e a alíquota efetiva variam conforme atividade, receita acumulada e regras do anexo aplicável.',
        ],
      },
      {
        title: 'Quem pode optar',
        paragraphs: [
          'A empresa precisa se enquadrar como ME ou EPP, exercer atividade permitida, cumprir requisitos legais e formalizar a opção no período aplicável. Débitos e participações societárias também podem interferir.',
          'Ser uma Sociedade Limitada ou um Empresário Individual não impede, por si só, a opção. Tipo jurídico e regime tributário são classificações diferentes. O MEI, por sua vez, usa o Simei, que tem regras próprias dentro do universo do Simples.',
        ],
      },
      {
        title: 'O que continua fora do DAS',
        paragraphs: [
          'A guia não substitui emissão de nota, escrituração, declarações, cadastro de empregados e demais rotinas aplicáveis. Alguns tributos e situações também podem receber tratamento fora do recolhimento unificado.',
          'O acompanhamento mensal evita surpresa. Mudança de atividade, crescimento do faturamento, contratação e alteração societária podem modificar a análise do regime.',
        ],
      },
    ],
    practicalChecklistTitle: 'Dados para avaliar o Simples Nacional',
    practicalChecklist: [
      'Natureza jurídica e porte da empresa.',
      'Atividades e CNAEs exercidos de fato.',
      'Receita bruta acumulada e projeção do ano.',
      'Folha de salários e demais despesas relevantes.',
      'Pendências e situações que possam impedir a opção.',
    ],
    faq: [
      {
        q: 'Simples Nacional e MEI são a mesma coisa?',
        a: 'Não. O MEI segue o Simei, uma sistemática própria para o microempreendedor individual. O Simples Nacional também atende outras micro e pequenas empresas.',
      },
      {
        q: 'Toda microempresa pode entrar no Simples?',
        a: 'Não. Além do porte, a empresa precisa cumprir requisitos de atividade, receita, situação cadastral e demais condições legais.',
      },
      {
        q: 'Quem está no Simples paga todos os impostos em uma guia?',
        a: 'O DAS reúne os tributos abrangidos pelo regime, mas existem obrigações e situações que podem ficar fora do documento único.',
      },
    ],
    officialSources: [
      { label: 'Portal do Simples Nacional: definição e características', href: officialUrls.simples },
      { label: 'DREI: tipos jurídicos e enquadramentos', href: officialUrls.tiposEmpresa },
    ],
    related: ['tipos-de-empresa', 'nota-fiscal-mei', 'pro-labore'],
  },

  'nota-fiscal-mei': {
    section: 'MEI, impostos e dinheiro',
    h1: 'Nota fiscal MEI: quando emitir, quais tipos existem e como funciona',
    seoTitle: 'Nota fiscal MEI: quando e como emitir | SERMST',
    hook:
      'Veja quando o MEI precisa emitir nota fiscal, a diferença entre NF-e e NFS-e e quais dados devem ser conferidos antes de registrar a operação.',
    summary:
      'O MEI deve emitir nota ao vender ou prestar serviços para pessoa jurídica e também nas situações previstas para consumidor pessoa física. Produtos e serviços usam documentos e sistemas diferentes.',
    dor:
      'Quem começa como MEI costuma procurar um único botão para emitir qualquer nota. A dificuldade aparece quando descobre que venda de produto e prestação de serviço seguem documentos e portais diferentes.',
    solucao:
      'Identifique se a operação envolve mercadoria ou serviço, confirme a obrigação e use o emissor oficial aplicável. Guarde as notas de entrada e saída junto ao controle de receitas.',
    beneficios: [
      'Diferenciar NF-e de produto e NFS-e de serviço',
      'Entender quando o MEI precisa emitir o documento',
      'Evitar erros básicos de cliente, atividade e descrição da operação',
    ],
    note:
      'Regras de mercadorias envolvem a administração tributária estadual. Para serviços, o MEI usa o padrão nacional de NFS-e. Operações específicas podem exigir orientação adicional.',
    articleSections: [
      {
        title: 'Quando o MEI precisa emitir nota fiscal',
        paragraphs: [
          'Em operações com outra pessoa jurídica, a emissão é exigida nas hipóteses previstas para o MEI. Para consumidor pessoa física, a dispensa é a regra em muitas situações, mas a nota deve ser emitida quando solicitada e também em casos específicos, como envio de produto ao cliente.',
          'A nota registra a operação. Ela não substitui o Relatório Mensal de Receitas, a Declaração Anual do MEI nem o controle das compras feitas para o negócio.',
        ],
      },
      {
        title: 'NF-e e NFS-e não são o mesmo documento',
        paragraphs: [
          'A NF-e está ligada à circulação de mercadorias e segue regras estaduais. A NFS-e registra a prestação de serviços. Desde 2023, o MEI prestador usa o emissor nacional para as notas de serviço que precisar emitir.',
          'Antes de começar, confirme se a ocupação cadastrada corresponde ao trabalho realizado. Dados de cliente, descrição, valor e local da prestação precisam refletir a operação verdadeira.',
        ],
      },
      {
        title: 'Cuidados antes de emitir',
        paragraphs: [
          'Cadastre corretamente o tomador ou destinatário e revise o documento antes da confirmação. Cancelamento e substituição seguem regras do sistema usado, por isso corrigir depois pode exigir um procedimento próprio.',
          'Organize notas de compra e venda por período. Além de cumprir a obrigação, esse arquivo ajuda a acompanhar receita, despesas e limite do MEI.',
        ],
      },
    ],
    practicalChecklistTitle: 'Antes de emitir a nota do MEI',
    practicalChecklist: [
      'Defina se a operação é de produto ou serviço.',
      'Confirme cliente, CPF ou CNPJ e endereço quando necessário.',
      'Use atividade e descrição compatíveis com o trabalho realizado.',
      'Revise valor, data e local da operação.',
      'Guarde notas emitidas e recebidas no controle mensal.',
    ],
    faq: [
      {
        q: 'MEI precisa emitir nota para pessoa física?',
        a: 'Em regra, há dispensa, mas o documento deve ser emitido quando o consumidor solicitar e nas demais situações previstas, como certas operações com envio de mercadoria.',
      },
      {
        q: 'MEI emite NF-e ou NFS-e?',
        a: 'Depende da operação. Venda de mercadoria usa documento fiscal de produto conforme as regras estaduais. Prestação de serviço usa NFS-e.',
      },
      {
        q: 'Onde o MEI prestador de serviço emite nota?',
        a: 'No Emissor Nacional da NFS-e, disponível nos canais oficiais do governo.',
      },
    ],
    officialSources: [
      { label: 'Portal do Empreendedor: nota fiscal para MEI', href: officialUrls.notaFiscalMei },
      { label: 'Gov.br: Emissor Nacional de NFS-e', href: officialUrls.nfse },
    ],
    related: ['simples-nacional', 'mei-pode-ter-funcionario', 'inscricao-estadual'],
  },

  'pro-labore': {
    section: 'MEI, impostos e dinheiro',
    h1: 'Pró-labore: o que é, quem recebe e qual a diferença para salário e lucro',
    seoTitle: 'Pró-labore: o que é e como funciona | SERMST',
    hook:
      'Entenda como funciona a remuneração do sócio que trabalha na empresa, a diferença entre pró-labore e distribuição de lucros e os cuidados no registro.',
    summary:
      'Pró-labore é a remuneração do sócio pelo trabalho prestado à empresa. Ele não se confunde com salário de empregado nem com distribuição de lucros e possui tratamento tributário e previdenciário próprio.',
    dor:
      'Quando as finanças pessoais e empresariais se misturam, toda retirada vira “dinheiro do dono”. Isso dificulta saber o que remunera trabalho, o que devolve despesa e o que representa lucro.',
    solucao:
      'Defina funções, valor, periodicidade e forma de registro das retiradas. Separe pró-labore, distribuição de lucros e reembolsos, sempre com documentação contábil compatível.',
    beneficios: [
      'Separar remuneração do trabalho e retorno do capital',
      'Entender por que pró-labore não é salário de empregado',
      'Organizar retiradas sem misturar caixa da empresa e conta pessoal',
    ],
    note:
      'Incidências e obrigações dependem do regime da empresa, da situação do sócio e das regras vigentes. O cálculo deve ser feito com acompanhamento contábil.',
    articleSections: [
      {
        title: 'O que significa pró-labore',
        paragraphs: [
          'A expressão significa remuneração pelo trabalho. Ela é usada para pagar o sócio que exerce função na empresa, como administração, gestão comercial ou direção técnica. O valor precisa ser tratado na contabilidade como remuneração, não como retirada informal.',
          'Sócio e empregado são relações diferentes. O pró-labore não gera automaticamente os mesmos direitos de um contrato de trabalho, como férias, décimo terceiro e FGTS.',
        ],
      },
      {
        title: 'Pró-labore e distribuição de lucros',
        paragraphs: [
          'Pró-labore remunera atividade. Distribuição de lucros depende do resultado apurado pela empresa. Trocar um pelo outro sem base contábil pode gerar inconsistências tributárias e previdenciárias.',
          'A empresa precisa demonstrar o lucro antes de distribuí-lo. Retirar valores ao longo do mês sem classificação também prejudica o fluxo de caixa e a leitura real do desempenho do negócio.',
        ],
      },
      {
        title: 'Como definir o valor',
        paragraphs: [
          'Considere as atividades exercidas, a capacidade financeira da empresa e referências de mercado para função semelhante. O valor não deve ser escolhido apenas pelo gasto pessoal do sócio.',
          'A decisão precisa caber no orçamento e aparecer de forma consistente nos registros. Mudanças relevantes devem ser discutidas com a contabilidade antes do pagamento.',
        ],
      },
    ],
    practicalChecklistTitle: 'Como organizar o pró-labore',
    practicalChecklist: [
      'Liste quais sócios trabalham na operação.',
      'Defina funções e responsabilidades de cada um.',
      'Estabeleça valor e periodicidade compatíveis com o caixa.',
      'Registre a remuneração e os recolhimentos aplicáveis.',
      'Mantenha lucro, reembolso e pró-labore em categorias separadas.',
    ],
    faq: [
      {
        q: 'Pró-labore é salário?',
        a: 'Não. É a remuneração do sócio pelo trabalho prestado. A relação não gera automaticamente os mesmos direitos trabalhistas de um empregado.',
      },
      {
        q: 'Pró-labore é a mesma coisa que lucro?',
        a: 'Não. Pró-labore remunera o trabalho do sócio. Lucro é o resultado da empresa apurado conforme os registros contábeis.',
      },
      {
        q: 'Pró-labore tem INSS e Imposto de Renda?',
        a: 'Há tratamento previdenciário e tributário próprio, que varia conforme valores, regime e situação do contribuinte. O cálculo deve seguir as regras vigentes.',
      },
    ],
    officialSources: [
      { label: 'Caixa: educação financeira sobre pró-labore', href: officialUrls.proLabore },
      { label: 'Receita Federal: pró-labore e contribuições', href: officialUrls.proLaboreReceita },
    ],
    related: ['capital-social', 'o-que-faz-um-contador', 'folha-de-pagamento'],
  },

  'o-que-faz-um-contador': {
    section: 'MEI, impostos e dinheiro',
    h1: 'O que faz um contador e quando a empresa precisa desse profissional',
    seoTitle: 'O que faz um contador em uma empresa | SERMST',
    hook:
      'Conheça as principais atividades da contabilidade, o que depende do contrato com o escritório e quais informações continuam sob responsabilidade da empresa.',
    summary:
      'O contador organiza registros contábeis, demonstrações, apurações e obrigações contratadas. O escopo varia, e a qualidade do trabalho depende das informações enviadas pela própria empresa.',
    dor:
      'A empresa contrata um escritório e passa a acreditar que qualquer assunto burocrático será resolvido automaticamente. O problema surge quando uma tarefa não estava no contrato ou dependia de dados que nunca foram enviados.',
    solucao:
      'Defina o escopo do serviço, os responsáveis e um calendário de envio. Pergunte de forma direta quem cuida de notas, folha, tributos, registros societários, licenças e relatórios.',
    beneficios: [
      'Entender as frentes mais comuns do trabalho contábil',
      'Separar serviço contratado e responsabilidade interna',
      'Melhorar o fluxo de documentos entre empresa e escritório',
    ],
    note:
      'Escritórios oferecem pacotes diferentes. Leia o contrato e confirme quais rotinas, declarações e atendimentos estão incluídos antes de presumir que uma tarefa será executada.',
    articleSections: [
      {
        title: 'As principais atividades da contabilidade',
        paragraphs: [
          'A contabilidade registra os fatos econômicos da empresa, organiza livros e demonstrações e dá suporte à apuração de tributos. Conforme o contrato, também pode cuidar de folha, obrigações acessórias e rotinas societárias.',
          'Esses dados ajudam a enxergar resultado, patrimônio, dívidas e capacidade de pagamento. Quando os documentos chegam atrasados ou incompletos, a informação contábil perde qualidade.',
        ],
      },
      {
        title: 'O que o contador precisa receber da empresa',
        paragraphs: [
          'Notas, extratos, contratos, comprovantes, admissões, desligamentos e mudanças na operação precisam chegar no prazo combinado. O contador não acompanha fisicamente tudo o que acontece no negócio.',
          'A empresa também deve informar alterações de atividade, endereço, sócios e forma de trabalho antes de executá-las. Muitas decisões produzem efeitos fiscais, trabalhistas ou societários.',
        ],
      },
      {
        title: 'Como escolher e acompanhar o serviço',
        paragraphs: [
          'Compare experiência com o setor, canais de atendimento, prazos, tecnologia usada e clareza do contrato. Preço é importante, mas não mostra sozinho o que está incluído.',
          'Peça um calendário simples de entregas e mantenha reuniões periódicas. O contador consegue orientar melhor quando conhece os planos do negócio antes que a decisão vire urgência.',
        ],
      },
    ],
    practicalChecklistTitle: 'O que alinhar com o contador',
    practicalChecklist: [
      'Serviços incluídos e atividades cobradas à parte.',
      'Prazos para envio de notas, extratos e documentos.',
      'Responsável interno por reunir as informações.',
      'Calendário de tributos, declarações e folha.',
      'Canal para consultar mudanças antes de executá-las.',
    ],
    faq: [
      {
        q: 'MEI precisa de contador?',
        a: 'O MEI tem rotinas simplificadas e pode cumprir várias obrigações pelos portais oficiais. Ainda assim, pode contratar apoio contábil quando precisar de organização, orientação ou análise.',
      },
      {
        q: 'O contador cuida da folha de pagamento?',
        a: 'Muitos escritórios oferecem esse serviço, mas ele deve estar no contrato. A empresa continua responsável por fornecer dados corretos e dentro do prazo.',
      },
      {
        q: 'O contador é responsável por todas as licenças da empresa?',
        a: 'Não necessariamente. Licenciamento pode envolver prefeitura, vigilância sanitária, bombeiros, meio ambiente e profissionais específicos. O escopo precisa ser confirmado.',
      },
    ],
    officialSources: [
      { label: 'DREI: orientações sobre tipos e registro de empresas', href: officialUrls.tiposEmpresa },
      { label: 'Redesim: serviços e etapas da empresa', href: officialUrls.redesim },
    ],
    related: ['simples-nacional', 'pro-labore', 'folha-de-pagamento'],
  },

  'mei-pode-ter-funcionario': {
    section: 'Funcionários e gestão',
    h1: 'MEI pode ter funcionário? Veja o limite e como funciona a contratação',
    seoTitle: 'MEI pode ter funcionário? Regras da contratação | SERMST',
    hook:
      'Entenda quantos empregados o MEI pode contratar, qual remuneração se aplica e quais etapas entram no eSocial antes do início do trabalho.',
    summary:
      'O MEI pode contratar um empregado, com remuneração de até um salário mínimo ou o piso da categoria. A admissão e as demais rotinas trabalhistas são registradas no eSocial.',
    dor:
      'O negócio cresce, a ajuda informal vira rotina e o titular só então procura saber como registrar alguém. A contratação começa com pressa, justamente quando precisa de mais organização.',
    solucao:
      'Antes de combinar a data de início, confira salário da categoria, custo total, documentos, contrato, exame admissional e registro no eSocial. Planejamento evita corrigir a admissão depois.',
    beneficios: [
      'Entender o limite de contratação do MEI',
      'Conhecer as etapas básicas antes do primeiro dia',
      'Calcular o custo além do salário combinado',
    ],
    note:
      'O limite e as regras do MEI podem ser atualizados. Consulte o Portal do Empreendedor e o manual vigente do eSocial antes de concluir a admissão.',
    articleSections: [
      {
        title: 'Quantos funcionários o MEI pode ter',
        paragraphs: [
          'O MEI pode ter um empregado. A remuneração deve respeitar o salário mínimo ou o piso definido para a categoria quando ele existir. Se o negócio precisar de uma equipe maior, é necessário avaliar o desenquadramento e outra estrutura empresarial.',
          'O limite não transforma a contratação em uma relação simplificada demais. O empregado mantém direitos trabalhistas e previdenciários, e o empregador precisa cumprir os registros e pagamentos correspondentes.',
        ],
      },
      {
        title: 'Como funciona a admissão',
        paragraphs: [
          'O eSocial Web MEI reúne as informações de admissão, folha, afastamentos e desligamento. O empregador deve cadastrar dados coerentes com CPF, data de nascimento, contrato e início das atividades.',
          'Antes do trabalho começar, organize recrutamento, documentos, exame médico admissional e contrato. A função e a jornada precisam estar claras para evitar divergências na folha e na rotina.',
        ],
      },
      {
        title: 'Quanto custa contratar',
        paragraphs: [
          'O custo não se resume ao salário. Entram FGTS, contribuição previdenciária do empregador, férias, décimo terceiro, vale-transporte quando aplicável e outros direitos relacionados ao contrato.',
          'Faça uma projeção mensal e anual. Se a contratação só cabe no orçamento ignorando férias e encargos, o caixa ainda não está preparado para sustentar o vínculo.',
        ],
      },
    ],
    practicalChecklistTitle: 'Antes de contratar pelo MEI',
    practicalChecklist: [
      'Confirme o piso salarial e a jornada da categoria.',
      'Projete salário, encargos e provisões anuais.',
      'Reúna os documentos do empregado.',
      'Defina função, contrato e data de início.',
      'Faça o exame admissional e registre a admissão no eSocial.',
    ],
    faq: [
      {
        q: 'MEI pode contratar dois funcionários?',
        a: 'Não dentro do limite atual do MEI. Para manter mais de um empregado, o titular precisa avaliar o desenquadramento e outra forma empresarial.',
      },
      {
        q: 'Quanto o funcionário do MEI pode ganhar?',
        a: 'A regra considera até um salário mínimo ou o piso salarial da categoria, quando houver.',
      },
      {
        q: 'O MEI registra o empregado no eSocial?',
        a: 'Sim. O eSocial Web MEI é o ambiente usado para admissão, folha e outros eventos do vínculo.',
      },
    ],
    officialSources: [
      { label: 'Portal do Empreendedor: contratação de empregado', href: officialUrls.meiEmpregado },
      { label: 'eSocial: Manual Web MEI', href: officialUrls.esocialMei },
    ],
    related: ['folha-de-pagamento', 'direitos-trabalhistas', 'nota-fiscal-mei'],
  },

  'folha-de-pagamento': {
    section: 'Funcionários e gestão',
    h1: 'Folha de pagamento: o que é, o que entra no cálculo e como organizar',
    seoTitle: 'Folha de pagamento: o que é e como funciona | SERMST',
    hook:
      'Entenda quais verbas aparecem na folha de pagamento, como ela se conecta ao eSocial e por que salário, descontos e encargos precisam partir de dados corretos.',
    summary:
      'Folha de pagamento é o registro periódico das remunerações, descontos, bases e encargos dos trabalhadores. Ela depende de dados sobre jornada, adicionais, afastamentos e pagamentos.',
    dor:
      'Quando as informações chegam perto do fechamento, faltas, horas extras, comissões e afastamentos são tratados de memória. Um pequeno erro pode seguir para recibos, guias e eventos do eSocial.',
    solucao:
      'Crie um corte mensal para receber dados, valide mudanças cadastrais e confira o resumo antes de fechar. O processamento pode ficar com o contador, mas a origem das informações continua na empresa.',
    beneficios: [
      'Entender as partes que formam a folha',
      'Organizar informações antes do fechamento mensal',
      'Reduzir divergências entre pagamento, recibo e eSocial',
    ],
    note:
      'Cálculos variam conforme contrato, convenção coletiva, jornada, rubricas e legislação. Casos específicos devem ser conferidos por departamento pessoal, contabilidade ou assessoria jurídica.',
    articleSections: [
      {
        title: 'O que entra na folha de pagamento',
        paragraphs: [
          'A folha reúne remunerações e descontos de cada competência. Salário, horas extras, adicionais, comissões, faltas, benefícios e afastamentos podem alterar o valor. Também entram bases usadas para tributos e encargos.',
          'Nem todo pagamento tem a mesma natureza. A classificação correta da rubrica influencia incidências, recibos e informações transmitidas ao governo.',
        ],
      },
      {
        title: 'Folha e eSocial',
        paragraphs: [
          'No eSocial, eventos de remuneração e pagamento se relacionam com o cadastro do trabalhador e com o fechamento da competência. Dados recusados ou inconsistentes precisam ser corrigidos antes que o processo seja considerado concluído.',
          'Admissão, alteração salarial, férias, afastamento e desligamento afetam a folha. Se esses eventos forem tratados por equipes diferentes, um calendário compartilhado evita que a informação se perca.',
        ],
      },
      {
        title: 'Como organizar o fechamento mensal',
        paragraphs: [
          'Defina uma data para receber variáveis e outra para aprovação. Use relatórios de ponto, comissões e benefícios como fonte, em vez de mensagens dispersas. Registre quem revisou e quem autorizou.',
          'Depois do processamento, confira total bruto, líquido, descontos, encargos e diferenças em relação ao mês anterior. Variações sem explicação merecem revisão antes do pagamento.',
        ],
      },
    ],
    practicalChecklistTitle: 'Checklist para fechar a folha',
    practicalChecklist: [
      'Admissões, alterações e desligamentos registrados.',
      'Ponto, faltas, horas extras e adicionais conferidos.',
      'Férias, afastamentos e benefícios atualizados.',
      'Comissões e outras variáveis aprovadas.',
      'Resumo da folha comparado com a competência anterior.',
    ],
    faq: [
      {
        q: 'O que é folha de pagamento?',
        a: 'É o registro periódico das remunerações, descontos, bases e encargos relacionados aos trabalhadores da empresa.',
      },
      {
        q: 'Folha de pagamento é a mesma coisa que holerite?',
        a: 'Não. A folha reúne o processamento de todos os trabalhadores. O holerite ou recibo apresenta o demonstrativo individual.',
      },
      {
        q: 'Quem faz a folha de pagamento?',
        a: 'Pode ser o departamento pessoal interno ou um escritório contratado. Em qualquer caso, a empresa precisa fornecer dados completos e aprovar o fechamento.',
      },
    ],
    officialSources: [
      { label: 'eSocial: Manual Web Geral para empresas', href: officialUrls.esocialEmpresa },
      { label: 'Ministério do Trabalho: perguntas frequentes', href: officialUrls.direitosTrabalhistas },
    ],
    related: ['direitos-trabalhistas', 'mei-pode-ter-funcionario', 'pro-labore'],
  },

  'direitos-trabalhistas': {
    section: 'Funcionários e gestão',
    h1: 'Direitos trabalhistas: guia básico para empregados e empregadores',
    seoTitle: 'Direitos trabalhistas: guia básico e atualizado | SERMST',
    hook:
      'Conheça os principais direitos de uma relação de emprego, como registro, salário, jornada, férias, décimo terceiro e FGTS, e entenda onde buscar a regra específica.',
    summary:
      'Direitos trabalhistas regulam a relação entre empregado e empregador. O conjunto aplicável depende da lei, do contrato, da categoria, de normas coletivas e das condições do trabalho.',
    dor:
      'Listas rápidas na internet parecem valer para qualquer vínculo. Na prática, categoria, jornada, tipo de contrato e acordo coletivo podem alterar prazos, adicionais e procedimentos.',
    solucao:
      'Use uma visão geral para reconhecer os temas e consulte a fonte específica antes de decidir. Mantenha registro do contrato, da jornada, dos pagamentos e das mudanças ocorridas no vínculo.',
    beneficios: [
      'Reconhecer os principais direitos de uma relação formal',
      'Entender por que convenção coletiva e contrato importam',
      'Saber quais registros ajudam a prevenir divergências',
    ],
    note:
      'Este guia apresenta noções gerais e não substitui análise jurídica. Regras podem mudar conforme categoria, norma coletiva, tipo de contrato e circunstâncias do caso.',
    articleSections: [
      {
        title: 'Quais são os direitos mais conhecidos',
        paragraphs: [
          'No emprego formal, aparecem registro do vínculo, salário, limites de jornada, descanso semanal, férias acrescidas de um terço, décimo terceiro e FGTS. Também podem existir horas extras, adicionais, vale-transporte e benefícios definidos em norma coletiva.',
          'Licenças, estabilidade e proteção contra discriminação completam esse conjunto em situações específicas. O direito aplicável depende dos fatos, não apenas do nome dado ao contrato.',
        ],
      },
      {
        title: 'O papel do contrato e da convenção coletiva',
        paragraphs: [
          'O contrato registra função, salário, jornada e condições combinadas dentro dos limites legais. A convenção ou o acordo coletivo pode estabelecer piso, benefícios, adicionais e procedimentos próprios da categoria.',
          'Por isso, duas empresas com cargos parecidos podem seguir regras diferentes. Antes de calcular folha, férias ou rescisão, confirme o enquadramento sindical e a norma coletiva vigente.',
        ],
      },
      {
        title: 'Como a empresa comprova o cumprimento',
        paragraphs: [
          'Registros no eSocial, recibos, ponto, avisos, comprovantes de pagamento e documentos de férias ajudam a demonstrar o que aconteceu. O arquivo precisa ser coerente com a rotina real.',
          'Quando há dúvida relevante, procure o Ministério do Trabalho, o sindicato, a contabilidade ou um profissional jurídico. Resolver a interpretação antes do pagamento costuma ser mais simples do que corrigir depois.',
        ],
      },
    ],
    practicalChecklistTitle: 'Registros básicos da relação de emprego',
    practicalChecklist: [
      'Contrato e admissão informados corretamente.',
      'Jornada, intervalos e horas extras registrados.',
      'Salário, adicionais e benefícios pagos conforme a regra aplicável.',
      'Férias, décimo terceiro e FGTS acompanhados.',
      'Convenção coletiva vigente consultada.',
    ],
    faq: [
      {
        q: 'Quais são os principais direitos trabalhistas?',
        a: 'Entre os mais conhecidos estão registro, salário, jornada limitada, descanso, férias com adicional, décimo terceiro e FGTS. Outros direitos dependem da situação e da categoria.',
      },
      {
        q: 'Empresa pequena precisa cumprir os mesmos direitos?',
        a: 'O porte não elimina os direitos da relação de emprego. Podem existir tratamentos específicos, mas a empresa deve observar a legislação e a norma coletiva aplicável.',
      },
      {
        q: 'Convenção coletiva pode mudar os direitos?',
        a: 'Ela pode estabelecer pisos, benefícios, adicionais e procedimentos da categoria dentro dos limites legais. Por isso precisa ser consultada no caso concreto.',
      },
    ],
    officialSources: [
      { label: 'Ministério do Trabalho: perguntas frequentes', href: officialUrls.direitosTrabalhistas },
      { label: 'Ministério do Trabalho: informações sobre FGTS', href: officialUrls.fgts },
    ],
    related: ['folha-de-pagamento', 'mei-pode-ter-funcionario', 'o-que-faz-um-contador'],
  },

  'vigilancia-sanitaria': {
    section: 'Licenças e fiscalização',
    h1: 'Vigilância sanitária: o que fiscaliza e quais empresas precisam de licença',
    seoTitle: 'Vigilância sanitária: o que fiscaliza | SERMST',
    hook:
      'Entenda o papel da Anvisa e das vigilâncias locais, quais atividades podem depender de licença sanitária e como funciona a inspeção do estabelecimento.',
    summary:
      'A vigilância sanitária atua na prevenção de riscos ligados a produtos, serviços e ambientes de interesse da saúde. Licenciamento e fiscalização variam conforme atividade, risco e regras locais.',
    dor:
      'Muitos negócios só procuram a vigilância depois de receber uma exigência. A dúvida começa porque não está claro se a licença vem da Anvisa, do estado ou do município.',
    solucao:
      'Identifique a autoridade sanitária responsável pelo estabelecimento e confirme o enquadramento da atividade. Prepare estrutura, procedimentos e documentos de acordo com a regra específica do setor.',
    beneficios: [
      'Entender a divisão entre Anvisa e vigilâncias locais',
      'Reconhecer atividades que podem depender de licença sanitária',
      'Preparar o estabelecimento para análise ou inspeção',
    ],
    note:
      'Licenciamento sanitário é descentralizado. Município, estado e Anvisa podem ter competências diferentes conforme produto, serviço e grau de risco.',
    articleSections: [
      {
        title: 'O que a vigilância sanitária faz',
        paragraphs: [
          'A vigilância sanitária protege a saúde coletiva por meio de normas, licenciamento, monitoramento e fiscalização. Sua atuação alcança produtos, serviços e ambientes capazes de apresentar risco sanitário.',
          'Restaurantes, clínicas, farmácias, laboratórios, salões, fabricantes e distribuidores são exemplos conhecidos, mas o enquadramento depende da atividade específica e da legislação local.',
        ],
      },
      {
        title: 'Anvisa, estado e município',
        paragraphs: [
          'A Anvisa coordena o Sistema Nacional de Vigilância Sanitária e exerce competências federais. Vigilâncias estaduais e municipais executam grande parte do licenciamento e das inspeções dos estabelecimentos.',
          'Não existe uma resposta única para todo o país. O primeiro passo é consultar a vigilância do local onde o estabelecimento funciona e verificar se há procedimento integrado à Redesim.',
        ],
      },
      {
        title: 'O que pode ser verificado numa inspeção',
        paragraphs: [
          'A inspeção considera as normas próprias da atividade. Estrutura física, higiene, armazenamento, equipamentos, controle de pragas, documentos, treinamento e rastreabilidade podem entrar no roteiro.',
          'A licença não encerra o cuidado. Mudanças de endereço, atividade, estrutura ou responsável podem exigir atualização. Procedimentos precisam continuar sendo praticados depois da visita.',
        ],
      },
    ],
    practicalChecklistTitle: 'Como começar a organizar o licenciamento sanitário',
    practicalChecklist: [
      'Confirme CNAEs e atividades realizadas no estabelecimento.',
      'Identifique a vigilância sanitária competente.',
      'Consulte classificação de risco e documentos exigidos.',
      'Revise estrutura, limpeza, armazenamento e procedimentos.',
      'Acompanhe validade da licença e alterações do negócio.',
    ],
    faq: [
      {
        q: 'Quais empresas precisam de licença sanitária?',
        a: 'A exigência depende da atividade e do risco sanitário. Negócios de alimentos, saúde, beleza e produtos regulados estão entre os casos comuns, mas a confirmação deve ser local.',
      },
      {
        q: 'Licença sanitária é emitida pela Anvisa?',
        a: 'Muitas licenças de estabelecimento são emitidas pela vigilância municipal ou estadual. A Anvisa possui competências próprias para atividades e produtos regulados.',
      },
      {
        q: 'A vigilância sanitária pode fiscalizar sem aviso?',
        a: 'A forma de fiscalização depende da legislação e do procedimento local. A empresa deve manter as condições exigidas continuamente, não apenas na data de uma visita agendada.',
      },
    ],
    officialSources: [
      { label: 'Anvisa: contatos das vigilâncias sanitárias', href: officialUrls.vigilancia },
      { label: 'Redesim: orientações sobre licenciamento', href: officialUrls.licenciamento },
    ],
    related: ['alvara-de-funcionamento', 'inscricao-estadual', 'cnpj-ativo-o-que-significa'],
  },
};

export const empresarioSections: EmpresarioSection[] = [
  'Abertura e cadastro',
  'MEI, impostos e dinheiro',
  'Funcionários e gestão',
  'Licenças e fiscalização',
];

export const empresarioSEO: Record<string, EmpresarioGuideDocument> = Object.fromEntries(
  Object.entries(empresarioTopics).map(([slug, topic]) => [
    slug,
    {
      h1: topic.h1,
      seoTitle: topic.seoTitle,
      hook: topic.hook,
      isClinico: false,
      section: topic.section,
      summary: topic.summary,
      supportingLinks: topic.related.map((relatedSlug) => ({
        href: `/empresario/${relatedSlug}`,
        label: empresarioTopics[relatedSlug].h1,
        description: empresarioTopics[relatedSlug].summary,
      })),
      content: {
        dor: topic.dor,
        solucao: topic.solucao,
        beneficios: topic.beneficios,
      },
      geoOpt: {
        expertQuote: {
          text: topic.note,
          author: 'SERMST',
          role: 'Conteúdo informativo',
        },
        faq: topic.faq,
      },
      articleSections: topic.articleSections,
      practicalChecklistTitle: topic.practicalChecklistTitle,
      practicalChecklist: topic.practicalChecklist,
      officialSources: topic.officialSources,
      lastReviewedAt: '2026-07-13',
    },
  ]),
) as Record<string, EmpresarioGuideDocument>;

export const empresarioKeywordTargets = {
  'simples-nacional': { keyword: 'simples nacional', monthlyVolume: 1_220_000, seoDifficulty: 68 },
  'nota-fiscal-mei': { keyword: 'nota fiscal mei', monthlyVolume: 368_000, seoDifficulty: 37 },
  'inscricao-estadual': { keyword: 'inscrição estadual', monthlyVolume: 201_000, seoDifficulty: 47 },
  'contrato-social': { keyword: 'contrato social', monthlyVolume: 49_500, seoDifficulty: 32 },
  'razao-social': { keyword: 'razão social', monthlyVolume: 49_500, seoDifficulty: 33 },
  'vigilancia-sanitaria': { keyword: 'vigilância sanitária', monthlyVolume: 33_100, seoDifficulty: 52 },
  'folha-de-pagamento': { keyword: 'folha de pagamento', monthlyVolume: 27_100, seoDifficulty: 37 },
  'pro-labore': { keyword: 'pró-labore', monthlyVolume: 27_100, seoDifficulty: 42 },
  'capital-social': { keyword: 'capital social', monthlyVolume: 22_200, seoDifficulty: 27 },
  'alvara-de-funcionamento': {
    keyword: 'alvará de funcionamento',
    monthlyVolume: 18_100,
    seoDifficulty: 35,
  },
  'direitos-trabalhistas': { keyword: 'direitos trabalhistas', monthlyVolume: 12_100, seoDifficulty: 41 },
  'tipos-de-empresa': { keyword: 'tipos de empresa', monthlyVolume: 6_600, seoDifficulty: 41 },
  'mei-pode-ter-funcionario': {
    keyword: 'mei pode ter funcionário',
    monthlyVolume: 2_900,
    seoDifficulty: 32,
  },
  'cnpj-ativo-o-que-significa': { keyword: 'cnpj ativo', monthlyVolume: 1_900, seoDifficulty: 28 },
  'o-que-faz-um-contador': { keyword: 'o que faz um contador', monthlyVolume: 1_900, seoDifficulty: 37 },
} as const;

export const empresarioKeywordResearch = {
  country: 'Brasil',
  language: 'pt',
  validatedAt: '2026-07-13',
  source: 'Ubersuggest',
  intent: 'Informacional',
} as const;
