import { describe, it, expect } from 'vitest';
import { defineComponent, inject } from 'vue';
import { generateEmail } from '@tlra/render';

describe('generateEmail', () => {
  it('should render', async () => {
    const component = defineComponent({
      template: '<div>Hello World</div>',
    });
    console.log(component);
    const rendered = await generateEmail({}, component);
    expect(rendered).toBe('<div>Hello World</div>');
  });

  it('should render with <p> and message', async () => {
    const component = defineComponent({
      setup: () => {
        const msg = inject('msg');
        return { msg };
      },
      template: '<div>{{ msg }}</div>',
    });
    const rendered = await generateEmail(
      {
        msg: 'Hello World',
      },
      component
    );
    expect(rendered).toBe('<div>Hello World</div>');
  });
});
