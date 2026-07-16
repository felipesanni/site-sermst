import fs from 'node:fs/promises';
import { FileBlob, SpreadsheetFile } from '@oai/artifact-tool';
const input = await FileBlob.load('C:\\Users\\Felipe.Sannino\\Downloads\\valores.xlsx');
const wb = await SpreadsheetFile.importXlsx(input);
const blob = await wb.render({sheetName:'Faixas de preço', range:'A1:E23', scale:1.2, format:'png'});
await fs.writeFile('C:\\Users\\Felipe.Sannino\\Desktop\\Site SERMST\\outputs\\valores-recebidos-preview.png', new Uint8Array(await blob.arrayBuffer()));
