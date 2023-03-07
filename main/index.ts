import { BrowserWindow } from 'electron'
import { Ipc } from '@quiteer/electron-ipc'
import preload from '@quiteer/electron-preload'
import { appInstance, logError, windowInstance } from '@youliso/electronic'
import { loadUrl } from './absolutePath'

appInstance.start().then(async () => {
  Ipc.init()

  windowInstance.setDefaultCfg({
    defaultUrl: loadUrl,
    defaultPreload: preload as string
  })

  const mainId = await windowInstance.create(
    {
      title: 'main',
      route: '/',
      headNative: true
    },
    {
      height: 700,
      width: 1000,
      webPreferences: {
        sandbox: false
      }
    }
  )

  const win = BrowserWindow.fromId(mainId!)!

  const childId = await windowInstance.create(
    {
      title: 'child',
      route: '/',
      headNative: true,
      parentId: mainId
    },
    {
      height: 700,
      width: 400,
      show: false,
      webPreferences: {
        sandbox: false
      }
    }
  )
  const child = BrowserWindow.fromId(childId!)!

  win.once('ready-to-show', () => {
    setTimeout(() => {
      const [x, y] = win.getPosition()
      console.log('x, y: ', x, y)
      child.setPosition(x + 990, y)
      child.show()
    }, 1300)
  })

  win.on('will-move', (event, newBounds) => {
    child.setPosition(newBounds.x + 990, newBounds.y)
  })
})
  .catch(logError)

