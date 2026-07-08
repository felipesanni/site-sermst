@echo off
cd /d "%~dp0sermst-web"
git add -A
git commit -m "SEO audit fixes: title tags, LTCAT geo titles, treinamentos word count, llms.txt, robots.txt, noindex removal, accented URL redirects"
git push
pause
