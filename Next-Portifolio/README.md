This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.




## Correção para abir raw-loader

```
pnpm install -D raw-loader
```
next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (
    config, options
  ) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.node/,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = nextConfig;
```

https://github.com/wojtekmaj/react-pdf/issues/1508