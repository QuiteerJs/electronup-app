import { resolve } from 'path'
import type { ViteConfig } from '@quiteer/electronup'
import VueMacros from './plugins/macros'

export default (root: string): ViteConfig => {
  return {
    resolve: { alias: { '@': resolve(root, 'render') } },
    plugins: [VueMacros]
  }
}
