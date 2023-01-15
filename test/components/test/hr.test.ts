import { describe, it, expect } from 'vitest';
import { Hr } from '@tlra/components';
import { mount } from '@vue/test-utils';

describe('Hr.vue', () => {
  it('should render by default', () => {
    const wrapper = mount(Hr);
    const html = wrapper.html().trim().replace(/\n/g, '');
    expect(html).toMatchSnapshot();
  });

  it('should render with custom style', () => {
    const wrapper = mount(Hr, {
      props: {
        style: {
          color: 'red',
        },
      },
    });
    const html = wrapper.html().trim().replace(/\n/g, '');
    expect(html).toMatchSnapshot();
  });

  it('should render with custom class', () => {
    const wrapper = mount(Hr, {
      props: {
        class: 'custom-class',
      },
    });
    const html = wrapper.html().trim().replace(/\n/g, '');
    expect(html).toMatchSnapshot();
  });
});
