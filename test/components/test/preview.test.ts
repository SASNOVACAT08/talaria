import { describe, it, expect } from 'vitest';
import { Preview } from '@talaria/components';
import { mount } from '@vue/test-utils';

describe('Preview.vue', () => {
  it('should render with text', () => {
    const wrapper = mount(Preview, {
      slots: {
        default: 'Hello World',
      },
    });
    const html = wrapper.html().trim().replace(/\n/g, '');
    expect(html).toMatchSnapshot();
  });
});
