# AzmiOstepati Therapy dan Training Center

Production-ready Next.js 13+ App Router skeleton for a bilingual service-business landing site.

## Structure

```text
app/                 Routes, layouts, metadata, API handlers
components/          Semantic UI sections grouped by responsibility
config/              Fonts, business constants, service catalog
lib/                 i18n and metadata helpers
public/              Static assets extracted from the provided PDF
styles/              Global CSS layers and font variable definitions
```

## Routes

- `/`, `/about`, `/services`, `/contact`
- `/id`, `/id/about`, `/id/services`, `/id/contact`
- `/en`, `/en/about`, `/en/services`, `/en/contact`

## Local Development

```bash
yarn install
yarn dev
yarn typecheck
yarn lint
yarn build
yarn start
```

## Railway

Railway reads `railway.json`. The project uses `output: "standalone"` and `yarn start`, with `postbuild` copying `public` and `.next/static` into the standalone output.

Set these variables in Railway:

```bash
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_BUSINESS_PHONE=
NEXT_PUBLIC_BUSINESS_EMAIL=
NEXT_PUBLIC_BUSINESS_ADDRESS=
```
