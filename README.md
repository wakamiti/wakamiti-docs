# wakamiti-doc
Wakamiti documentation site

**Multilenguage support:** Spanish (default) and English.

## Astro

Look at the [Astro documentation](https://docs.astro.build) to learn more.

### Multilenguage Structure

The site supports Spanish and English via Astro's i18n routing:

- **Spanish (default):** `/` and `/es/`
- **English:** `/en/`

Content structure:
```
src/pages/
├── es/
│   └── index.astro    (Spanish)
└── en/
    └── index.astro    (English)
```

A language switcher is available in the top-right corner.

### Install pnpm

Recommended (Node.js 26+):

```bash
corepack enable
corepack prepare pnpm@latest --activate
pnpm -v
```

Alternative:

```bash
npm install -g pnpm
pnpm -v
```

### Setup

```bash
pnpm install
```

### Development Server

Start the development server on `http://localhost:4321`:

```bash
pnpm run dev
```

### Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```
