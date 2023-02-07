import { arch, platform } from 'process'

export const isWin = () => {
  return platform === 'win32'
}

export const isMac = () => {
  return platform === 'darwin'
}

export const isLinux = () => {
  return platform === 'linux'
}

export const isIa32 = () => {
  return arch === 'ia32'
}

export const isX64 = () => {
  return arch === 'x64'
}
