import fs from 'node:fs/promises';
import { SpreadsheetFile, Workbook } from '@oai/artifact-tool';

const outputDir = 'C:\\Users\\Felipe.Sannino\\Desktop\\Site SERMST\\outputs';
await fs.mkdir(outputDir, { recursive: true });

const wb = Workbook.create();
const instructions = wb.worksheets.add('Instruções');
const bands = wb.worksheets.add('Faixas de preço');
const sim = wb.worksheets.add('Simulador');

const navy = '#0B133C';
const pink = '#E83E8C';
const light = '#F4F6FA';
const border = '#D9E0EA';
const green = '#E7F6EF';
const yellow = '#FFF4CC';

instructions.showGridLines = false;
instructions.getRange('A1:F1').merge();
instructions.getRange('A1').values = [['Planos de assinatura SERMST — modelo editável']];
instructions.getRange('A1:F1').format = { fill: navy, font: { bold: true, color: '#FFFFFF', size: 16 }, horizontalAlignment: 'center', verticalAlignment: 'center' };
instructions.getRange('A3:F3').merge();
instructions.getRange('A3').values = [['Como usar esta planilha']];
instructions.getRange('A3:F3').format = { fill: pink, font: { bold: true, color: '#FFFFFF', size: 12 } };
instructions.getRange('A5:B10').values = [
  ['1', 'Altere os valores amarelos na aba “Faixas de preço”.'],
  ['2', 'Informe a quantidade de funcionários na célula B3 da aba “Simulador”.'],
  ['3', 'A partir de 100 funcionários, o resultado fica “Sob consulta”, como na página.'],
  ['4', 'O desconto anual está na célula B4 do “Simulador” e começa em 5%.'],
  ['5', 'O cálculo é progressivo: cada faixa aplica seu preço somente aos funcionários daquela faixa.'],
  ['6', 'Os valores derivados são fórmulas; você pode ajustar os inputs e conferir o impacto.'],
];
instructions.getRange('A5:A10').format = { font: { bold: true, color: pink }, horizontalAlignment: 'center' };
instructions.getRange('B5:B10').format = { wrapText: true, font: { color: navy } };
instructions.getRange('A12:F12').merge();
instructions.getRange('A12').values = [['Regra aplicada atualmente na página: valor mensal = mínimo do plano + soma das faixas progressivas. Anual à vista = mensal × 12 × (1 − desconto).']];
instructions.getRange('A12:F12').format = { fill: light, font: { italic: true, color: navy }, wrapText: true };
instructions.getRange('A1:F12').format.borders = { preset: 'outside', style: 'thin', color: border };
instructions.getRange('A:A').format.columnWidth = 7;
instructions.getRange('B:B').format.columnWidth = 92;
instructions.getRange('C:F').format.columnWidth = 14;
instructions.getRange('1:1').format.rowHeight = 30;
instructions.getRange('5:10').format.rowHeight = 24;

bands.showGridLines = false;
bands.getRange('A1:E1').merge();
bands.getRange('A1').values = [['Faixas de preço — valores editáveis']];
bands.getRange('A1:E1').format = { fill: navy, font: { bold: true, color: '#FFFFFF', size: 16 }, horizontalAlignment: 'center', verticalAlignment: 'center' };
bands.getRange('A3:E3').values = [['Plano', 'Valor mínimo', 'Funcionários — de', 'Funcionários — até', 'R$ por funcionário na faixa']];
bands.getRange('A3:E3').format = { fill: pink, font: { bold: true, color: '#FFFFFF' }, wrapText: true, horizontalAlignment: 'center', verticalAlignment: 'center' };
const bandRows = [
  ['Plano Base', 149, 2, 10, 15], ['Plano Base', 149, 11, 30, 12], ['Plano Base', 149, 31, 100, 9], ['Plano Base', 149, 101, 300, 7], ['Plano Base', 149, 301, 10000, 5.5],
  ['Plano Essencial', 229, 2, 10, 22], ['Plano Essencial', 229, 11, 30, 18], ['Plano Essencial', 229, 31, 100, 14], ['Plano Essencial', 229, 101, 300, 11], ['Plano Essencial', 229, 301, 10000, 8.5],
  ['Plano Gestão Total', 329, 2, 10, 30], ['Plano Gestão Total', 329, 11, 30, 25], ['Plano Gestão Total', 329, 31, 100, 20], ['Plano Gestão Total', 329, 101, 300, 16], ['Plano Gestão Total', 329, 301, 10000, 12],
];
bands.getRange('A4:E18').values = bandRows;
bands.getRange('A4:A18').format = { font: { bold: true, color: navy } };
bands.getRange('B4:E18').format = { fill: yellow };
bands.getRange('B4:B18').format.numberFormat = 'R$ #,##0.00';
bands.getRange('E4:E18').format.numberFormat = 'R$ #,##0.00';
bands.getRange('C4:D18').format.numberFormat = '#,##0';
bands.getRange('A3:E18').format.borders = { preset: 'all', style: 'thin', color: border };
bands.getRange('A20:E20').merge();
bands.getRange('A20').values = [['Células amarelas = inputs. Para alterar os preços, edite principalmente as colunas B e E. A faixa final usa 10.000 como limite técnico para representar “301 ou mais”.']];
bands.getRange('A20:E20').format = { fill: light, font: { italic: true, color: navy }, wrapText: true };
bands.getRange('A:A').format.columnWidth = 22;
bands.getRange('B:B').format.columnWidth = 16;
bands.getRange('C:D').format.columnWidth = 20;
bands.getRange('E:E').format.columnWidth = 28;
bands.getRange('1:1').format.rowHeight = 30;
bands.getRange('3:3').format.rowHeight = 34;

