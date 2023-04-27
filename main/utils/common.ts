import { resolve } from 'path'
import { Is } from './is'

export class Common {
  static get loadUrl() {
    const devUrl = `http://localhost:${process.env.RENDER_PORT}`
    const prodUrl = `file://${resolve(__dirname, 'index.html')}`
    return Is.dev ? devUrl : prodUrl
  }
}
