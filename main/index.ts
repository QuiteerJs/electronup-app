import { resolve } from 'path'
import { BrowserWindow } from 'electron'
import { Ipc } from '@quiteer/electron-ipc'
import preload from '@quiteer/electron-preload'
import { appInstance } from '@youliso/electronic/app'

const loadUrl = process.env.NODE_ENV === 'development'
  ? `http://localhost:${process.env.RENDER_PORT}`
  : `file://${resolve(__dirname, 'index.html')}`

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

