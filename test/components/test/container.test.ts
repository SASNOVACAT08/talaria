import { describe, it, expect } from 'vitest';
import { Container } from '@tlra/components';
import { mount } from '@vue/test-utils';

describe('Container.vue', () => {
  it('should render by default', () => {
    const wrapper = mount(Container);
    const html = wrapper.html().trim().replace(/\n/g, '');
    expect(html).toMatchSnapshot();
  });

  it('should render with <p>', () => {
    const wrapper = mount(Container, {
      slots: {
        default: '<p>Hello World</p>',
      },
    });
    expect(wrapper.find('p').text()).toContain('Hello World');
  });

  it('should render with custom style', () => {
    const wrapper = mount(Container, {
      props: {
        style: {
          color: 'red',
        },
      },
    });
    const html = wrapper.html().trim().replace(/\n/g, '');
    expect(html).toMatchSnapshot();
  });
});
