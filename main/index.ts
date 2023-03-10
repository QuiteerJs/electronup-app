import { Ipc } from '@quiteer/electron-ipc'
import preload from '@quiteer/electron-preload'
import { appInstance, logError, windowInstance } from '@youliso/electronic'
import { loadUrl } from './absolutePath'

appInstance.start().then(async () => {
  Ipc.init()

  windowInstance.setDefaultCfg({
    defaultLoadType: 'url',
    defaultUrl: loadUrl,
    defaultPreload: preload as string
  })

  const main = await windowInstance.create(
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

  main?.webContents.openDevTools()

  const child = await windowInstance.create(
    {
      title: 'child',
      url: 'https://cn.vuejs.org/',
      headNative: true,
      parentId: main?.id
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

  main && windowInstance.load(main, { openDevTools: true }).catch(logError)
  child && windowInstance.load(child)

  setTimeout(() => {
    const [x, y] = main!.getPosition()
    console.log('x, y: ', x, y)
    child!.setPosition(x + 990, y)
    child?.show()
  }, 1000)

  main?.on('unmaximize', () => {
    const [x, y] = main!.getPosition()
    child!.setPosition(x + 990, y)
  })

  main!.on('will-move', (event, newBounds) => {
    child!.setPosition(newBounds.x + 990, newBounds.y)
  })
})
  .catch(logError)

