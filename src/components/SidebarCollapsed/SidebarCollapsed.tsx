import React from 'react'
import { showSidebarAtom } from '@state'
import { useRecoilState } from 'recoil'
import { BiChevronRight } from 'react-icons/bi'

const SidebarCollapsed = () => {
  const [showSidebar, setShowSidebar] = useRecoilState(showSidebarAtom)
  return (
    <div
      className={`absolute h-full transition-all duration-500 ease-in ${
        !showSidebar ? 'w-10 opacity-100' : 'w-0 opacity-5'
      } shadow-2xl flex justify-center`}
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
