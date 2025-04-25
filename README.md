<h1>
    <div>
        <img width="300" src="./assets/logo.svg">
    </div>
</h1>
<div justify="center">
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/Typescript-blue.svg"></a>
</div>
<p>
    <em>@altazion-services/lintazion</em>
</p>
<p>
    ESLint/Prettier configuration for Altazion-Services JS/TS projects.
</p>

## Installation

#### Install lintazion
```
npm i -D github:altazion-services/lintazion
```
#### Install peer dependencies
```
npm i -D eslint prettier typescript-eslint @eslint/js eslint-plugin-import eslint-config-prettier
```

## Usage
#### Eslint
Create a `eslint.config.mjs`, import the rules file and append the rule object to your configuration:
```js
import rules from '@altazion-services/lintazion/eslint.rules.mjs';
```

#### Prettier
Create a `prettier.config.mjs` file in the root of your project and add the following code:
```js
import prettierConfig from '@altazion-services/lintazion/prettier.rules.mjs';
export default prettierConfig;
```
