This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
$ yarn install
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Folder Structure

Components files are stored within the `src` root directory in folders corresponding to component name.

Component styling are done via css modules with file name similar to component file name in same directory as the component its being used.

Unit tests for each file should also be within the same folder as the component its testing

example:

```
/Header/
	- Header.tsx
	- Header.module.scss
	- Header.test.tsx

/Footer/
	- Footer.tsx
	- Footer.module.scss
	- Header.test.tsx
```

## Code Guidelines

- Generic types, utils and icons meant to be used app-wide should be stored in the `src` directory withing a folder with a corresponding entity name

```
/src/
 - /types/
 - /utils/
 - /icons/
```

- Interfaces are the preferred pattern for typing component props

```
interface Prop {
	id: string
	name: string
}
```
