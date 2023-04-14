# react-storybook-library

## Installation:

1. `npm ci`


## Usage:

1. `npm run build`: build index.js and index.d.ts file from src folder


## Usage for third-party import:

1. `npm i @vlrm/library`

2. import library

```ts
// TypsScript
import { FC } from 'react';
import { Button } from '@vlrm/library';

const SomeComponent: FC = () => (
    <div>
        <Button>Button Text</Button>
    </div>
);

export default SomeComponent;
```

## Folder Structure

```
┌── config                     # All about configurations like webpack, babel, jest
├── dist                       # Bundled JS and TS declaration file for deployed npm package
├── src                        # All source code
│   ├── components             # React components
│   │   └── Button             # Component directory
│   │       ├── Button.tsx       # Component for npm package
│   │       └── Button.scss      # Component displayed in storybook
│   ├── index.dev.tsx          # Development entry that uses ReactDOM.redner for local development
│   └── index.tsx              # Production entry that exports all components
├── .gitignore                 # Excluded files for ignoring Git version control
├── .eslintrc.js               # ESLint settings
├── index.ts                   # Important entrypoint to use with `npm link`
├── readme.md                  # This file
├── package-lock.json          # Package settings that locked the version of dependencies packages
├── package.json               # Package settings that listed dependencies packages, npm scripts, project name etc.
└── tsconfig.json              # TypeScript settings
```
