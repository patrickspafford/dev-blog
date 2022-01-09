import { useRecoilState } from 'recoil'
import { showSidebarAtom } from '@state'
import useWindowWidth from '../useWindowWidth'
import useTailwindTheme from '../useTailwindTheme'
import { isBrowser } from 'react-device-detect'

const useShowSidebar = () => {
  const windowWidth = useWindowWidth()
  const [showSidebar, setShowSidebar] = useRecoilState(showSidebarAtom)
  const theme = useTailwindTheme()
  return [
    showSidebar && windowWidth > theme.breakpoints.lg && isBrowser,
    setShowSidebar,
  ] as const
}

export default useShowSidebar
