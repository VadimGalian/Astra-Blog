## Запуск проекта

```
npm install - installing dependencies
npm run start:dev or npm run start:dev:vite - starting the server + frontend project in dev mode
```

---

## Scripts

-   `npm run start` - Launch the frontend project on webpack dev server
-   `npm run start:vite` - Launch the frontend project on vite
-   `npm run start:dev` - Launch the frontend project on webpack dev server + backend
-   `npm run start:dev:vite` - Launch the frontend project on vite + backend
-   `npm run start:dev:server` - Start the backend server
-   `npm run build:prod` - Build in production mode
-   `npm run build:dev` - Build in development mode (not minimized)
-   `npm run lint:ts` - Lint ts files
-   `npm run lint:ts:fix` - Fix ts files with the linter
-   `npm run lint:scss` - Lint scss files with style linter
-   `npm run lint:scss:fix` - Fix scss files with style linter
-   `npm run test:unit` - Run unit tests with jest
-   `npm run test:ui` - Run screenshot tests with loki
-   `npm run test:ui:ok` - Confirm new screenshots
-   `npm run test:ui:ci` - Run screenshot tests in CI
-   `npm run test:ui:report` - Generate a full report for screenshot tests
-   `npm run test:ui:json` - Generate json report for screenshot tests
-   `npm run test:ui:html` - Generate HTML report for screenshot tests
-   `npm run storybook` - Run Storybook
-   `npm run storybook:build` - Build Storybook
-   `npm run prepare` - Pre-commit hooks
-   `npm run generate:slice` - Script to generate FSD slices.

---

## Project architecture.

The project is written in accordance with the Feature Sliced Design methodology

Link to the documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Translation work

In the project, the i18next library is used for working with translations.
Translation files are stored in public/locales.

For comfortable work, we recommend installing a plugin for WebStorm/VSCode.

Documentation i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Tests

In the project, there are four types of tests:

1. Regular unit tests using Jest - `npm run test:unit`
2. Component tests using React Testing Library - `npm run test:unit`
3. Snapshot testing with Loki - `npm run test:ui`
4. End-to-end testing with Cypress - `npm run test:e2e`

More about tests - [tests documentation](/docs/tests.md)

---

## Linting

In the project, ESLint is used to check TypeScript code, and Stylelint is used to check style files.

Additionally, for strict control of main architectural principles,
a custom ESLint plugin, `eslint-plugin-ulbi-tv-plugin`, is used, which contains three rules:

1. `path-checker` - prohibits the use of absolute imports within the same module.
2. `layer-imports` - checks the correctness of layer usage from the perspective of FSD (`Feature Sliced Design`) principles
   (for example, widgets cannot be used in features and entities).
3. `public-api-imports` - allows imports from other modules only from the public API. It has an auto-fix feature.

##### To run the linters

-   `npm run lint:ts` - Linting ts files
-   `npm run lint:ts:fix` - Fixing ts files with the linters
-   `npm run lint:scss` - Linting scss files
-   `npm run lint:scss:fix` - Fixing scss files with the style linter

---

## Storybook

In the project, story cases are described for each component. Server requests are mocked using storybook-addon-mock.

The file containing the story cases is created alongside the component with the extension .stories.tsx.

You can run Storybook using the command:

-   `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

---

## Project configuration

For development, the project contains 2 configurations:

1. Webpack - ./config/build
2. vite - vite.config.ts

Both bundlers are adapted to the core features of the application.

All configuration is stored in /config

-   `/config/babel` - babel configuration
-   `/config/build`- webpack configuration
-   `/config/jest` - est environment configuration
-   `/config/storybook` - storybook configuration

In the `scripts` folder, you can find various scripts for refactoring, simplifying code writing, generating reports, and more.

---

## CI pipeline и pre commit hooks

"The GitHub Actions configuration is located in /.github/workflows.
In the CI (Continuous Integration) process, all types of tests are run, the project is built, Storybook and linters.
In pre-commit hooks, we use linters to check the project, and the configuration is located in /.husky."

---

### Data handling

Data interaction is done using Redux Toolkit.
Whenever possible, reusable entities should be normalized using EntityAdapter

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous reducer loading (to avoid bundling them into the main bundle), we use
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

### Working with feature-flags

Using feature flags is only allowed through the toggleFeatures helper.

You pass an object with options to it:

{
name: The name of the feature flag
on: A function that will run after the feature is turned on
off: A function that will run after the feature is turned off
}

To automatically remove a feature, use the remove-feature.ts script.

Which accepts 2 arguments:

1. The name of the feature flag to be removed
2. The state (on/off)

---

## Entities

-   [Article](/src/entities/Article)
-   [Comment](/src/entities/Comment)
-   [Counter](/src/entities/Counter)
-   [Country](/src/entities/Country)
-   [Currency](/src/entities/Currency)
-   [Notification](/src/entities/Notification)
-   [Profile](/src/entities/Profile)
-   [Rating](/src/entities/Rating)
-   [User](/src/entities/User)

## Features

-   [addCommentForm](/src/features/addCommentForm)
-   [articleEditForm](/src/features/articleEditForm)
-   [articleRating](/src/features/articleRating)
-   [articleRecommendationsList](/src/features/articleRecommendationsList)
-   [AuthByUsername](/src/features/AuthByUsername)
-   [avatarDropdown](/src/features/avatarDropdown)
-   [editableProfileCard](/src/features/editableProfileCard)
-   [LangSwitcher](/src/features/LangSwitcher)
-   [notificationButton](/src/features/notificationButton)
-   [profileRating](/src/features/profileRating)
-   [ThemeSwitcher](/src/features/ThemeSwitcher)
-   [UI](/src/features/UI)
