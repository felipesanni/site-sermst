/**
 * Grau de Risco por CNAE — Quadro I da NR-04 (Portaria MTb n.º 3.214/1978, atualizado)
 *
 * Fonte: Classificação Nacional de Atividades Econômicas (CNAE) × NR-04 Quadro I
 * Grau de risco determina exigências de SESMT, periodicidade de PCMSO e intensidade do PGR.
 *
 * NRs sempre obrigatórias (independente do grau):
 *   NR-01 (PGR), NR-07 (PCMSO), NR-09 (agentes ambientais), NR-28 (fiscalização)
 *
 * Regra de SESMT pelo grau de risco (NR-04, Quadro II):
 *   Grau 1: SESMT a partir de 501 empregados
 *   Grau 2: SESMT a partir de 101 empregados
 *   Grau 3: SESMT a partir de 51 empregados
 *   Grau 4: SESMT a partir de 51 empregados (com composição mais exigente)
 */

export interface CnaeEntry {
  codigo: string;       // código CNAE (7 dígitos, sem hífen)
  descricao: string;    // descrição da subclasse
  setor: string;        // agrupamento temático
  grauRisco: 1 | 2 | 3 | 4;
  nrsDestaque: string[]; // NRs adicionais relevantes ao setor (além das universais)
  observacao?: string;   // contexto de risco específico
}

