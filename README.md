# Design System | Pamela UI Design System

### :bulb: Description

This entire monorepo project was developed as part of a study project by Rocketseat. It contains the entire ecosystem of a Design System.

You can find more details about the others repositories here:

| Package | Link                                                               |
| --------- | ------------------------------------------------------------------------- |
| Docs    | [More details](https://github.com/pamelasantoss/design-system/tree/main/packages/docs)          |
| ESLint config  | [More details](https://github.com/pamelasantoss/design-system/tree/main/packages/eslint-config)                                 |
| React | [More details](https://github.com/pamelasantoss/design-system/tree/main/packages/react)                               |
| Tokens | [More details](https://github.com/pamelasantoss/design-system/tree/main/packages/tokens)                    |
| TS Config       | [More details](https://github.com/pamelasantoss/design-system/tree/main/packages/ts-config)                           |


### :rocket: Technologies

- Workflow made easy with [Turbo Repo](https://turborepo.com/docs)
- Management versioning and changelog with [Changesets](https://github.com/changesets/changesets)

### :heavy_check_mark: How to edit and contribute

- After cloning and installing dependencies, run `npm run dev`.
- Read the instructions of each repository and make the necessaries updates.
- After changing something, let's commit, but first, follow this instructions to update the changelog of the updated repository:
    - Run the following code to determine the version of the package:
        ```
        npm run changeset
        ```
    - Then run the following code to create the versions and update the changelog file:
        ```
        npm run version-packages
        ```
    - After that, you can commit!