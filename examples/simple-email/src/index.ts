import { render, RenderOutput } from '@talaria/render';
import Mail from './Mail.vue';

const main = async () => {
  const i = await render({
    data: {
      lang: 'es',
    },
    template: Mail,
    config: {
      output: RenderOutput.FILE,
      path: './dist/index',
    },
  });
  console.log(i);
};

main();
