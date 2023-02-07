import { resolve } from 'path'
import type { ViteConfig } from '@quiteer/electronup'
import VueMacros from './plugins/macros'
import autoImport from './plugins/auto-import'

export default (root: string): ViteConfig => {
  const srcDir = resolve(root, 'render')
  return {
    resolve: { alias: { '@': srcDir } },
    plugins: [VueMacros, autoImport(srcDir)],
    build: {
      rollupOptions: {
        output: {
          manualChunks(input, { getModuleInfo }) {
            // 打包依赖
            if (input.includes('node_modules'))
              return 'vendor'

            const reg = /(.*)\/src\/components\/(.*)/
            if (reg.test(input)) {
              console.log('input: ', input)
              const importersLen = getModuleInfo(input)?.importers.length
              // 被多处引用
              if (importersLen && importersLen > 1)
                return 'common'
            }
          }
        }

      }
    }
  }
}
