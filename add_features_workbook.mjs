import fs from 'node:fs/promises';
import { FileBlob, SpreadsheetFile } from '@oai/artifact-tool';

const input = await FileBlob.load('C:\\Users\\Felipe.Sannino\\Desktop\\Site SERMST\\outputs\\valores-atualizados.xlsx');
const wb = await SpreadsheetFile.importXlsx(input);
const sheet = wb.worksheets.add('O que inclui');

const navy = '#0B133C';
const pink = '#E83E8C';
const light = '#F4F6FA';
const green = '#E7F6EF';
const border = '#D9E0EA';

sheet.showGridLines = false;
sheet.getRange('A1:D1').merge();
sheet.getRange('A1').values = [['O que cada plano possui']];
sheet.getRange('A1:D1').format = { fill: navy, font: { bold: true, color: '#FFFFFF', size: 16 }, horizontalAlignment: 'center', verticalAlignment: 'center' };
sheet.getRange('A3:D3').values = [['Item incluído', 'Plano Base', 'Plano Essencial', 'Plano Gestão Total']];
sheet.getRange('A3:D3').format = { fill: pink, font: { bold: true, color: '#FFFFFF' }, horizontalAlignment: 'center', wrapText: true };

const rows = [
  ['PGR — Programa de Gerenciamento de Riscos', 'Incluído', 'Incluído', 'Incluído'],
  ['PCMSO — Programa de Controle Médico de Saúde Ocupacional', 'Incluído', 'Incluído', 'Incluído'],
  ['LTCAT — Laudo Técnico das Condições Ambientais de Trabalho', 'Incluído', 'Incluído', 'Incluído'],
  ['Exames clínicos ocupacionais na sede da SERMST (exceto complementares)', 'Incluído', 'Incluído', 'Incluído'],
  ['Portal do Cliente — software de gestão', 'Incluído', 'Incluído', 'Incluído'],
  ['Gestão de vencimentos de exames periódicos', 'Incluído', 'Incluído', 'Incluído'],
  ['Mensageria do eSocial: S-2210, S-2220, S-2221 e S-2240', 'Incluído', 'Incluído', 'Incluído'],
  ['PPP — Perfil Profissiográfico Previdenciário', '—', 'Incluído', 'Incluído'],
  ['CAT — Comunicação de Acidente de Trabalho', '—', 'Incluído', 'Incluído'],
  ['Curso de CIPA para representante da empresa', '—', 'Incluído', 'Incluído'],
  ['Consultoria em SST', '—', 'Incluído', 'Incluído'],
  ['Apoio para auditorias e fiscalizações', '—', 'Incluído', 'Incluído'],
  ['Avaliação de fatores psicossociais', '—', 'Incluído', 'Incluído'],
  ['5 consultas com clínico geral ao longo do ano', '—', '—', 'Incluído'],
  ['1 palestra online ao vivo com psicóloga para a equipe', '—', '—', 'Incluído'],
  ['1 treinamento online sobre gestão estratégica', '—', '—', 'Incluído'],
  ['1 treinamento online sobre gestão de pessoas', '—', '—', 'Incluído'],
  ['1 treinamento online sobre empreendedorismo', '—', '—', 'Incluído'],
];
sheet.getRange('A4:D21').values = rows;
sheet.getRange('A4:A21').format = { font: { color: navy }, wrapText: true };
sheet.getRange('B4:D21').format = { horizontalAlignment: 'center', verticalAlignment: 'center' };
sheet.getRange('B4:D21').format.font = { color: '#16804B', bold: true };
sheet.getRange('B4:D21').conditionalFormats.add('containsText', { text: '—', format: { font: { color: '#94A3B8', bold: false } } });
sheet.getRange('A3:D21').format.borders = { preset: 'all', style: 'thin', color: border };
sheet.getRange('A4:D10').format = { fill: green };
sheet.getRange('A23:D23').merge();
sheet.getRange('A23').values = [['Os planos são cumulativos: o Essencial inclui tudo do Base; o Gestão Total inclui tudo do Essencial.']];
sheet.getRange('A23:D23').format = { fill: light, font: { italic: true, color: navy }, wrapText: true };
sheet.getRange('A:A').format.columnWidth = 68;
sheet.getRange('B:D').format.columnWidth = 20;
sheet.getRange('1:1').format.rowHeight = 30;
sheet.getRange('3:3').format.rowHeight = 32;
sheet.getRange('4:21').format.rowHeight = 24;

const check = await wb.inspect({ kind: 'table', range: 'O que inclui!A1:D23', include: 'values,formulas', tableMaxRows: 25, tableMaxCols: 6, tableMaxCellChars: 120 });
console.log(check.ndjson);
const errors = await wb.inspect({ kind: 'match', searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A', options: { useRegex: true, maxResults: 100 }, summary: 'formula error scan' });
console.log(errors.ndjson);
const output = await SpreadsheetFile.exportXlsx(wb);
await output.save('C:\\Users\\Felipe.Sannino\\Desktop\\Site SERMST\\outputs\\valores-atualizados-com-planos.xlsx');
