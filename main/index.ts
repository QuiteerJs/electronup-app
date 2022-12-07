import { BrowserWindow, app } from 'electron'
import { loadUrl } from '@quiteer/electronup'

app.whenReady().then(() => {
  const win = new BrowserWindow({
    height: 700, width: 1000
  })

  console.log('loadUrl: ', loadUrl)
  console.log('NODE_ENV', process.env.NODE_ENV)
  console.log('VITE_HELLO :>> ', process.env.VITE_HELLO)
  console.log('VITE_MODE_TEXT :>> ', process.env.VITE_MODE_TEXT)

  win.loadURL(loadUrl)
  win.webContents.openDevTools({ mode: 'right' })
})

