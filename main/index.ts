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

  win.loadURL(loadUrl)
  win.webContents.openDevTools({ mode: 'right' })
})

