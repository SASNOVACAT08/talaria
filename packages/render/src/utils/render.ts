import { RenderOptions } from '../interfaces';
import { createHtmlFile } from './createHtmlFile';
import { generateEmail } from './generateEmail';

const render = async (options: RenderOptions): Promise<string> => {
  const email = await generateEmail(options.template, options.data);
  switch (options.config.output) {
    case 'file':
      if (!options.config.path)
        throw new Error('Path is required when output is file');
      return createHtmlFile(email, options.config.path);
    case 'string':
      return email;
    default:
      return email;
  }
};

export { render };
