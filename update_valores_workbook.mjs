import fs from 'node:fs/promises';
import { FileBlob, SpreadsheetFile } from '@oai/artifact-tool';

const input = await FileBlob.load('C:\\Users\\Felipe.Sannino\\Downloads\\valores.xlsx');
const wb = await SpreadsheetFile.importXlsx(input);
const bands = wb.worksheets.getItem('Faixas de preço');
const sim = wb.worksheets.add('Simulador');

const navy = '#0B133C';
const pink = '#E83E8C';
const light = '#F4F6FA';
const yellow = '#FFF4CC';
const border = '#D9E0EA';

sim.showGridLines = false;
sim.getRange('A1:E1').merge();
sim.getRange('A1').values = [['Simulador de valores dos planos']];
sim.getRange('A1:E1').format = { fill: navy, font: { bold: true, color: '#FFFFFF', size: 16 }, horizontalAlignment: 'center', verticalAlignment: 'center' };
sim.getRange('A3:B4').values = [['Funcionários', 10], ['Desconto anual à vista', 0.05]];
sim.getRange('A3:A4').format = { fill: light, font: { bold: true, color: navy } };
sim.getRange('B3:B4').format = { fill: yellow, font: { bold: true, color: navy } };
sim.getRange('B3').format.numberFormat = '#,##0';
sim.getRange('B4').format.numberFormat = '0%';
sim.getRange('A6:E6').values = [['Plano', 'Valor mensal', 'Anual à vista', 'Média por funcionário', 'Fórmula resumida']];
sim.getRange('A6:E6').format = { fill: pink, font: { bold: true, color: '#FFFFFF' }, wrapText: true, horizontalAlignment: 'center' };
sim.getRange('A7:A9').values = [['Plano Base'], ['Plano Essencial'], ['Plano Gestão Total']];
sim.getRange('A7:A9').format = { font: { bold: true, color: navy } };

function monthlyFormula(startRow, employeeRef = '$B$3') {
  const min = `'Faixas de preço'!$B$${startRow}`;
  const terms = Array.from({ length: 6 }, (_, i) => {
    const r = startRow + i;
    return `MAX(0,MIN(${employeeRef},'Faixas de preço'!$D$${r})-'Faixas de preço'!$C$${r}+1)*'Faixas de preço'!$E$${r}`;
  }).join('+');
  return `=${min}+${terms}`;
}

for (let i = 0; i < 3; i++) {
  const row = 7 + i;
  const start = 4 + i * 6;
  sim.getRange(`B${row}`).formulas = [[monthlyFormula(start)]];
  sim.getRange(`C${row}`).formulas = [[`=ROUND(B${row}*12*(1-$B$4),0)`]];
  sim.getRange(`D${row}`).formulas = [[`=ROUND(B${row}/$B$3,0)`]];
  sim.getRange(`E${row}`).values = [['Mínimo + faixas progressivas']];
}
sim.getRange('B7:D9').format.numberFormat = 'R$ #,##0.00';
sim.getRange('A6:E9').format.borders = { preset: 'all', style: 'thin', color: border };

sim.getRange('A11:E11').merge();
sim.getRange('A11').values = [['Exemplos automáticos — valores derivados das novas faixas']];
sim.getRange('A11:E11').format = { fill: light, font: { bold: true, color: navy } };
sim.getRange('A12:E12').values = [['Funcionários', 'Base mensal', 'Essencial mensal', 'Gestão Total mensal', 'Observação']];
sim.getRange('A12:E12').format = { fill: navy, font: { bold: true, color: '#FFFFFF' }, horizontalAlignment: 'center', wrapText: true };
const examples = [1, 10, 20, 50, 70, 80, 99];
sim.getRange('A13:A19').values = examples.map((n) => [n]);
for (let r = 13; r <= 19; r++) {
  for (let c = 2; c <= 4; c++) {
    const start = 4 + (c - 2) * 6;
    sim.getCell(r - 1, c - 1).formulas = [[monthlyFormula(start, `$A${r}`)]];
  }
}
sim.getRange('E13:E19').values = examples.map((n) => [n === 99 ? 'Limite da simulação' : 'Simulação']);
sim.getRange('B13:D19').format.numberFormat = 'R$ #,##0.00';
sim.getRange('A12:E19').format.borders = { preset: 'all', style: 'thin', color: border };
sim.getRange('A19:E19').format = { fill: yellow, font: { bold: true, color: navy } };
sim.getRange('A21:E21').merge();
sim.getRange('A21').values = [['Os valores desta aba são calculados diretamente pelas faixas da aba “Faixas de preço”. Edite as células amarelas na aba de faixas para recalcular o simulador.']];
sim.getRange('A21:E21').format = { fill: light, font: { italic: true, color: navy }, wrapText: true };
sim.getRange('A:A').format.columnWidth = 24;
sim.getRange('B:D').format.columnWidth = 20;
sim.getRange('E:E').format.columnWidth = 32;
sim.freezePanes.freezeRows(6);

const check = await wb.inspect({ kind: 'table', range: 'Simulador!A1:E21', include: 'values,formulas', tableMaxRows: 25, tableMaxCols: 8, tableMaxCellChars: 120 });
console.log(check.ndjson);
const errors = await wb.inspect({ kind: 'match', searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A', options: { useRegex: true, maxResults: 100 }, summary: 'formula error scan' });
console.log(errors.ndjson);
const output = await SpreadsheetFile.exportXlsx(wb);
await output.save('C:\\Users\\Felipe.Sannino\\Desktop\\Site SERMST\\outputs\\valores-atualizados.xlsx');
