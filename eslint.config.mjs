// @ts-check
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({}).prepend(eslintPluginPrettierRecommended).overrideRules({
  'vue/singleline-html-element-content-newline': 'off',
});
