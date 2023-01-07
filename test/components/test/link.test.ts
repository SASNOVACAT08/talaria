import { describe, it, expect } from 'vitest';
import { Link } from '@talaria/components';
import { mount } from '@vue/test-utils';

describe('Link.vue', () => {
  it('should render by default', () => {
    const wrapper = mount(Link);
    const html = wrapper.html().trim().replace(/\n/g, '');
    expect(html).toBe(
      '<a href="#" target="_blank" style="color: inherit; text-decoration: none;"></a>'
    );
  });

  it('should render with href', () => {
    const wrapper = mount(Link, {
      props: {
        href: 'https://talaria.email',
      },
    });
    const html = wrapper.html().trim().replace(/\n/g, '');
    expect(html).toBe(
      '<a href="https://talaria.email" target="_blank" style="color: inherit; text-decoration: none;"></a>'
    );
  });

  it('should render with custom style', () => {
    const wrapper = mount(Link, {
      props: {
        style: {
          color: 'red',
        },
      },
    });
    const html = wrapper.html().trim().replace(/\n/g, '');
    expect(html).toBe(
      '<a href="#" target="_blank" style="color: red; text-decoration: none;"></a>'
    );
  });

  it('should render with text', () => {
    const wrapper = mount(Link, {
      slots: {
        default: 'Hello World',
      },
    });
    expect(wrapper.text()).toContain('Hello World');
  });
});
