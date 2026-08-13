import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.join(process.cwd(), '.next', 'server', 'app');

const forbiddenPublicPhrases = [
  /promessa editorial/i,
  /para onde este hub leva/i,
  /topo que empurra/i,
  /papel (?:deste|desta) (?:hub|página)/i,
  /(?:topo|meio|fundo) de funil/i,
  /busca de alta concorrência/i,
  /intenção (?:informacional|transacional)/i,
  /busca do usuário/i,
  /quando a busca já deixou de ser só leitura/i,
  /ajuda o Google/i,
  /fortalece o cluster/i,
  /(?:página|rota|fluxo|atalho|agilidade|transparência) comercial/i,
  /ponte (?:normativa|previdenciária|técnica)/i,
  /a dor que trava/i,
  /leitura estratégica/i,
  /avançar para (?:a )?(?:página|serviço|contato)/i,
  /\b1983\b/i,
  /\+?3\.000 empresas/i,
];

async function listHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory()
        ? listHtmlFiles(entryPath)
        : entry.name.endsWith('.html')
          ? [entryPath]
          : [];
    }),
  );

  return nestedFiles.flat();
}

function decodeEntities(value) {
  const namedEntities = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    nbsp: ' ',
    quot: '"',
  };

  return value.replace(/&(#x?[\da-f]+|[a-z]+);/gi, (entity, code) => {
    if (code.startsWith('#')) {
      const hexadecimal = code[1]?.toLowerCase() === 'x';
      const valueStart = hexadecimal ? 2 : 1;
      const codePoint = Number.parseInt(code.slice(valueStart), hexadecimal ? 16 : 10);
      return Number.isNaN(codePoint) ? entity : String.fromCodePoint(codePoint);
    }

    return namedEntities[code.toLowerCase()] ?? entity;
  });
}

function extractVisibleText(html) {
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;

  return decodeEntities(
    body
      .replace(/<!--([\s\S]*?)-->/g, ' ')
      .replace(/<(script|style|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim();
}

let htmlFiles;

try {
  htmlFiles = await listHtmlFiles(outputDirectory);
} catch (error) {
  console.error(`Não foi possível auditar o HTML público em ${outputDirectory}.`);
  throw error;
}

const findings = [];

for (const file of htmlFiles) {
  const visibleText = extractVisibleText(await readFile(file, 'utf8'));

  for (const pattern of forbiddenPublicPhrases) {
    const match = visibleText.match(pattern);
    if (match) {
      findings.push({
        file: path.relative(outputDirectory, file),
        phrase: match[0],
      });
    }
  }
}

if (findings.length > 0) {
  console.error('A auditoria encontrou linguagem interna no conteúdo público:');
  for (const finding of findings) {
    console.error(`- ${finding.file}: “${finding.phrase}”`);
  }
  process.exitCode = 1;
} else {
  console.log(`Auditoria de conteúdo público concluída: ${htmlFiles.length} arquivos HTML sem vazamentos editoriais conhecidos.`);
}
