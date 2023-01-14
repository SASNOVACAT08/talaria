import { render, RenderOutput } from '@talaria/render';
import Mail from './email/Mail.vue';

render({
  template: Mail,
  config: {
    output: RenderOutput.FILE,
    path: './dist/index',
  },
});
