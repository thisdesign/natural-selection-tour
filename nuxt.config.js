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
    title: 'Natural Selection Tour',
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
        content: 'Natural Selection Tour to Redefine Snowboarding Competition',
      },
      {
        property: 'og:url',
        content: 'https://naturalselectiontour.com',
      },
      {
        property: 'og:title',
        content: 'Natural Selection Tour',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:description',
        content: 'Natural Selection Tour to Redefine Snowboarding Competition',
      },
      {
        property: 'og:image',
        content:
          'https://images.prismic.io/naturalselectiontour/68f6a626-23b3-4935-aa1b-2ae18589b5c2_NaturalSelection_Logomark_Horizontal_WhiteTM.png?auto=compress,format',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Natural Selection Tour',
      },
      {
        name: 'twitter:description',
        content: 'Natural Selection Tour to Redefine Snowboarding Competition',
      },
      {
        name: 'twitter:image',
        content:
          'https://images.prismic.io/naturalselectiontour/68f6a626-23b3-4935-aa1b-2ae18589b5c2_NaturalSelection_Logomark_Horizontal_WhiteTM.png?auto=compress,format',
      },
    ],
    link: [
      {
        rel: 'icon',
        href: 'https://images.prismic.io/naturalselectiontour/5b26bdef-4467-4749-a9db-0fa3471f0c05_NaturalSelection_Logo_White.png?auto=compress,format',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['scss/main.scss'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/js-logger.js',
    { src: '~plugins/v-waypoint.client.js', mode: 'client' },
  ],
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
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'nuxt-facebook-pixel-module',
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

  facebook: {
    track: 'PageView',
    pixelId: '2991615347835610',
    autoPageView: true,
    disabled: false,
  },

  generate: {
    fallback: true,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm'],
  },

  server: {
    host: '0.0.0.0',
  },

  sitemap: {
    hostname: 'https://www.naturalselectiontour.com',
    gzip: true,
    exclude: [],
  },

  storybook: {
    port: 4000,
    // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
    stories: [...getStoriesPaths().map((path) => path.replace('../', '~/'))],
    parameters: {
      layout: 'fullscreen',
    },
  },
  // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
  ignore: [...getStoriesPaths().map((path) => path.replace('../', '~/'))],

  // https://www.npmjs.com/package/@nuxtjs/style-resources
  styleResources: {
    scss: ['scss/global.scss'],
  },

  auth: {
    redirect: {
      login: '/', // redirect user when not connected
      callback: '/auth/signed-in', // callback after auth
      home: '/gallery/home', // iframe gallery with middleware
    },
    strategies: {
      local: false,
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENT_ID,
        logoutRedirectUri: process.env.NUXT_ENV_BASE_URL,
        audience: process.env.AUTH0_AUDIENCE,
      },
    },
  },
}
