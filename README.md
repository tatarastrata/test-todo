# Test Todo List

- TypeScript (`./tsconfig.json`);
- Webpack - `./webpack/webpack.config.js` is set up for environments `dev` and `prod` (`prod` is for deployment);
- ESlint and Prettier (`./eslintrc.js`, `./prettierrc.js`) is set with [wemake-frontend-styleguide](https://github.com/wemake-services/wemake-frontend-styleguide) TypeScript and JavaScript configurations;
- Husky for prevention linting and formatting mistakes to be committed;
- Babel loader package for transpiling javascript files;
- React-refresh plugin to avoid browser reload on changes;
- Plop for creating project templates (`./plopfile.js`, `./templates/*ts.hbs`);
- `dependabot.yml` file for tracking project dependencies;
- [ChakraUi style library](https://chakra-ui.com/);
- Formik for inputs and their validation;
- Redux setup;
- simple error boundary;

 available scripts:

```
"scripts": {
    "start": "webpack serve --config webpack/webpack.config.js --env env=dev",
    "lint": "eslint --fix \"./src/**/*.{js,jsx,ts,tsx,json}\"",
    "format": "prettier --write \"./src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",
    "plop": "plop",
    "build": "webpack --config ./webpack/webpack.common.js --mode production"
  },
```