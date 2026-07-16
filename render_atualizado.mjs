import fs from 'node:fs/promises';
import { FileBlob, SpreadsheetFile } from '@oai/artifact-tool';
const input = await FileBlob.load('C:\\Users\\Felipe.Sannino\\Desktop\\Site SERMST\\outputs\\valores-atualizados.xlsx');
const wb = await SpreadsheetFile.importXlsx(input);
for (const [name, range, file] of [['Faixas de preço','A1:E23','faixas-atualizadas-preview.png'],['Simulador','A1:E21','simulador-atualizado-preview.png']]) {
  const blob = await wb.render({sheetName:name, range, scale:1.1, format:'png'});
  await fs.writeFile(`C:\\Users\\Felipe.Sannino\\Desktop\\Site SERMST\\outputs\\${file}`, new Uint8Array(await blob.arrayBuffer()));
}
