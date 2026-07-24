# Rollback — Apps home (2026-07-24)

## Snapshot
- Git tag: `pre-apps-home-2026-07-24` (commit `4027c70`)
- Cloudflare Pages production **antes** del cambio: `0814aab9-faee-4fa4-854f-d410607ab914`
  - Preview: https://0814aab9.ac-portfolio.pages.dev
  - Dashboard: https://dash.cloudflare.com/73222d0ff301aa06195455f0a0532f95/pages/view/ac-portfolio/0814aab9-faee-4fa4-854f-d410607ab914

## Volver atrás (recomendado)
1. Abrí el deployment viejo en el dashboard de Pages.
2. **Rollback to this deployment** (Promote).

O desde CLI (si tu cuenta lo soporta):
```bash
npx wrangler pages deployment list --project-name=ac-portfolio
# luego promote / rollback del id 0814aab9-...
```

## Volver el código
```bash
git checkout main
git reset --hard pre-apps-home-2026-07-24
# o: git revert <commit-del-refactor>
git push --force-with-lease   # solo si hace falta alinear remote
```

## Dominio apps.alancorcos.com
Si hay que quitar el subdomain: Cloudflare Pages → ac-portfolio → Custom domains → Remove `apps.alancorcos.com`.
