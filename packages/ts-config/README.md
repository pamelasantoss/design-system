# Design System | TS Config

### :bulb: Description

This package is part of the _Pamela UI Design System_ developed as part of a study project. It contains the main configuration for **TypeScript** projects. So, if you're using React and TypeScript in your project, you don't need to configure the `tsconfig.json` file from scratch — just add this plugin!

### :rocket: Technologies

- Built with [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content)

### :heavy_check_mark: How to use

- Install this package as a development dependency:

```
npm i @pamela-ui/ts-config -D
```

- Add an `extends` field to your `tsconfig.json` file:

```
{
  "extends": "@pamela-ui/ts-config/react.json",
  "include": ["src"]
}
```
