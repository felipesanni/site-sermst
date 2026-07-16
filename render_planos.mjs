import fs from 'node:fs/promises';
import { FileBlob, SpreadsheetFile } from '@oai/artifact-tool';
const input = await FileBlob.load('C:\\Users\\Felipe.Sannino\\Desktop\\Site SERMST\\outputs\\valores-atualizados-com-planos.xlsx');
const wb = await SpreadsheetFile.importXlsx(input);
const blob = await wb.render({sheetName:'O que inclui', range:'A1:D23', scale:1.0, format:'png'});
await fs.writeFile('C:\\Users\\Felipe.Sannino\\Desktop\\Site SERMST\\outputs\\o-que-inclui-preview.png', new Uint8Array(await blob.arrayBuffer()));
