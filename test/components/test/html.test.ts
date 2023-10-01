import { describe, it, expect } from 'vitest';
import { Html } from '@tlra/components';
import { mount } from '@vue/test-utils';

describe('Html.vue', () => {
  it('should render by default', () => {
    const wrapper = mount(Html);
    const html = wrapper.html().trim().replace(/\n/g, '');
    expect(html).toBe('<html lang="en"></html>');
  });

  it('should render with lang fr', () => {
    const wrapper = mount(Html, {
      props: {
        lang: 'fr',
      },
    });
    const html = wrapper.html().trim().replace(/\n/g, '');
    expect(html).toBe('<html lang="fr"></html>');
  });

  it('should render with <p>', () => {
    const wrapper = mount(Html, {
      slots: {
        default: '<p>Hello World</p>',
      },
    });
    expect(wrapper.find('p').text()).toContain('Hello World');
  });
});
