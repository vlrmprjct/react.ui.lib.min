# React Storybook UI Component Library

## Installation:

1. `npm ci`

## Testing locally installing package:

1. `npm run build && npm pack`: build index.js and index.d.ts file from src folder
1. `npm install ../path/to/packagename-x.x.x.tgz`

## Usage:

1. Install via `npm i @namespace/name`

```ts
import { FC } from 'react';
import { Button } from '@namespace/name';

const SomeComponent: FC = () => (
    <div>
        <Button label="Button Text" />
    </div>
);

export default SomeComponent;
```
2. Somewhere on top in your main (s)css file
```scss
@import '~@namespace/name/dist/index.css';
```

## Directory Structure

```
┌── config                          # All about configurations like webpack, babel, jest
├── dist                            # Bundled JS and TS declaration file for deployed npm package
├── src                             # All the source code
│   ├── components                  # React components
│   │   └── Button                  # Component directory
│   │       ├── Button.tsx              # Component for npm package
│   │       ├── Button.scss             # Component style
│   │       ├── Button.storie.mdx       # Component story for storybook
│   │       └── Button.test.tsx         # Component test using jest
│   ├── scss                        # Common scss directory
│   └── index.ts                    # Production entry that exports all components
├── .gitignore                      # Excluded files for ignoring Git version control
├── index.ts                        # Important entrypoint to use with `npm link`
├── readme.md                       # This file
├── package-lock.json               # Package settings that locked the version of dependencies packages
├── package.json                    # Package settings that listed dependencies packages, npm scripts, project name etc.
└── tsconfig.json                   # TypeScript settings
```
