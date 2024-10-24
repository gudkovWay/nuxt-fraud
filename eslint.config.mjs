// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import pluginVue from 'eslint-plugin-vue';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default withNuxt(
  ...pluginVue.configs['flat/recommended'],
  eslintPluginPrettierRecommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-console': 'error',
      indent: ['error', 2],
    },
  },
);
