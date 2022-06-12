const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    plugins: [
      require('unplugin-icons/webpack')({
        /* options */
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],

        // global imports to register
        imports: [
          // presets
          'vue',
          'vue-router',
          // custom
          {
            '@vueuse/core': [
              // named imports
              'useMouse', // import { useMouse } from '@vueuse/core',
              // alias
              ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
            ],
            axios: [
              // default imports
              ['default', 'axios'] // import { default as axios } from 'axios',
            ],
            '[package-name]': [
              '[importNames]',
              // alias
              ['[from]', '[alias]']
            ]
          }
        ],

        // Auto import for all module exports under directories
        dirs: [
          // './hooks',
          // './composables'
          // ...
        ],

        // Filepath to generate corresponding .d.ts file.
        // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
        // Set `false` to disable.
        dts: './auto-imports.d.ts',

        // Auto import inside Vue template
        // see https://github.com/unjs/unimport/pull/15
        vueTemplate: false,

        // Custom resolvers, compatible with `unplugin-vue-components`
        // see https://github.com/antfu/unplugin-auto-import/pull/23/
        // resolvers: [
        //   /* ... */
        // ],

        // Generate corresponding .eslintrc-auto-import.json file.
        // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        }
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
