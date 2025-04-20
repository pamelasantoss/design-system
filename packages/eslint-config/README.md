# Design System | ESLint Config

### :bulb: Description

This package is part of the _Pamela UI Design System_ developed as part of a study project. It contains the main configuration for code formatting using `ESLint v8` and the third-party plugin by Rocketseat, `@rocketseat/eslint-config`.

### :rocket: Technologies

- Built with [ESLint](https://eslint.org/)

### :hammer: Features

- [x] Create an ESLint configuration
- [ ] Update ESLint to the latest version
- [ ] Define a custom code formatting pattern
- [ ] Remove the Rocketseat dependency

### :heavy_check_mark: How to use

- Install this package as a development dependency:

```
npm i @pamela-ui/eslint-config -D
```

- Add a script to your `package.json` file:

```
"scripts": {
  // other scripts...
  "lint": "eslint src/**/*.ts* --fix"
},
```

- Run the linter using:

```
npm run lint
```
