import { FileBlob, SpreadsheetFile } from '@oai/artifact-tool';
const input = await FileBlob.load('C:\\Users\\Felipe.Sannino\\Downloads\\valores.xlsx');
const wb = await SpreadsheetFile.importXlsx(input);
console.log((await wb.inspect({kind:'sheet', include:'id,name'})).ndjson);
console.log((await wb.inspect({kind:'workbook,sheet,table', maxChars:12000, tableMaxRows:40, tableMaxCols:12, tableMaxCellChars:120})).ndjson);
