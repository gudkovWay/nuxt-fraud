// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@primevue/nuxt-module', '@nuxtjs/tailwindcss'],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['en', 'ru', 'fr', 'cn'],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  rootDir: 'app',

  css: ['primeicons/primeicons.css'],
  components: [
    {
      path: '@/components/widgets',
      pathPrefix: false,
    },
    {
      path: '@/components/ui',
      pathPrefix: false,
    },
  ],
});
