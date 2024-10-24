// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import pluginVue from 'eslint-plugin-vue'

export default withNuxt(
  ...pluginVue.configs['flat/recommended'],

  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-console': 'error',
      'indent': ['error', 2]
    }
  },
)
