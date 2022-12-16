import type { ConfigEnv } from '@quiteer/electronup'
import { defineConfig } from '@quiteer/electronup'
import { devDependencies } from '../package.json'
import viteConfigFn from './vite'

export default defineConfig((env: ConfigEnv) => {
  return {
    viteConfig: viteConfigFn(env.root),
    tsupConfig: {
      external: [...Object.keys(devDependencies)]
    },
    builderConfig: {
      win: {
        target: {
          target: 'nsis',
          arch: 'ia32'
        }
      }
    }
  }
})
