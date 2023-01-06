import { describe, it, expect } from 'vitest'
import { render, RenderOutput } from '@talaria/render'
import { readFileSync, unlinkSync } from 'fs'

describe('render', () => {
  it('should render a string', async () => {
    const rendered = await render({
      data: {},
      template: '<div>Hello World</div>',
      config: {
        output: RenderOutput.STRING,
      }
    })
    expect(rendered).toBe('<div>Hello World</div>')
  })

  it('should render a string with <p> and message', async () => {
    const rendered = await render({
      data: {
        msg: 'Hello World',
      },
      template: '<p>{{ msg }}</p>',
      config: {
        output: RenderOutput.STRING,
      }
    })
    expect(rendered).toBe('<p>Hello World</p>')
  })

  it('should render a file', async () => {
    const path = await render({
      data: {},
      template: '<div>Hello World</div>',
      config: {
        output: RenderOutput.FILE,
        path: 'render-test',
      }
    })
    const read = readFileSync(path)
    expect(read.toString()).toBe('<div>Hello World</div>')
    unlinkSync(path)
  })

  it('should render a file with <p> and message', async () => {
    const path = await render({
      data: {
        msg: 'Hello World',
      },
      template: '<p>{{ msg }}</p>',
      config: {
        output: RenderOutput.FILE,
        path: 'render-p-test',
      }
    })
    const read = readFileSync(path)
    expect(read.toString()).toBe('<p>Hello World</p>')
    unlinkSync(path)
  })
})