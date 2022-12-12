import { resolve } from 'path'
import type { ViteConfig } from '@quiteer/electronup'

export default (root: string): ViteConfig => {
  return {
    resolve: { alias: { '@': resolve(root, 'render') } }
  }
}
