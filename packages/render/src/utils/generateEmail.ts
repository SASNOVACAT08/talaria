import { Component, createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { RenderData } from '../interfaces';

const generateEmail = async (
  template: Component,
  data?: RenderData
): Promise<string> => {
  const app = createSSRApp(template);
  for (const key in data) {
    app.provide(key, data[key]);
  }
  return renderToString(app);
};

export { generateEmail };
