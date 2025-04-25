# Design System | React

### :bulb: Description

This package is part of the _Pamela UI Design System_ developed as part of a study project. It contains all the components used in the [Design System](https://pamelasantoss.github.io/design-system/?path=/docs/home--documentation).

### :rocket: Technologies

- Developed with [React](https://react.dev/)
- Styled with [Stitches](https://stitches.dev/)
- Some primitive components built with [Radix](https://www.radix-ui.com/primitives/docs/overview/introduction)

### :hammer: Features

- [x] Includes core components that every application should have
- [x] Adds the `Toast` component
- [x] Adds the `Tooltip` component
- [ ] Add more variants to the `TextInput` component to support different input types, not just plain text
- [ ] Add the `Switch` button component and a few others

### :heavy_check_mark: How to edit and contribute

- After cloning and installing dependencies, run `npm run dev` from the root directory or inside the monorepo.
- Create a new component inside the `components` folder and export it in the `index` file. Don’t forget to use _TypeScript_.
- Before committing, run `npm run lint` to fix formatting and ensure code consistency.

---

### :heavy_check_mark: What will you find in this package?

| Component | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| Avatar    | Displays a user image via the `src` attribute or a fallback icon          |
| Checkbox  | A custom checkbox with smooth transitions                                 |
| MultiStep | A progress bar with customizable step count                               |
| TextInput | A styled input field for text (more types coming soon)                    |
| Toast     | A notification-style message that appears on the right side of the screen |
| Tooltip   | Shows a description when hovering over an element                         |
| Box       | A simple box with customizable background color                           |
| Button    | Multiple button variants for different use cases                          |
| Heading   | Different heading levels in a consistent design                           |
| Text      | Text elements styled with the Design System’s fonts and sizes             |
| TextArea  | A styled textarea with two available variants                             |
