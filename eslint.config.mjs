// @ts-check
import pluginVue from 'eslint-plugin-vue';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({})
  .prepend(eslintPluginPrettierRecommended, ...pluginVue.configs['flat/recommended'])
  .overrideRules({
    'vue/singleline-html-element-content-newline': 'off',
  });
