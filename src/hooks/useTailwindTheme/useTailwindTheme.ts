import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config'
import { useRef } from 'react'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
import { IBreakpoints } from './types'

const useTailwindTheme = () => {
  const tailwindConfigTyped: TailwindConfig =
    tailwindConfig as unknown as TailwindConfig
  const {
    darkMode,
    theme: { screens, colors, fontFamily, maxWidth },
  } = useRef(resolveConfig(tailwindConfigTyped)).current
  const breakpoints: IBreakpoints = {}
  for (const [k, v] of Object.entries(screens)) {
    breakpoints[k] = Number.parseInt(v.split('px')[0], 10)
  }
  return {
    colors,
    fontFamily,
    maxWidth,
    darkMode,
    breakpoints,
  }
}

export default useTailwindTheme
