# Build

This section will help you to understand how works email generation.

## Step. 1: Choose how to build

After writing your email, you need to build it.

In your project, you have an index.ts file. This file is the entry point of your project. You can import your email and build it.

```ts
import { render, RenderOutput } from '@tlra/render';
import Mail from './email/Mail.vue';

render({
  data: {},
  template: Mail,
  config: {
    output: RenderOutput.FILE,
    path: './dist/index',
  },
});
```

In the render function, you can pass a config object. This object contains the configuration to build your email.

- `output` is the output type. You can choose between `RenderOutput.FILE` and `RenderOutput.STRING`.
- path is the path where the email will be generated. If you choose `RenderOutput.FILE`, the email will be generated in the path you specified. If you choose `RenderOutput.STRING`, the function will return a string with the email.

## Step. 2: Build your email

To build your email, you need to run the following command:

```sh
$ npm run build
```

This command will build your email and generate a file in the path you specified.

## If you want to generate another email

If you want to generate another email, you need to import it in the index.ts file and add another render function.

```ts
import Mail from './email/AnotherMail.vue';

render({
  data: {},
  template: AnotherMail,
  config: {
    output: RenderOutput.FILE,
    path: './dist/another',
  },
});
```