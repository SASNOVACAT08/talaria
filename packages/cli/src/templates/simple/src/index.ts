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
