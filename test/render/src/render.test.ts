import { describe, it, expect } from 'vitest'
import { render, RenderOutput } from '@talaria/render'
import { readFileSync, unlinkSync } from 'fs'
import { defineComponent, inject } from 'vue'

describe('render', () => {
  it('should render a string', async () => {
    const component = defineComponent({
      template: '<div>Hello World</div>',
    })
    const rendered = await render({
      data: {},
      template: component,
      config: {
        output: RenderOutput.STRING,
      }
    })
    expect(rendered).toBe('<div>Hello World</div>')
  })

  it('should render a string with <p> and message', async () => {
    const component = defineComponent({
      setup: () => {
        const msg = inject('msg')
        return { msg }
      },
      template: '<p>{{ msg }}</p>',
    })
    const rendered = await render({
      data: {
        msg: 'Hello World',
      },
      template: component,
      config: {
        output: RenderOutput.STRING,
      }
    })
    expect(rendered).toBe('<p>Hello World</p>')
  })

  it('should render a file', async () => {
    const component = defineComponent({
      template: '<div>Hello World</div>',
    })
    const path = await render({
      data: {},
      template: component,
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
    const component = defineComponent({
      setup: () => {
        const msg = inject('msg')
        return { msg }
      },
      template: '<p>{{ msg }}</p>',
    })
    const path = await render({
      data: {
        msg: 'Hello World',
      },
      template: component,
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