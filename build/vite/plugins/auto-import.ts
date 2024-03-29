import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export default (srcPath: string) => {
  return [
    Icons({
      compiler: 'vue3',
      customCollections: {
        custom: FileSystemIconLoader(`${srcPath}/assets/svg`)
      },
      autoInstall: true,
      scale: 1,
      defaultClass: 'inline-block',
      jsx: 'preact'
    }),
    AutoImport({
      dts: '../typings/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          'vue-router': ['RouterView', 'RouterLink'],
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      dts: '../typings/components.d.ts',
      resolvers: [
        IconsResolver({
          customCollections: ['custom'],
          componentPrefix: 'icon'
        }),
        NaiveUiResolver()
      ]
    })
  ]
}
