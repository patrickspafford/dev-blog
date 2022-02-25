import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config'
import { useRef } from 'react'
import { IBreakpoints } from './types'
import { TailwindColorGroup } from 'tailwindcss/tailwind-config'

const useTailwindTheme = () => {
  const {
    darkMode,
    theme: { screens, colors, fontFamily, maxWidth, fontSize },
  } = useRef(resolveConfig(tailwindConfig)).current
  const breakpoints: IBreakpoints = {}
  for (const [k, v] of Object.entries(screens)) {
    breakpoints[k] = Number.parseInt(v.split('px')[0], 10)
  }
  return {
    colors: colors as TailwindColorGroup,
    fontSize,
    fontFamily,
    maxWidth,
    darkMode,
    breakpoints,
  }
}

export default useTailwindTheme
