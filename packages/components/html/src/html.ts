import * as Vue from 'vue';
import { ExtractFromProps } from '../../../utils/utils';

export const props = {
  lang: {
    type: String,
    default: 'en',
  },
};

export type IComponentProps = ExtractFromProps<typeof props>;

export default Vue.defineComponent({
  name: 'Html',
  props,
  template: `
    <html :lang="lang">
      <slot />
    </html>
  `,

  setup(props: IComponentProps) {
    return {
      lang: props.lang,
    };
  }
});
