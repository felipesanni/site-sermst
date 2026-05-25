/**
 * test-utf8.mjs
 * Valida UTF-8 em arquivos fonte, respostas de API e strings com acentos/emojis.
 * Executar: node scripts/test-utf8.mjs
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

// Usar process.cwd() garante que espaços no path não sejam codificados como %20
const ROOT = process.cwd();
let passed = 0;
let failed = 0;

function assert(label, condition, detail = '') {
  if (condition) {
    console.log(`  ✅ ${label}`);
    passed++;
  } else {
    console.error(`  ❌ ${label}${detail ? ' — ' + detail : ''}`);
    failed++;
  }
}

// ── 1. Strings com acentos e emojis ──────────────────────────────────────────
console.log('\n[1] Strings com acentos e emojis');

const samples = [
  'ação',
  'coerência',
  'responsável',
  'orientação',
  'urgência',
  'médição',
  'Saúde Ocupacional',
  'São Paulo',
  'construção civil',
  'NR-18: Segurança e Saúde',
  'João Çedilha ñoño',
  '🏗️ obra', '⚠️ risco', '✅ aprovado', '❌ reprovado',
];

for (const s of samples) {
  const buf = Buffer.from(s, 'utf8');
  const roundtrip = buf.toString('utf8');
  assert(`roundtrip UTF-8: "${s}"`, roundtrip === s);
}

// ── 2. Buffer.byteLength vs .length (detecta multibyte) ──────────────────────
console.log('\n[2] Comprimento em bytes vs caracteres');

const multibyte = [
  { str: 'ação',       chars: 4, minBytes: 5  },
  { str: 'São Paulo',  chars: 9, minBytes: 10 },
  { str: '✅',         chars: 1, minBytes: 3  },
  { str: '🏗️',        chars: 3, minBytes: 7  }, // surrogate pair (2) + variation selector (1)
];

for (const { str, chars, minBytes } of multibyte) {
  assert(
    `"${str}" tem ${chars} chars e ≥${minBytes} bytes`,
    str.length === chars && Buffer.byteLength(str, 'utf8') >= minBytes,
    `chars=${str.length} bytes=${Buffer.byteLength(str, 'utf8')}`
  );
}

// ── 3. JSON serialize/deserialize preserva UTF-8 ─────────────────────────────
console.log('\n[3] JSON preserva acentos e emojis');

const payload = {
  nome: 'João Antônio',
  empresa: 'Construção Ltda.',
  demanda: 'PGR, PCMSO e gestão de eSocial',
  emoji: '✅ aprovado',
  acentos: 'áéíóú àèìòù âêîôû ãõ ç ñ',
};

const serialized = JSON.stringify(payload);
const parsed = JSON.parse(serialized);

for (const [key, value] of Object.entries(payload)) {
  assert(`JSON "${key}"`, parsed[key] === value);
}

// ── 4. Arquivos fonte sem BOM ─────────────────────────────────────────────────
console.log('\n[4] Arquivos .ts/.tsx sem BOM (EF BB BF)');

function walkFiles(dir, exts, ignore = ['node_modules', '.next', '.git', 'dist']) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    if (ignore.includes(entry)) continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) results.push(...walkFiles(full, exts, ignore));
    else if (exts.includes(extname(entry))) results.push(full);
  }
  return results;
}

const srcFiles = walkFiles(join(ROOT, 'src'), ['.ts', '.tsx']);
let bomCount = 0;

for (const file of srcFiles) {
  const buf = readFileSync(file);
  if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) {
    console.error(`  ❌ BOM detectado: ${file.replace(ROOT, '')}`);
    bomCount++;
    failed++;
  }
}

if (bomCount === 0) {
  console.log(`  ✅ ${srcFiles.length} arquivos verificados — nenhum BOM encontrado`);
  passed++;
}

// ── 5. Arquivos fonte são UTF-8 válido ────────────────────────────────────────
console.log('\n[5] Arquivos .ts/.tsx são UTF-8 válido');

let invalidCount = 0;
for (const file of srcFiles) {
  const buf = readFileSync(file);
  try {
    const text = new TextDecoder('utf-8', { fatal: true }).decode(buf);
    void text; // silencia lint
  } catch {
    console.error(`  ❌ UTF-8 inválido: ${file.replace(ROOT, '')}`);
    invalidCount++;
    failed++;
  }
}

if (invalidCount === 0) {
  console.log(`  ✅ ${srcFiles.length} arquivos verificados — todos UTF-8 válido`);
  passed++;
}

// ── 6. Acentos presentes em arquivos chave ────────────────────────────────────
console.log('\n[6] Arquivos chave contêm acentos esperados');

const keyChecks = [
  { file: 'src/lib/faq.ts',               must: ['urgência', 'admissão', 'exposição'] },
  { file: 'src/lib/data/seo-content.ts',  must: ['é obrigatório', 'São Paulo', 'eSocial'] },
  { file: 'src/app/layout.tsx',           must: ['Medicina', 'Segurança', 'São Paulo'] },
  { file: 'src/app/quem-somos/page.tsx',  must: ['vulnerável', 'é possível', 'você'] },
];

for (const { file, must } of keyChecks) {
  try {
    const content = readFileSync(join(ROOT, file), 'utf8');
    for (const word of must) {
      assert(`"${word}" em ${file.split('/').pop()}`, content.includes(word));
    }
  } catch {
    assert(`Leitura de ${file}`, false, 'arquivo não encontrado');
  }
}

// ── 7. Content-Type UTF-8 nas rotas de API ────────────────────────────────────
console.log('\n[7] API routes declaram charset=utf-8');

const apiRoutes = [
  'src/app/api/lead/route.ts',
  'src/app/api/cnpj/[cnpj]/route.ts',
];

for (const route of apiRoutes) {
  try {
    const content = readFileSync(join(ROOT, route), 'utf8');
    assert(
      `${route.split('/').at(-2)} declara charset=utf-8`,
      content.includes('charset=utf-8')
    );
  } catch {
    assert(`Leitura de ${route}`, false, 'arquivo não encontrado');
  }
}

// ── 8. next.config.ts tem Content-Type charset ────────────────────────────────
console.log('\n[8] next.config.ts tem header Content-Type com charset');

try {
  const config = readFileSync(join(ROOT, 'next.config.ts'), 'utf8');
  assert(
    'Content-Type: text/html; charset=utf-8 no next.config.ts',
    config.includes('charset=utf-8')
  );
} catch {
  assert('Leitura de next.config.ts', false, 'arquivo não encontrado');
}

// ── 9. .editorconfig existe e define charset=utf-8 ───────────────────────────
console.log('\n[9] .editorconfig define charset=utf-8');

try {
  const ec = readFileSync(join(ROOT, '.editorconfig'), 'utf8');
  assert('.editorconfig existe', true);
  assert('.editorconfig charset = utf-8', ec.includes('charset = utf-8'));
  assert('.editorconfig end_of_line = lf', ec.includes('end_of_line = lf'));
} catch {
  assert('.editorconfig existe', false, 'arquivo não encontrado');
}

// ── Resultado final ───────────────────────────────────────────────────────────
console.log(`\n${'─'.repeat(50)}`);
console.log(`Resultado: ${passed} passed, ${failed} failed`);

if (failed > 0) {
  console.error(`\n⚠️  ${failed} teste(s) falharam — verifique os itens acima`);
  process.exit(1);
} else {
  console.log('\n🎉 Todos os testes passaram — UTF-8 padronizado');
  process.exit(0);
}
