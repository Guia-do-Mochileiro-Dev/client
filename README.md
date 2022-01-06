# Guia do Mochileiro Dev

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
- `generate`: create folder with files for a component

## Folder Architecture

- <i>__ tests __</i>

  > _Folder responsible for the storage of project tests_

- _.github_
  > _Folder responsible for the storage of dependabot settings_
- _.husky_
  > _Folder responsible for the storage of husky settings_
- _.jest_
  > _Folder responsible for the storage of tests settings_
- _.storybook_
  > _Folder responsible for the storage of storybook settings_
- _generators_
  > _Folder responsible for the storage of plop file templates_
- _public_
  > _Folder responsible for the storage of public files_
- _src_
  - _assets_

    > _Folder responsible for the storage of images, svg's and fonts_

  - _components_
    > _Folder responsible for the storage of components_
  - _contexts_
    > _Folder responsible for the storage of contexts_
  - _hooks_
    > _Folder responsible for the storage of hooks_
  - _pages_
    > _Folder responsible for the storage of pages_
  - _services_
    > _Folder responsible for the storage of services integration and requests_
  - _styles_
    > _Folder responsible for the storage of global styles_
  - _themes_
    > _Folder responsible for the storage of theme settings_
  - _utils_
    > _Folder responsible for the storage of utility functions_
- _stories_
  > _Folder responsible for the storage of storie in storybook_

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
