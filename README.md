# TR Atualiza

Landing page em `React + TypeScript + Vite + Tailwind CSS` para divulgação dos
cursos presenciais da TR Atualiza.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite no navegador.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Estrutura principal

- `src/App.tsx`: composição da landing page.
- `src/components/Reveal.tsx`: wrapper tipado para animações de entrada.
- `src/hooks/useScrollReveal.ts`: hook com `IntersectionObserver`.
- `src/data/content.ts`: conteúdo centralizado e tipado.
- `src/index.css`: Tailwind e animações/customizações globais.
