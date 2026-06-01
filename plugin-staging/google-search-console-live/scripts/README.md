# Google Search Console Live

## Setup rapido
1. Coloque o arquivo `client_secret.json` nesta pasta.
2. Instale as dependencias:
   `python -m pip install --target .\\vendor -r requirements.txt`
3. Gere o token:
   `python -s auth_search_console.py`
4. Valide o acesso:
   `python -s check_access.py --site-url sc-domain:sermst.com.br`
5. Consulte desempenho:
   `python -s query_performance.py --site-url sc-domain:sermst.com.br --start-date 2026-04-24 --end-date 2026-05-22 --dimensions query,page --row-limit 25`

## Observacoes
- O usuario autenticado precisa ter acesso a propriedade no Search Console.
- `API key` sozinha normalmente nao libera o Search Analytics.
- O `token.json` e gerado localmente apos a autenticacao inicial.
- As bibliotecas Python ficam em `.\vendor` para nao depender do ambiente global.
