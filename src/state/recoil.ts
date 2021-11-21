import { atom } from 'recoil'

export const showSidebarAtom = atom({
  key: 'showSidebarAtom',
  default: true,
})

export const menuOpenAtom = atom({
  key: 'menuOpenAtom',
  default: false,
})
