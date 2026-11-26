import { Configuration } from '@nuxt/types';

const config: Configuration = {
  target: 'static',
  ssr: false,
  router: { base: '/glo/' },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  generate: {
    fallback: true,
  },
  loading: { color: '#fff' },
  css: ['reset-css'],
  plugins: ['./plugins/fullscreen.ts', './plugins/fontawesome.ts'],
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios', 'nuxt-webfontloader'],
  webfontloader: {
    google: {
      families: [
        'Roboto Mono:400,600&display=swap',
        'Roboto:400,600&display=swap',
      ],
    },
  },
  build: {
    transpile: ['vee-validate/dist/rules'],
    extend(config, ctx) {
      if (ctx.isDev) {
        // For debugging
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
      }
    },
  },
};

export default config;
