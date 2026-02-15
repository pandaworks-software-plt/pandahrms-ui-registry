# pandahrms-ui-registry

Shared shadcn/ui component registry for PandaHRMS frontend projects.

## Commands

```bash
pnpm registry:build          # Build registry JSON output to public/r/
pnpm dev                     # Start dev server (for local testing)
```

## Adding a Component

1. Install via shadcn CLI: `pnpm dlx shadcn@latest add <component>`
2. Copy from `src/components/ui/` to `registry/default/<component>/`
3. Add entry to `registry.json` items array
4. Run `pnpm registry:build`
5. Commit everything including `public/r/` output

## Consuming

```bash
pnpm dlx shadcn@latest add https://raw.githubusercontent.com/pandaworks-software-plt/pandahrms-ui-registry/main/public/r/<component>.json
```

## Standards

- Style: default
- Tailwind: v4 (OKLCH color space)
- CSS variables: enabled
- Base color: zinc
- Icons: Lucide
