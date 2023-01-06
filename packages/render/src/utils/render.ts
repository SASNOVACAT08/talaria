import { RenderOptions } from '../interfaces'
import { createHtmlFile } from './createHtmlFile'
import { generateEmail } from './generateEmail'

const render = async (options: RenderOptions): Promise<string> => {
  const email = await generateEmail(options.data, options.template)
  switch (options.config.output) {
    case 'file':
      if (!options.config.path) throw new Error('Path is required when output is file')
      const pathWithExtension = createHtmlFile(email, options.config.path)
      return pathWithExtension
    case 'string':
      return email
    default: 
      return email
  }
}

export {
  render,
}