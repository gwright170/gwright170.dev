# Personal site

Personal site built with [Next.js](https://nextjs.org/) and [Mantine](https://mantine.dev/). Currently available at [gwright170.dev](https://www.gwright170.dev).

Feel free to use this as a template for your own site.

## Features

This project comes with the following features:

- [TypeScript](https://www.typescriptlang.org/)
- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
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
- `test` – runs `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `prettier:write` – formats all files with Prettier

## Editor setup

I'd recommend using [VSCode](https://code.visualstudio.com/) with the following extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## What I'm working on

- [ ] create and use vars for default font-sizes (factors of 8px)
- [ ] remove style overrides dependent on structure
- [ ] CI using GitHub Actions
- [ ] Move to GitHub issues

Before LIVE

- [ ] first blog post
- [ ] edge based open graph image is not working
- [ ] why isn't Google indexing me well
  - [ ] undefined title (should be addressed, awaiting re-index)
  - [ ] js text (should be addressed, awaiting re-index)
  - [ ] no icon (should be addressed, awaiting re-index)
