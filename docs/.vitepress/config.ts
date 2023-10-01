import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Talaria',
  description: 'Write emails with Vue.js',
  cleanUrls: 'without-subfolders',
  base: '/talaria/',
  themeConfig: {
    siteTitle: 'Talaria',
    nav: [{ text: 'Guide', link: '/guide/getting-started' }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SASNOVACAT08/talaria' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        collapsible: true,
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Usage', link: '/guide/usage' },
          { text: 'Build', link: '/guide/build' },
          { text: 'Send', link: '/guide/send' },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Ruben Barros',
    },
  },
});
