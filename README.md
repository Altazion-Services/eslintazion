<h1>
    <div>
        <img width="300" src="./assets/logo.svg">
    </div>
</h1>
<div justify="center">
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/Typescript-blue.svg"></a>
</div>
<p>
    <em>lintazion</em>
</p>
<p>
    ESLint/Prettier configuration for Altazion-Services JS/TS projects.
</p>

## Installation

#### Install lintazion and dependencies
```
npm -D i github:Altazion-Services/eslintazion eslint typescript-eslint eslint-plugin-import @eslint/js @nuxt/eslint-config prettier
```

## Usage (Nuxt 3)
#### Eslint
Create a `eslint.config.mjs`, import the rules file and append the rule object to your configuration:
```js
import { createConfigForNuxt } from '@nuxt/eslint-config';
import { jsRules, tsRules, importRules, vueRules } from 'lintazion/modules/eslint.mjs';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import importsPlugin from 'eslint-plugin-import';

export default createConfigForNuxt([
    js.configs.recommended,
    ...ts.configs.recommended,
    {
        files: ['./**/*.ts', './**/*.tsx', './**/*.js', './**/*.jsx', './**/*.vue'],
        plugins: {
            import: importsPlugin,
        },
        rules: importRules,
    },
])
    .override('nuxt/rules', {
        rules: jsRules,
    })
    .override('nuxt/vue/rules', {
        rules: vueRules,
    })
    .override('nuxt/typescript/rules', {
        rules: tsRules,
    });
```

#### Prettier
Create a `prettier.config.mjs` file in the root of your project and add the following code:
```js
import prettierConfig from 'lintazion/modules/prettier.rules.mjs';
export default prettierConfig;
```
