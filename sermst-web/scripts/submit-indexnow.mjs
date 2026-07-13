const SITE_URL = (process.env.INDEXNOW_SITE_URL ?? 'https://sermst.com.br').replace(/\/$/, '');
const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? '8ebc0f4a388a422381f889c6be5d83c2';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

function decodeXml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'");
}

function parseSitemap(xml) {
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].flatMap((match) => {
    const block = match[1];
    const location = block.match(/<loc>([\s\S]*?)<\/loc>/)?.[1]?.trim();
    const lastModified = block.match(/<lastmod>([\s\S]*?)<\/lastmod>/)?.[1]?.trim();

    return location ? [{ url: decodeXml(location), lastModified }] : [];
  });
}

function selectChangedUrls(entries) {
  const requestedSince = process.env.INDEXNOW_SINCE;
  const datedEntries = entries.filter((entry) => entry.lastModified);

  if (datedEntries.length === 0) {
    throw new Error('O sitemap publicado não informa lastmod para nenhuma URL.');
  }

  const since = requestedSince ?? datedEntries
    .map((entry) => entry.lastModified)
    .sort()
    .at(-1);

  return {
    since,
    urls: datedEntries
      .filter((entry) => entry.lastModified >= since)
      .map((entry) => entry.url),
  };
}

async function assertPublishedKey() {
  const response = await fetch(KEY_LOCATION, {
    headers: { 'user-agent': 'SERMST-IndexNow/1.0' },
  });
  const publishedKey = response.ok ? (await response.text()).trim() : '';

  if (publishedKey !== INDEXNOW_KEY) {
    throw new Error(
      `A chave do IndexNow ainda não está publicada em ${KEY_LOCATION}. Faça o deploy antes de enviar URLs.`,
    );
  }
}

async function main() {
  await assertPublishedKey();

  const sitemapResponse = await fetch(`${SITE_URL}/sitemap.xml`, {
    headers: { 'user-agent': 'SERMST-IndexNow/1.0' },
  });

  if (!sitemapResponse.ok) {
    throw new Error(`Não foi possível ler o sitemap publicado: HTTP ${sitemapResponse.status}.`);
  }

  const entries = parseSitemap(await sitemapResponse.text());
  const { since, urls } = selectChangedUrls(entries);

  if (urls.length === 0) {
    throw new Error(`Nenhuma URL com lastmod a partir de ${since} foi encontrada.`);
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'user-agent': 'SERMST-IndexNow/1.0',
    },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  });

  if (![200, 202].includes(response.status)) {
    const detail = (await response.text()).trim();
    throw new Error(`IndexNow recusou o envio: HTTP ${response.status}${detail ? `, ${detail}` : ''}.`);
  }

  console.log(`IndexNow recebeu ${urls.length} URLs revisadas desde ${since}.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
