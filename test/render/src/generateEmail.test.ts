import { describe, it, expect } from 'vitest'
import { generateEmail } from '@talaria/render'

describe('generateEmail', () => {
  it('should render', async () => {
    const rendered = await generateEmail({}, '<div>Hello World</div>')
    expect(rendered).toBe('<div>Hello World</div>')
  })

  it('should render with <p> and message', async () => {
    const rendered = await generateEmail({
      msg: 'Hello World',
    }, '<p>{{ msg }}</p>')
    expect(rendered).toBe('<p>Hello World</p>')
  })
})