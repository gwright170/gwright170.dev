# My personal site

My personal site built with [Next.js](https://nextjs.org/) and [Mantine](https://mantine.dev/). Currently available at [https://gwright170.dev](gwright170.dev).

Feel free to use this as a template for your own site.

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier

## What I'm working on

CSS

- [ ] create and use vars for default font-sizes
- [ ] resolve nasty hacks for style overrides (dependent on structure)

Content

- [ ] integrate blog into homepage
- [ ] projects page (empty for now) + integrate into homepage
- [ ] remove existing blog posts + handle no entries

SEO

- [ ] top-level image + metadata for blog posts
- [ ] breadcrumbs for blog posts

CI

- [ ] CI using GitHub Actions
- [ ] Update packages
