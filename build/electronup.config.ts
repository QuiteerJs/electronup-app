import type { ConfigEnv } from '@quiteer/electronup'
import { defineConfig } from '@quiteer/electronup'
import { devDependencies } from '../package.json'
import viteConfigFn from './vite'

export default defineConfig((env: ConfigEnv) => {
  console.log('defineConfig env: ', env)
  return {
    viteConfig: viteConfigFn(env.root),
    tsupConfig: {
      external: [...Object.keys(devDependencies)]
    },
    builderConfig: {}
  }
})
