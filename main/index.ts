import { BrowserWindow } from 'electron'
import { Ipc } from '@quiteer/electron-ipc'
import preload from '@quiteer/electron-preload'
import { appInstance } from '@youliso/electronic/app'
import { loadUrl } from './absolutePath'

appInstance.start().then(() => {
  Ipc.init()

  const win = new BrowserWindow({
    height: 700,
    width: 1000,
    webPreferences: {
      sandbox: false,
      preload: preload as string
    }
  })

  const child = new BrowserWindow({
    parent: win,
    height: 700,
    width: 200,
    show: false,
    webPreferences: {
      sandbox: false,
      preload: preload as string
    }
  })

  win.loadURL(loadUrl)

  win.webContents.openDevTools({ mode: 'right' })
  win.once('ready-to-show', () => {
    setTimeout(() => {
      const [x, y] = win.getPosition()
      child.setPosition(x + 990, y)
      child.show()
    }, 1000)
  })

  win.on('will-move', (event, newBounds) => {
    child.setPosition(newBounds.x + 990, newBounds.y)
  })
})

