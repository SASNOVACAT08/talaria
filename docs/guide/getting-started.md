# Getting Started

This section will help you build a basic email.

::: warning
Talaria is currently in `alpha` status.
:::

## Step. 1: Download @tlra/cli

```sh
$ npm i -g @tlra/cli
```

## Step. 2: Init a project

```sh
$ talaria init my-project
```

Don't forget to download dependecies.

With NPM:

```sh
$ npm i
```

With Yarn:

```sh
$ yarn i
```

With PNPM:


```sh
$ pnpm i
```

## Look at the project structure

```
.
├─ src
│  ├─ email
│  │  └─  Mail.vue
│  └─ index.ts
├─ types
│  └─ vue-shim.d.ts
├─ package.json
├─ talaria.config.json
└─ tsconfig.json
```

- The src folder contains the source code of the project [See more](./usage)
- The types folder contains the type definitions of the project. (`vue-shim.d.ts` is used to import .vue files)
- The package.json file contains the dependencies of the project.
- The talaria.config.json file contains the configuration to send email easily. [See more](./send)
- The tsconfig.json file contains the configuration of the TypeScript compiler.
