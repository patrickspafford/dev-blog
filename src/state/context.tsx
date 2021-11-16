import React, { createContext, useState } from 'react'

const defaultContext = {
  showSidebar: true,
  setShowSidebar: (showSidebar: boolean) => {
    console.log('Toggle sidebar')
  },
  menuOpen: false,
  setMenuOpen: (menuOpen: boolean) => {
    console.log('Toggle menu open')
  },
}

export const BlogContext = createContext({
  ...defaultContext,
})

export const BlogContextProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <BlogContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
