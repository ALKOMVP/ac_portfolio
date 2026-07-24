# Rollback — Apps home (2026-07-24)

## Snapshot
- Git tag: `pre-apps-home-2026-07-24` (commit `4027c70`)
- Cloudflare Pages production **antes** del cambio: `0814aab9-faee-4fa4-854f-d410607ab914`
  - Preview: https://0814aab9.ac-portfolio.pages.dev
  - Dashboard: https://dash.cloudflare.com/73222d0ff301aa06195455f0a0532f95/pages/view/ac-portfolio/0814aab9-faee-4fa4-854f-d410607ab914
- Deployment **nuevo** (Apps home): `98539e11` → https://98539e11.ac-portfolio.pages.dev

## Volver atrás (recomendado — 30 s)
1. Abrí: https://dash.cloudflare.com/73222d0ff301aa06195455f0a0532f95/pages/view/ac-portfolio/0814aab9-faee-4fa4-854f-d410607ab914
2. Click **Rollback to this deployment**.

## Volver el código
```bash
cd ~/projects/ac_portfolio
git checkout main
git reset --hard pre-apps-home-2026-07-24
git push --force-with-lease origin main
# y redeploy o rollback en Pages
```

## Dominio apps.alancorcos.com
Agregado al proyecto Pages (puede quedar `pending` hasta DNS/SSL).
Si no resuelve, en Cloudflare DNS de `alancorcos.com` creá:
- Tipo: **CNAME**
- Nombre: `apps`
- Destino: `ac-portfolio.pages.dev`
- Proxy: ON

Para quitar el subdomain: Pages → ac-portfolio → Custom domains → Remove `apps.alancorcos.com`.
