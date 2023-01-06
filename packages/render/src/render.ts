import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

const render = async (data, template) => {
  const app = createSSRApp({
    data: () => data,
    template
  })
  return renderToString(app)
} 

export {
  render
}