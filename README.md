# Angular starter

Starter project for stand-alone Angular applications.

<br>

## Table of Contents

- [Angular](#angular)
- [NPM](#npm)
- [Unit Testing](#unit-testing)
- [Linting & Formatting](#linting-&-formatting)
- [TypeScript path aliases](#typescript-path-aliases)
- [VSCode](#vscode)

<br>

# Angular

The project has been created with Angular 10 in strict mode and tuned to make it stricter. The module target is `esnext` which means that features that are on the standard track but are not in an official ES spec yet are available for development and polyfilled automatically.

<br>

# NPM

Some scripts are available just as a starting point. As a bonus, `source-map-explorer` is available for inspecting the bundle size.

The dependencies get installed with the exact version. This will avoid any problems with package versions and you will know exactly what you want to be installed and what gets actually installed.

<br>

# Unit Testing

**Jest** and **Spectator** have been configured for unit testing. Also some additional libraries like `ng-mocks` and `mockdate` are also installed. The first one works pretty well with Spectator and the second excels at mocking Date objects.

<br>

# Linting & Formatting

All the files are being linted, fixed and formatted with Prettier in a precommit hook (thanks to **Husky** and **Lintstaged**), also available through npm scripts and integrated with VSCode, so when a file is saved, it is linted, fixed and formatted automatically. No more manual formatting of the code!

## TypeScript files:

Linted with **Eslint**. Plugins being used:

- _@typescript-eslint_. ESLint rules support for TypeScript.
- _@angular-eslint_. Specific rules for Angular.
- _import_. Sorts import statements in different groups.
- _unicorn_. Set of best practices rules.
- _compat_. Checks compatibility of ECMAScript features with the supported browsers.
- _prettier_. Support for Prettier formatting.
- _jest_. Support for Jest files.

## SCSS files:

Linted with **Stylelint**. Plugins being used:

- **stylelint-config-standard**. Set of best practices rules.
- **stylelint-config-prettier**. Support for Prettier formatting.
- **stylelint-order**. Sorts rules.
- **stylelint-scss**. Specific rules for SCSS.
- **stylelint-no-unsupported-browser-features**. Checks compatibility of CSS features with the supported browsers.

## HTML files:

Formatted with **JS Beautify**.

<br>

# TypeScript path aliases

In order to work properly with the _eslint-plugin-import_ and to avoid naming collisions, path aliases cannot be formed like organization-scoped packages, eg. `@feature`, otherwise the plugin will sort in the same group custom path aliases and third-party modules.

Path aliases in this case are start with `@/`, eg. `@/feature`. Directories inside `src/app` are directly mapped into a path alias with the same name. For instance, if we have this directory structure:

```
src
 └ app
   ├ feat1
   │   ...
   └ feat2
       ...
```

There will be these aliases created automatically:

```
@/feat1
@/feat2
```

This will be the result after the plugin _eslint-plugin-import_ do its job:

```
import {
  createComponentFactory,
  mockProvider,
  Spectator
} from '@ngneat/spectator/jest';

import { ApiService } from '@/feat1/services/api.service';
import { DateService } from '@/feat2/services/date.service';

import { FirstComponent } from './first.component';
```

Marvelous! In a quick look we can distinguish between third-party modules, feature modules (path-aliased) and imports from the current feature module.

<br>

# VSCode

VSCode has been integrated with the linting and formatting project settings so each time a file is saved allt he magic will happen.

There also extensions that needs to be installed. Just open the project and you will be prompted with a message to install them. They are listed in the `.vscode/extensions.json` file. Some of them are required but others are highly recommended.
