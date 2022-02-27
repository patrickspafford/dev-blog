import { atom } from 'recoil'
import { isBrowser } from 'react-device-detect'

export const showSidebarAtom = atom({
  key: 'showSidebarAtom',
  default: isBrowser,
})

export const menuOpenAtom = atom({
  key: 'menuOpenAtom',
  default: false,
})

export const darkModeAtom = atom({
  key: 'darkModeAtom',
  default: false,
})