export const cnaeData: CnaeEntry[] = [
  // ── AGRICULTURA, PECUÁRIA E PESCA (Seção A) ─────────────────────────────
  { codigo: '0111301', descricao: 'Cultivo de arroz', setor: 'Agricultura', grauRisco: 3, nrsDestaque: ['NR-31', 'NR-15'] },
  { codigo: '0112101', descricao: 'Cultivo de algodão herbáceo', setor: 'Agricultura', grauRisco: 3, nrsDestaque: ['NR-31', 'NR-15'] },
  { codigo: '0131800', descricao: 'Cultivo de laranja', setor: 'Agricultura', grauRisco: 3, nrsDestaque: ['NR-31'] },
  { codigo: '0151201', descricao: 'Criação de bovinos para corte', setor: 'Pecuária', grauRisco: 3, nrsDestaque: ['NR-31'] },
  { codigo: '0311601', descricao: 'Pesca de peixes em água salgada', setor: 'Pesca', grauRisco: 4, nrsDestaque: ['NR-30'] },

  // ── INDÚSTRIA EXTRATIVA (Seção B) ───────────────────────────────────────
  { codigo: '0500301', descricao: 'Extração de carvão mineral', setor: 'Mineração', grauRisco: 4, nrsDestaque: ['NR-22', 'NR-15', 'NR-16'], observacao: 'Alta exposição a poeiras, gases e risco de desabamento' },
  { codigo: '0600001', descricao: 'Extração de petróleo e gás natural', setor: 'Petróleo e Gás', grauRisco: 4, nrsDestaque: ['NR-16', 'NR-10', 'NR-13'] },
  { codigo: '0710301', descricao: 'Extração de minério de ferro', setor: 'Mineração', grauRisco: 4, nrsDestaque: ['NR-22', 'NR-15'] },
  { codigo: '0810001', descricao: 'Extração de ardósia e trabalhos associados', setor: 'Mineração', grauRisco: 4, nrsDestaque: ['NR-22', 'NR-15'] },
  { codigo: '0891600', descricao: 'Extração de minerais para fabricação de adubos', setor: 'Mineração', grauRisco: 3, nrsDestaque: ['NR-22', 'NR-15'] },

  // ── INDÚSTRIAS DE TRANSFORMAÇÃO (Seção C) ───────────────────────────────
  { codigo: '1011201', descricao: 'Frigorífico — abate de bovinos', setor: 'Alimentos', grauRisco: 3, nrsDestaque: ['NR-36', 'NR-15', 'NR-17'], observacao: 'Exposição a baixas temperaturas, facas e ritmo intenso' },
  { codigo: '1012101', descricao: 'Abate de suínos, aves e outros pequenos animais', setor: 'Alimentos', grauRisco: 3, nrsDestaque: ['NR-36', 'NR-15', 'NR-17'] },
  { codigo: '1031700', descricao: 'Fabricação de conservas de frutas', setor: 'Alimentos', grauRisco: 2, nrsDestaque: ['NR-17'] },
  { codigo: '1041400', descricao: 'Fabricação de óleos vegetais em bruto', setor: 'Alimentos', grauRisco: 3, nrsDestaque: ['NR-15', 'NR-13'] },
  { codigo: '1051100', descricao: 'Preparação do leite', setor: 'Laticínios', grauRisco: 2, nrsDestaque: ['NR-17'] },
  { codigo: '1061901', descricao: 'Beneficiamento de arroz', setor: 'Alimentos', grauRisco: 3, nrsDestaque: ['NR-15'] },
  { codigo: '1081301', descricao: 'Beneficiamento de açúcar de cana', setor: 'Alimentos', grauRisco: 3, nrsDestaque: ['NR-15', 'NR-13'] },
  { codigo: '1113501', descricao: 'Fabricação de cerveja', setor: 'Bebidas', grauRisco: 3, nrsDestaque: ['NR-13', 'NR-15'] },
  { codigo: '1122401', descricao: 'Fabricação de refrigerantes', setor: 'Bebidas', grauRisco: 2, nrsDestaque: ['NR-17'] },
  { codigo: '1210700', descricao: 'Processamento industrial do fumo', setor: 'Fumo', grauRisco: 3, nrsDestaque: ['NR-15'] },
  { codigo: '1311100', descricao: 'Preparação e fiação de fibras de algodão', setor: 'Têxtil', grauRisco: 3, nrsDestaque: ['NR-15'] },
  { codigo: '1321900', descricao: 'Tecelagem de fios de algodão', setor: 'Têxtil', grauRisco: 2, nrsDestaque: ['NR-15'] },
  { codigo: '1411801', descricao: 'Confecção de roupas íntimas', setor: 'Vestuário', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '1510600', descricao: 'Curtimento e outras preparações de couro', setor: 'Couro', grauRisco: 3, nrsDestaque: ['NR-15', 'NR-09'] },
  { codigo: '1531901', descricao: 'Fabricação de calçados de couro', setor: 'Calçados', grauRisco: 2, nrsDestaque: ['NR-15', 'NR-17'] },
  { codigo: '1610201', descricao: 'Serrarias com desdobramento de madeira', setor: 'Madeira', grauRisco: 3, nrsDestaque: ['NR-12', 'NR-15'] },
  { codigo: '1621800', descricao: 'Fabricação de madeira laminada e chapas', setor: 'Madeira', grauRisco: 3, nrsDestaque: ['NR-12', 'NR-15'] },
  { codigo: '1710900', descricao: 'Fabricação de celulose e outras pastas', setor: 'Papel e Celulose', grauRisco: 3, nrsDestaque: ['NR-13', 'NR-15'] },
  { codigo: '1731100', descricao: 'Fabricação de embalagens de papel', setor: 'Papel', grauRisco: 2, nrsDestaque: ['NR-12'] },
  { codigo: '1811301', descricao: 'Impressão de jornais', setor: 'Gráfica', grauRisco: 2, nrsDestaque: ['NR-12', 'NR-15'] },
  { codigo: '1921700', descricao: 'Fabricação de produtos do refino de petróleo', setor: 'Petroquímica', grauRisco: 4, nrsDestaque: ['NR-16', 'NR-13', 'NR-15'], observacao: 'Risco de explosão, incêndio e exposição a vapores tóxicos' },
  { codigo: '2013401', descricao: 'Fabricação de adubos e fertilizantes', setor: 'Química', grauRisco: 3, nrsDestaque: ['NR-15', 'NR-09'] },
  { codigo: '2021500', descricao: 'Fabricação de produtos petroquímicos básicos', setor: 'Petroquímica', grauRisco: 4, nrsDestaque: ['NR-16', 'NR-15', 'NR-13'] },
  { codigo: '2029100', descricao: 'Fabricação de outros produtos químicos orgânicos', setor: 'Química', grauRisco: 3, nrsDestaque: ['NR-15', 'NR-09'] },
  { codigo: '2031200', descricao: 'Fabricação de resinas termoplásticas', setor: 'Plástico', grauRisco: 3, nrsDestaque: ['NR-15'] },
  { codigo: '2061400', descricao: 'Fabricação de sabões e detergentes', setor: 'Química', grauRisco: 3, nrsDestaque: ['NR-15', 'NR-09'] },
  { codigo: '2110600', descricao: 'Fabricação de produtos farmoquímicos', setor: 'Farmacêutico', grauRisco: 3, nrsDestaque: ['NR-15', 'NR-09'] },
  { codigo: '2121101', descricao: 'Fabricação de medicamentos para uso humano', setor: 'Farmacêutico', grauRisco: 2, nrsDestaque: ['NR-15', 'NR-09'] },
  { codigo: '2211100', descricao: 'Fabricação de pneumáticos e câmaras-de-ar', setor: 'Borracha', grauRisco: 3, nrsDestaque: ['NR-15', 'NR-12'] },
  { codigo: '2229301', descricao: 'Fabricação de artefatos de material plástico', setor: 'Plástico', grauRisco: 2, nrsDestaque: ['NR-12', 'NR-15'] },
  { codigo: '2311700', descricao: 'Fabricação de vidro plano e de segurança', setor: 'Vidro', grauRisco: 3, nrsDestaque: ['NR-15', 'NR-12'] },
  { codigo: '2330301', descricao: 'Fabricação de estruturas pré-moldadas de concreto', setor: 'Construção', grauRisco: 3, nrsDestaque: ['NR-18', 'NR-15'] },
  { codigo: '2341900', descricao: 'Fabricação de produtos cerâmicos refratários', setor: 'Cerâmica', grauRisco: 3, nrsDestaque: ['NR-15'] },
  { codigo: '2351100', descricao: 'Fabricação de cimento', setor: 'Cimento', grauRisco: 3, nrsDestaque: ['NR-15', 'NR-13'] },
  { codigo: '2411300', descricao: 'Produção de ferro-gusa', setor: 'Siderurgia', grauRisco: 4, nrsDestaque: ['NR-15', 'NR-12', 'NR-13'], observacao: 'Exposição a calor extremo e material fundido' },
  { codigo: '2421100', descricao: 'Produção de semi-acabados de aço', setor: 'Siderurgia', grauRisco: 4, nrsDestaque: ['NR-15', 'NR-12'] },
  { codigo: '2431800', descricao: 'Produção de tubos de aço sem costura', setor: 'Metalurgia', grauRisco: 3, nrsDestaque: ['NR-15', 'NR-12'] },
  { codigo: '2512800', descricao: 'Fabricação de esquadrias de metal', setor: 'Metal-Mecânico', grauRisco: 3, nrsDestaque: ['NR-12', 'NR-15'] },
  { codigo: '2521700', descricao: 'Fabricação de tanques, reservatórios e caldeiras', setor: 'Metal-Mecânico', grauRisco: 4, nrsDestaque: ['NR-13', 'NR-15', 'NR-16'] },
  { codigo: '2541100', descricao: 'Fabricação de artigos de cutelaria', setor: 'Metal-Mecânico', grauRisco: 3, nrsDestaque: ['NR-12'] },
  { codigo: '2611800', descricao: 'Fabricação de componentes eletrônicos', setor: 'Eletrônico', grauRisco: 2, nrsDestaque: ['NR-10', 'NR-15'] },
  { codigo: '2710401', descricao: 'Fabricação de geradores de corrente contínua', setor: 'Elétrico', grauRisco: 3, nrsDestaque: ['NR-10'] },
  { codigo: '2751100', descricao: 'Fabricação de fogões, refrigeradores e máquinas', setor: 'Eletrodomésticos', grauRisco: 2, nrsDestaque: ['NR-12'] },
  { codigo: '2910701', descricao: 'Fabricação de automóveis, camionetas e utilitários', setor: 'Automotivo', grauRisco: 3, nrsDestaque: ['NR-12', 'NR-15', 'NR-17'] },
  { codigo: '2920401', descricao: 'Fabricação de caminhões e ônibus', setor: 'Automotivo', grauRisco: 3, nrsDestaque: ['NR-12', 'NR-15'] },
  { codigo: '2945000', descricao: 'Fabricação de peças e acessórios para veículos', setor: 'Automotivo', grauRisco: 3, nrsDestaque: ['NR-12', 'NR-15'] },

  // ── ELETRICIDADE E GÁS (Seção D) ────────────────────────────────────────
  { codigo: '3510100', descricao: 'Geração de energia elétrica', setor: 'Energia', grauRisco: 4, nrsDestaque: ['NR-10', 'NR-16'], observacao: 'Risco elétrico elevado — NR-10 essencial' },
  { codigo: '3520401', descricao: 'Produção de gás; processamento de gás natural', setor: 'Gás', grauRisco: 4, nrsDestaque: ['NR-16', 'NR-13'] },
  { codigo: '3530100', descricao: 'Produção e distribuição de vapor, água quente', setor: 'Energia', grauRisco: 3, nrsDestaque: ['NR-13'] },

  // ── CONSTRUÇÃO (Seção F) ─────────────────────────────────────────────────
  { codigo: '4110700', descricao: 'Incorporação de empreendimentos imobiliários', setor: 'Incorporação', grauRisco: 3, nrsDestaque: ['NR-18', 'NR-35'] },
  { codigo: '4120400', descricao: 'Construção de edifícios', setor: 'Construção Civil', grauRisco: 3, nrsDestaque: ['NR-18', 'NR-35', 'NR-12'], observacao: 'PCMAT obrigatório para obras com 20+ trabalhadores' },
  { codigo: '4211101', descricao: 'Construção de rodovias e ferrovias', setor: 'Obras de Infraestrutura', grauRisco: 3, nrsDestaque: ['NR-18', 'NR-35'] },
  { codigo: '4221901', descricao: 'Construção de barragens e represas', setor: 'Obras de Infraestrutura', grauRisco: 4, nrsDestaque: ['NR-18', 'NR-35'] },
  { codigo: '4291000', descricao: 'Obras portuárias, marítimas e fluviais', setor: 'Obras de Infraestrutura', grauRisco: 4, nrsDestaque: ['NR-18', 'NR-30', 'NR-35'] },
  { codigo: '4311801', descricao: 'Demolição e preparação de terrenos', setor: 'Construção Civil', grauRisco: 3, nrsDestaque: ['NR-18', 'NR-35'] },
  { codigo: '4321500', descricao: 'Instalação e manutenção elétrica', setor: 'Instalações', grauRisco: 3, nrsDestaque: ['NR-10', 'NR-35'] },
  { codigo: '4322301', descricao: 'Instalações hidráulicas, sanitárias e de gás', setor: 'Instalações', grauRisco: 3, nrsDestaque: ['NR-18'] },
  { codigo: '4391600', descricao: 'Obras de fundações', setor: 'Construção Civil', grauRisco: 3, nrsDestaque: ['NR-18', 'NR-35'] },

  // ── COMÉRCIO (Seção G) ───────────────────────────────────────────────────
  { codigo: '4511101', descricao: 'Comércio a varejo de automóveis', setor: 'Comércio Veículos', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '4530701', descricao: 'Comércio a varejo de peças e acessórios para veículos', setor: 'Comércio Veículos', grauRisco: 2, nrsDestaque: ['NR-17'] },
  { codigo: '4541201', descricao: 'Comércio de motocicletas e motonetas', setor: 'Comércio Veículos', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '4623108', descricao: 'Comércio atacadista de defensivos agrícolas', setor: 'Atacado', grauRisco: 3, nrsDestaque: ['NR-15', 'NR-09'] },
  { codigo: '4631100', descricao: 'Comércio atacadista de leite e laticínios', setor: 'Atacado Alimentos', grauRisco: 2, nrsDestaque: ['NR-17'] },
  { codigo: '4681801', descricao: 'Comércio atacadista de álcool carburante', setor: 'Atacado Combustíveis', grauRisco: 4, nrsDestaque: ['NR-16', 'NR-20'] },
  { codigo: '4711301', descricao: 'Comércio varejista de mercadorias em geral — supermercados', setor: 'Varejo', grauRisco: 1, nrsDestaque: ['NR-17'], observacao: 'Alta incidência de LER/DORT em caixas — NR-17 importante' },
  { codigo: '4712100', descricao: 'Comércio varejista de mercadorias — lojas de conveniência', setor: 'Varejo', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '4721102', descricao: 'Padaria e confeitaria com predominância de revenda', setor: 'Varejo Alimentos', grauRisco: 2, nrsDestaque: ['NR-12', 'NR-17'] },
  { codigo: '4731800', descricao: 'Comércio varejista de combustíveis', setor: 'Postos de Combustível', grauRisco: 3, nrsDestaque: ['NR-16', 'NR-20'], observacao: 'Adicional de periculosidade — bombeiros de posto' },
  { codigo: '4741500', descricao: 'Comércio varejista de tintas e materiais de construção', setor: 'Varejo Materiais', grauRisco: 2, nrsDestaque: ['NR-15', 'NR-09'] },
  { codigo: '4762800', descricao: 'Comércio varejista de artigos esportivos', setor: 'Varejo', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '4789001', descricao: 'Comércio varejista de suvenires', setor: 'Varejo', grauRisco: 1, nrsDestaque: [] },

  // ── TRANSPORTE E ARMAZENAGEM (Seção H) ──────────────────────────────────
  { codigo: '4911600', descricao: 'Transporte ferroviário de passageiros intermunicipal', setor: 'Transporte Ferroviário', grauRisco: 3, nrsDestaque: ['NR-09'] },
  { codigo: '4921301', descricao: 'Transporte rodoviário coletivo de passageiros — urbano', setor: 'Transporte Rodoviário', grauRisco: 3, nrsDestaque: ['NR-09', 'NR-17'] },
  { codigo: '4921302', descricao: 'Transporte escolar', setor: 'Transporte Rodoviário', grauRisco: 2, nrsDestaque: [] },
  { codigo: '4930201', descricao: 'Transporte rodoviário de carga — municípios exceto perigosa', setor: 'Logística', grauRisco: 3, nrsDestaque: ['NR-09'], observacao: 'Exame toxicológico obrigatório por CLT para motoristas' },
  { codigo: '4930202', descricao: 'Transporte rodoviário de carga — carga perigosa', setor: 'Logística Perigosa', grauRisco: 4, nrsDestaque: ['NR-16', 'NR-09'], observacao: 'Carga perigosa exige habilitação e treinamento específicos' },
  { codigo: '5011401', descricao: 'Transporte marítimo de cabotagem de passageiros', setor: 'Transporte Aquaviário', grauRisco: 3, nrsDestaque: ['NR-30'] },
  { codigo: '5111100', descricao: 'Transporte aéreo de passageiros regular', setor: 'Aviação', grauRisco: 3, nrsDestaque: ['NR-09'] },
  { codigo: '5211701', descricao: 'Armazéns gerais — emissão de warrant', setor: 'Armazenagem', grauRisco: 2, nrsDestaque: ['NR-11', 'NR-17'] },
  { codigo: '5231101', descricao: 'Administração da infraestrutura portuária', setor: 'Porto', grauRisco: 3, nrsDestaque: ['NR-29', 'NR-35'] },
  { codigo: '5250801', descricao: 'Comissaria de despacho', setor: 'Logística', grauRisco: 1, nrsDestaque: [] },
  { codigo: '5310501', descricao: 'Atividades do Correio Nacional', setor: 'Correios', grauRisco: 2, nrsDestaque: ['NR-17'] },

  // ── ALOJAMENTO E ALIMENTAÇÃO (Seção I) ──────────────────────────────────
  { codigo: '5510801', descricao: 'Hotéis', setor: 'Hotelaria', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '5611201', descricao: 'Restaurantes e similares', setor: 'Alimentação', grauRisco: 2, nrsDestaque: ['NR-12', 'NR-17'] },
  { codigo: '5620101', descricao: 'Fornecimento de alimentos preparados para empresas', setor: 'Alimentação Industrial', grauRisco: 2, nrsDestaque: ['NR-12', 'NR-17'] },

  // ── INFORMAÇÃO E COMUNICAÇÃO (Seção J) ──────────────────────────────────
  { codigo: '5811500', descricao: 'Edição de livros', setor: 'Editorial', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '5912001', descricao: 'Atividades de produção cinematográfica', setor: 'Audiovisual', grauRisco: 1, nrsDestaque: [] },
  { codigo: '6110801', descricao: 'Serviços de telefonia fixa comutada', setor: 'Telecomunicações', grauRisco: 2, nrsDestaque: ['NR-10', 'NR-35'] },
  { codigo: '6120501', descricao: 'Telefonia móvel celular', setor: 'Telecomunicações', grauRisco: 2, nrsDestaque: ['NR-10', 'NR-35'] },
  { codigo: '6201501', descricao: 'Desenvolvimento de programas de computador sob encomenda', setor: 'Tecnologia', grauRisco: 1, nrsDestaque: ['NR-17'], observacao: 'Risco ergonômico relevante para trabalho em escritório' },
  { codigo: '6202300', descricao: 'Desenvolvimento e licenciamento de programas de computador', setor: 'Tecnologia', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '6209100', descricao: 'Suporte técnico, manutenção e outros serviços em TI', setor: 'Tecnologia', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '6311900', descricao: 'Tratamento de dados, provedores de internet', setor: 'Tecnologia', grauRisco: 1, nrsDestaque: ['NR-17'] },

  // ── ATIVIDADES FINANCEIRAS (Seção K) ────────────────────────────────────
  { codigo: '6411700', descricao: 'Banco Central', setor: 'Sistema Financeiro', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '6421200', descricao: 'Bancos comerciais', setor: 'Bancário', grauRisco: 1, nrsDestaque: ['NR-17'], observacao: 'Caixas bancários — NR-17 ergonômica é frequente em ações' },
  { codigo: '6422100', descricao: 'Bancos múltiplos com carteira comercial', setor: 'Bancário', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '6431000', descricao: 'Bancos de desenvolvimento', setor: 'Sistema Financeiro', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '6511101', descricao: 'Seguros de vida', setor: 'Seguros', grauRisco: 1, nrsDestaque: [] },
  { codigo: '6611801', descricao: 'Bolsa de valores', setor: 'Mercado Financeiro', grauRisco: 1, nrsDestaque: [] },
  { codigo: '6720401', descricao: 'Administração de fundos de investimento', setor: 'Mercado Financeiro', grauRisco: 1, nrsDestaque: [] },

  // ── ATIVIDADES IMOBILIÁRIAS (Seção L) ───────────────────────────────────
  { codigo: '6810201', descricao: 'Compra e venda de imóveis próprios', setor: 'Imobiliário', grauRisco: 1, nrsDestaque: [] },
  { codigo: '6821801', descricao: 'Corretagem na compra e venda e avaliação de imóveis', setor: 'Imobiliário', grauRisco: 1, nrsDestaque: [] },

  // ── ATIVIDADES PROFISSIONAIS (Seção M) ──────────────────────────────────
  { codigo: '6911701', descricao: 'Serviços advocatícios', setor: 'Jurídico', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '6920601', descricao: 'Atividades de contabilidade', setor: 'Contabilidade', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '7020400', descricao: 'Atividades de consultoria em gestão empresarial', setor: 'Consultoria', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '7111100', descricao: 'Serviços de arquitetura', setor: 'Arquitetura', grauRisco: 1, nrsDestaque: [] },
  { codigo: '7112000', descricao: 'Serviços de engenharia', setor: 'Engenharia', grauRisco: 2, nrsDestaque: ['NR-35', 'NR-18'] },
  { codigo: '7120100', descricao: 'Testes e análises técnicas', setor: 'Laboratório', grauRisco: 2, nrsDestaque: ['NR-09', 'NR-15'] },
  { codigo: '7311400', descricao: 'Agências de publicidade', setor: 'Publicidade', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '7319099', descricao: 'Outras atividades de publicidade', setor: 'Publicidade', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '7490104', descricao: 'Atividades de intermediação e agenciamento', setor: 'Serviços', grauRisco: 1, nrsDestaque: [] },

  // ── ATIVIDADES ADMINISTRATIVAS E SERVIÇOS COMPLEMENTARES (Seção N) ──────
  { codigo: '7711000', descricao: 'Locação de automóveis sem condutor', setor: 'Locação', grauRisco: 1, nrsDestaque: [] },
  { codigo: '7721700', descricao: 'Aluguel de equipamentos recreativos e esportivos', setor: 'Locação', grauRisco: 1, nrsDestaque: [] },
  { codigo: '7740300', descricao: 'Gestão de ativos intangíveis não-financeiros', setor: 'Serviços', grauRisco: 1, nrsDestaque: [] },
  { codigo: '7810800', descricao: 'Seleção e agenciamento de mão de obra', setor: 'RH e Terceirização', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '7820500', descricao: 'Locação de mão de obra temporária', setor: 'RH e Terceirização', grauRisco: 3, nrsDestaque: ['NR-17'], observacao: 'Grau de risco segue a atividade do tomador de serviço' },
  { codigo: '7911200', descricao: 'Agências de viagens', setor: 'Turismo', grauRisco: 1, nrsDestaque: [] },
  { codigo: '8011101', descricao: 'Atividades de vigilância e segurança privada', setor: 'Segurança', grauRisco: 3, nrsDestaque: ['NR-16'], observacao: 'Adicional de periculosidade para vigilantes armados' },
  { codigo: '8020000', descricao: 'Atividades de monitoramento de sistemas de segurança', setor: 'Segurança', grauRisco: 1, nrsDestaque: [] },
  { codigo: '8111700', descricao: 'Serviços combinados para apoio a edifícios exceto condomínios', setor: 'Facilities', grauRisco: 2, nrsDestaque: ['NR-10', 'NR-35'] },
  { codigo: '8112500', descricao: 'Condomínios prediais', setor: 'Condomínios', grauRisco: 2, nrsDestaque: ['NR-10', 'NR-35'] },
  { codigo: '8121400', descricao: 'Limpeza em prédios e em domicílios', setor: 'Limpeza', grauRisco: 2, nrsDestaque: ['NR-15', 'NR-09', 'NR-17'] },
  { codigo: '8122200', descricao: 'Imunização e controle de pragas urbanas', setor: 'Dedetização', grauRisco: 3, nrsDestaque: ['NR-15', 'NR-09'] },
  { codigo: '8219999', descricao: 'Preparação de documentos e serviços especializados de apoio administrativo', setor: 'Administrativo', grauRisco: 1, nrsDestaque: ['NR-17'] },
  { codigo: '8230001', descricao: 'Serviços de organização de feiras e congressos', setor: 'Eventos', grauRisco: 2, nrsDestaque: ['NR-35'] },

  // ── ADMINISTRAÇÃO PÚBLICA (Seção O) ─────────────────────────────────────
  { codigo: '8411600', descricao: 'Administração pública em geral', setor: 'Administração Pública', grauRisco: 1, nrsDestaque: [] },

  // ── EDUCAÇÃO (Seção P) ───────────────────────────────────────────────────
  { codigo: '8511200', descricao: 'Educação infantil — creches', setor: 'Educação', grauRisco: 1, nrsDestaque: [] },
  { codigo: '8512100', descricao: 'Educação infantil — pré-escolar', setor: 'Educação', grauRisco: 1, nrsDestaque: [] },
  { codigo: '8513900', descricao: 'Ensino fundamental', setor: 'Educação', grauRisco: 1, nrsDestaque: [] },
  { codigo: '8520100', descricao: 'Ensino médio', setor: 'Educação', grauRisco: 1, nrsDestaque: [] },
  { codigo: '8531700', descricao: 'Educação superior — graduação', setor: 'Ensino Superior', grauRisco: 1, nrsDestaque: [] },
  { codigo: '8599603', descricao: 'Treinamento em desenvolvimento profissional e gerencial', setor: 'Treinamento', grauRisco: 1, nrsDestaque: [] },

  // ── SAÚDE HUMANA E SERVIÇOS SOCIAIS (Seção Q) ───────────────────────────
  { codigo: '8610101', descricao: 'Atividades de atendimento hospitalar — hospital geral', setor: 'Saúde', grauRisco: 3, nrsDestaque: ['NR-32', 'NR-15', 'NR-09'], observacao: 'NR-32 (saúde) obrigatória — risco biológico, químico e de acidente' },
  { codigo: '8621601', descricao: 'UTI — serviços de remoção de pacientes', setor: 'Saúde', grauRisco: 3, nrsDestaque: ['NR-32'] },
  { codigo: '8630503', descricao: 'Atividade médica ambulatorial com recursos para procedimentos cirúrgicos', setor: 'Saúde', grauRisco: 2, nrsDestaque: ['NR-32', 'NR-15'] },
  { codigo: '8630504', descricao: 'Atividade odontológica', setor: 'Odontologia', grauRisco: 2, nrsDestaque: ['NR-32', 'NR-15'] },
  { codigo: '8640201', descricao: 'Laboratórios de anatomia patológica e citológica', setor: 'Laboratório Clínico', grauRisco: 3, nrsDestaque: ['NR-32', 'NR-15'] },
  { codigo: '8640202', descricao: 'Laboratórios clínicos', setor: 'Laboratório Clínico', grauRisco: 2, nrsDestaque: ['NR-32', 'NR-15'] },
  { codigo: '8650001', descricao: 'Atividades de enfermagem', setor: 'Saúde', grauRisco: 3, nrsDestaque: ['NR-32'] },
  { codigo: '8650004', descricao: 'Atividades de fisioterapia', setor: 'Saúde', grauRisco: 2, nrsDestaque: ['NR-17'] },
  { codigo: '8660700', descricao: 'Atividades de apoio à gestão de saúde', setor: 'Saúde', grauRisco: 1, nrsDestaque: [] },
  { codigo: '8711501', descricao: 'Clínicas e residências geriátricas', setor: 'Saúde', grauRisco: 3, nrsDestaque: ['NR-32', 'NR-17'] },
  { codigo: '8720401', descricao: 'Atividades de centros de assistência psicossocial', setor: 'Saúde Mental', grauRisco: 2, nrsDestaque: ['NR-32'] },

  // ── ARTES, CULTURA E RECREAÇÃO (Seção R) ────────────────────────────────
  { codigo: '9001901', descricao: 'Produção teatral', setor: 'Cultura', grauRisco: 1, nrsDestaque: [] },
  { codigo: '9200301', descricao: 'Casas de bingo', setor: 'Entretenimento', grauRisco: 1, nrsDestaque: [] },
  { codigo: '9313100', descricao: 'Atividades de condicionamento físico — academias', setor: 'Fitness', grauRisco: 1, nrsDestaque: [] },

  // ── OUTRAS ATIVIDADES DE SERVIÇOS (Seção S) ─────────────────────────────
  { codigo: '9411100', descricao: 'Atividades de organizações associativas patronais', setor: 'Associações', grauRisco: 1, nrsDestaque: [] },
  { codigo: '9412000', descricao: 'Atividades de organizações profissionais', setor: 'Associações', grauRisco: 1, nrsDestaque: [] },
  { codigo: '9420100', descricao: 'Atividades de organizações sindicais', setor: 'Sindicatos', grauRisco: 1, nrsDestaque: [] },
  { codigo: '9511800', descricao: 'Reparação e manutenção de computadores', setor: 'Manutenção TI', grauRisco: 1, nrsDestaque: ['NR-10'] },
  { codigo: '9521500', descricao: 'Reparação e manutenção de equipamentos eletroeletrônicos', setor: 'Manutenção', grauRisco: 2, nrsDestaque: ['NR-10'] },
  { codigo: '9529105', descricao: 'Reparação de artigos do mobiliário', setor: 'Manutenção', grauRisco: 2, nrsDestaque: ['NR-12'] },
  { codigo: '9601701', descricao: 'Lavanderias', setor: 'Serviços Pessoais', grauRisco: 2, nrsDestaque: ['NR-15'] },
  { codigo: '9602501', descricao: 'Cabeleireiros, manicure e pedicure', setor: 'Beleza', grauRisco: 2, nrsDestaque: ['NR-15', 'NR-09'] },
  { codigo: '9603301', descricao: 'Gestão e manutenção de cemitérios', setor: 'Funerário', grauRisco: 3, nrsDestaque: ['NR-32', 'NR-15'] },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function buscarCnae(query: string): CnaeEntry[] {
  const q = query.trim().toLowerCase().replace(/[.\-\/]/g, '');
  if (!q || q.length < 2) return [];

  return cnaeData.filter((entry) => {
    const code = entry.codigo.replace(/[.\-\/]/g, '');
    return (
      code.startsWith(q) ||
      entry.descricao.toLowerCase().includes(q) ||
      entry.setor.toLowerCase().includes(q)
    );
  }).slice(0, 12);
}

export const grauRiscoInfo = {
  1: {
    label: 'Grau 1 — Baixo',
    cor: 'green',
    sesmt: 'SESMT obrigatório a partir de 501 empregados',
    descricao: 'Atividades com menor exposição a riscos ocupacionais — escritórios, serviços administrativos, comércio leve.',
    examesPeriodicos: 'Periodicidade do exame periódico: a cada 2 anos (trabalhadores até 45 anos)',
  },
  2: {
    label: 'Grau 2 — Médio',
    cor: 'yellow',
    sesmt: 'SESMT obrigatório a partir de 101 empregados',
    descricao: 'Exposição moderada a riscos físicos, químicos ou ergonômicos. Comércio, alimentos, saúde ambulatorial.',
    examesPeriodicos: 'Periodicidade do exame periódico: anual (acima de 45 anos) ou a cada 2 anos (abaixo de 45)',
  },
  3: {
    label: 'Grau 3 — Alto',
    cor: 'orange',
    sesmt: 'SESMT obrigatório a partir de 51 empregados',
    descricao: 'Riscos relevantes — construção civil, transporte, indústria de transformação, saúde hospitalar.',
    examesPeriodicos: 'Periodicidade do exame periódico: anual',
  },
  4: {
    label: 'Grau 4 — Crítico',
    cor: 'red',
    sesmt: 'SESMT obrigatório a partir de 51 empregados (composição mais exigente)',
    descricao: 'Máximo risco — mineração, petroquímica, siderurgia, energia elétrica de alta tensão.',
    examesPeriodicos: 'Periodicidade do exame periódico: semestral',
  },
} as const;

export const nrsUniversais = ['NR-01 (PGR)', 'NR-07 (PCMSO)', 'NR-09', 'NR-28'];
