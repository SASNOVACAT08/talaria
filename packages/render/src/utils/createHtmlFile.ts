import { writeFileSync } from 'fs';

const createHtmlFile = (html: string, path: string): string => {
  const pathWithExtension = path.endsWith('.html') ? path : `${path}.html`;
  writeFileSync(pathWithExtension, html, 'utf8');
  return pathWithExtension;
};

export { createHtmlFile };
