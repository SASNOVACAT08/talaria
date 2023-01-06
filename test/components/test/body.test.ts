import { describe, it, expect } from 'vitest'
import { Body } from '@talaria/components'
import { mount } from "@vue/test-utils";

describe('Body.vue', () => {
  it('should render by default', () => {
    const wrapper = mount(Body);
    const html = wrapper.html().trim().replace(/\n/g, "");
    expect(html).toBe('<body></body>');
  })

  it('should render with <p>', () => {
    const wrapper = mount(Body, {
      slots: {
        default: '<p>Hello World</p>',
      },
    })
    expect(wrapper.find('p').text()).toContain('Hello World')
  })
})