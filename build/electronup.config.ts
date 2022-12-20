import type { ConfigEnv } from '@quiteer/electronup'
import { defineConfig } from '@quiteer/electronup'
import viteConfigFn from './vite'

export default defineConfig((env: ConfigEnv) => {
  return {
    viteConfig: viteConfigFn(env.root),
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
