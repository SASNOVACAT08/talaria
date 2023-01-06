import { render } from './render.js'

async function main() {
  const data = {
    name: 'World'
  }
  const template = `<div>Hello {{ name }}</div>`
  const result = await render(data, template)
  console.log(result)
}

main()