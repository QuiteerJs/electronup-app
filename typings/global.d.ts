interface Window {
  $ipc: import('@quiteer/electron-preload').PreloadIpc
  $clipboard: import('@quiteer/electron-preload').PreLoadPath
  $webFrame: import('@quiteer/electron-preload').PreloadWebFrame
  $path: import('@quiteer/electron-preload').PreLoadPath
}
