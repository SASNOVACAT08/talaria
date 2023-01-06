import { createSSRApp } from "vue"
import { renderToString } from "vue/server-renderer"
import { RenderData } from "../interfaces"

const generateEmail = async (data: RenderData, template: string): Promise<string> => {
  const app = createSSRApp({
    data: () => data,
    template
  })
  return renderToString(app)
}

export {
  generateEmail,
}