sim.showGridLines = false;
sim.getRange('A1:H1').merge();
sim.getRange('A1').values = [['Simulador de valores dos planos']];
sim.getRange('A1:H1').format = { fill: navy, font: { bold: true, color: '#FFFFFF', size: 16 }, horizontalAlignment: 'center', verticalAlignment: 'center' };
sim.getRange('A3:B4').values = [['Funcionários', 10], ['Desconto anual à vista', 0.05]];
sim.getRange('A3:A4').format = { fill: light, font: { bold: true, color: navy } };
sim.getRange('B3:B4').format = { fill: yellow, font: { bold: true, color: navy } };
sim.getRange('B3').format.numberFormat = '#,##0';
sim.getRange('B4').format.numberFormat = '0%';
sim.getRange('A6:E6').values = [['Plano', 'Valor mensal', 'Anual à vista', 'Média por funcionário', 'Fórmula resumida']];
sim.getRange('A6:E6').format = { fill: pink, font: { bold: true, color: '#FFFFFF' }, wrapText: true, horizontalAlignment: 'center' };
const simPlans = [
  ['Plano Base', 4], ['Plano Essencial', 9], ['Plano Gestão Total', 14],
];
sim.getRange('A7:A9').values = simPlans.map(([name]) => [name]);
sim.getRange('A7:A9').format = { font: { bold: true, color: navy } };
const monthlyFormula = (startRow) => {
  const min = `'Faixas de preço'!$B$${startRow}`;
  const terms = Array.from({ length: 5 }, (_, i) => {
    const r = startRow + i;
    return `MAX(0,MIN($B$3,'Faixas de preço'!$D$${r})-'Faixas de preço'!$C$${r}+1)*'Faixas de preço'!$E$${r}`;
  }).join('+');
  return `=IF($B$3>=100,"Sob consulta",${min}+${terms})`;
};
for (let i = 0; i < 3; i++) {
  const row = 7 + i;
  const start = 4 + i * 5;
  sim.getRange(`B${row}`).formulas = [[monthlyFormula(start)]];
  sim.getRange(`C${row}`).formulas = [[`=IF(B${row}="Sob consulta","",ROUND(B${row}*12*(1-$B$4),0))`]];
  sim.getRange(`D${row}`).formulas = [[`=IF(B${row}="Sob consulta","",ROUND(B${row}/$B$3,0))`]];
  sim.getRange(`E${row}`).values = [['Mínimo + faixas progressivas']];
}
sim.getRange('B7:D9').format.numberFormat = 'R$ #,##0.00';
sim.getRange('A6:E9').format.borders = { preset: 'all', style: 'thin', color: border };
sim.getRange('A11:E11').merge();
sim.getRange('A11').values = [['Exemplos automáticos — altere B3 para testar outros portes']];
sim.getRange('A11:E11').format = { fill: light, font: { bold: true, color: navy } };
sim.getRange('A12:E12').values = [['Funcionários', 'Base mensal', 'Essencial mensal', 'Gestão Total mensal', 'Observação']];
sim.getRange('A12:E12').format = { fill: navy, font: { bold: true, color: '#FFFFFF' }, horizontalAlignment: 'center', wrapText: true };
const examples = [1, 10, 30, 50, 99];
sim.getRange('A13:A17').values = examples.map((n) => [n]);
for (let r = 13; r <= 17; r++) {
  for (let c = 2; c <= 4; c++) {
    const start = 4 + (c - 2) * 5;
    sim.getCell(r - 1, c - 1).formulas = [[monthlyFormula(start).replaceAll('$B$3', `$A${r}`)]];
  }
}
sim.getRange('E13:E17').values = [['Simulação'], ['Simulação'], ['Simulação'], ['Simulação'], ['Limite da simulação']];
sim.getRange('B13:D17').format.numberFormat = 'R$ #,##0.00';
sim.getRange('A12:E17').format.borders = { preset: 'all', style: 'thin', color: border };
sim.getRange('A17:E17').format = { fill: yellow, font: { bold: true, color: navy } };
sim.getRange('A20:E20').merge();
sim.getRange('A20').values = [['A página atual encaminha 100 ou mais funcionários para proposta comercial. Os valores até 99 são calculados automaticamente.']];
sim.getRange('A20:E20').format = { fill: green, font: { italic: true, color: navy }, wrapText: true };
sim.getRange('A:A').format.columnWidth = 24;
sim.getRange('B:D').format.columnWidth = 20;
sim.getRange('E:E').format.columnWidth = 32;
sim.getRange('1:1').format.rowHeight = 30;
sim.getRange('6:6').format.rowHeight = 34;
sim.freezePanes.freezeRows(6);

instructions.delete();

const check = await wb.inspect({ kind: 'table', range: 'Simulador!A1:E20', include: 'values,formulas', tableMaxRows: 20, tableMaxCols: 8, tableMaxCellChars: 120 });
console.log(check.ndjson);
const errors = await wb.inspect({ kind: 'match', searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A', options: { useRegex: true, maxResults: 100 }, summary: 'formula error scan' });
console.log(errors.ndjson);
const preview = await wb.render({ sheetName: 'Simulador', range: 'A1:E20', scale: 1.2, format: 'png' });
await fs.writeFile(`${outputDir}\\simulador-preview.png`, new Uint8Array(await preview.arrayBuffer()));
const xlsx = await SpreadsheetFile.exportXlsx(wb);
await xlsx.save(`${outputDir}\\planilha-valores-assinaturas-sermst.xlsx`);
