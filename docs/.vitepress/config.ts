import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/pinia-plugin-persistedstate/',
  title: 'pinia-plugin-persistedstate',
  description: '🍍 Configurable persistence and rehydration of Pinia stores.',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      dark: 'vitesse-dark',
      light: 'vitesse-light'
    }
  },
  themeConfig: {
    logo: '/logo.png',
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2021-${new Date().getFullYear()} Sacha Bouillez & contributors`
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/prazdevs/pinia-plugin-persistedstate'
      }
    ],
    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '/guide/' }
    ],
    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'What is this?',
              link: '/guide/what'
            },
            {
              text: 'Getting Started',
              link: '/guide/'
            },
          ]
        },
      ]
    }
  },
})
