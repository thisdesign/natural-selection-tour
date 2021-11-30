import { getStoriesPaths } from 'slice-machine-ui/helpers/storybook'
import smConfig from './sm.json'

if (!smConfig.apiEndpoint) {
  console.warn(
    "Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)",
  )
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'naturalselectiontour',
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        property: 'og:url',
        content: 'https://naturalselectiontour.com',
      },
      {
        property: 'og:title',
        content: 'naturalselectiontour',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:description',
        content: '',
      },
      {
        property: 'og:image',
        content: 'https://naturalselectiontour.com/share.jpg',
      },
      {
        property: 'og:height',
        content: '630',
      },
      {
        property: 'og:width',
        content: '1200',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'naturalselectiontour',
      },
      {
        name: 'twitter:description',
        content: '',
      },
      {
        name: 'twitter:image',
        content: 'https://naturalselectiontour.com/share.jpg',
      },
    ],
    link: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['scss/main.scss'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/js-logger.js'],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources', // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg', // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots', // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/prismic',
      {
        endpoint: smConfig.apiEndpoint || '',
        apiOptions: {
          routes: [
            {
              type: 'page',
              path: '/:uid',
            },
          ],
        },
      },
    ],
    ['nuxt-sm'],
  ],
  generate: {
    fallback: true,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm'],
  },
  storybook: {
    port: 4000,
    // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
    stories: [...getStoriesPaths().map((path) => path.replace('../', '~/'))],
  },
  // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
  ignore: [...getStoriesPaths().map((path) => path.replace('../', '~/'))],

  // https://www.npmjs.com/package/@nuxtjs/style-resources
  styleResources: {
    scss: ['scss/global.scss'],
  },
}
