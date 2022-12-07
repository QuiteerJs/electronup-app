import { resolve } from 'path'
import type { ConfigEnv } from '@quiteer/electronup'
import { defineConfig } from '@quiteer/electronup'
import { devDependencies } from '../package.json'

export default defineConfig((env: ConfigEnv) => {
  console.log('defineConfig env: ', env)
  return {
    viteConfig: {
      resolve: { alias: { '@': resolve(env.root, 'render') } }
    },
    tsupConfig: {
      external: [...Object.keys(devDependencies)]
    },
    builderConfig: {}
  }
})
