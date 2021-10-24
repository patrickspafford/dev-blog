import { atom } from 'recoil'

export const menuOpenAtom = atom<boolean>({
  key: 'menuOpenAtom',
  default: false,
})

export const showSidebarAtom = atom<boolean>({
  key: 'showSidebarAtom',
  default: true,
})
