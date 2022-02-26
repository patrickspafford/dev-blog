import { useEffect, useState } from 'react'

const darkModeKey = 'darkModeKey'

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    const theme = localStorage.getItem(darkModeKey)
    if (
      theme === 'dark' ||
      (theme === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem(darkModeKey, 'dark')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem(darkModeKey, 'light')
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return [darkMode, setDarkMode] as const
}

export default useDarkMode
