import React, { useContext } from 'react'
import { BlogContext } from '@state'
import { BiChevronRight } from 'react-icons/bi'

const SidebarCollapsed = () => {
  const { showSidebar, setShowSidebar } = useContext(BlogContext)
  return (
    <div
      className={`absolute h-full transition-all duration-500 ease-in z-10 ${
        !showSidebar ? 'w-10 opacity-100' : 'w-0 opacity-5'
      } shadow-2xl flex justify-center bg-white bg-opacity-90`}
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
