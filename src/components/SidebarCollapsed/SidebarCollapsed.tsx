import React from 'react'
import { showSidebarAtom } from '@state'
import { BiChevronRight } from 'react-icons/bi'
import { useClassNames } from '@hooks'
import { useRecoilState } from 'recoil'

const SidebarCollapsed = () => {
  const [showSidebar, setShowSidebar] = useRecoilState(showSidebarAtom)
  const classNames = useClassNames()
  return (
    <div
      className={classNames(
        `absolute h-full transition-all duration-500 ease-in z-10 shadow-2xl flex justify-center`,
        !showSidebar ? 'w-10 bg-opacity-90 bg-white' : 'w-0 opacity-100',
      )}
    >
      <BiChevronRight
        className="mt-4 h-8 w-8 hover:opacity-50
        cursor-pointer z-10 rounded-full shadow-3xl dark:text-white"
        onClick={() => setShowSidebar(!showSidebar)}
      />
    </div>
  )
}

export default SidebarCollapsed
