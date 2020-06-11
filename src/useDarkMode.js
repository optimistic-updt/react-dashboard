import {useEffect, useState } from 'react'

export const useDarkMode = () => {

  const [theme, setTheme] = useState(window.localStorage.getItem('theme') ||'light')

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme','light')
      setTheme('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
      setTheme('dark') :
      localTheme ?
        setTheme(localTheme) :
        setTheme('light')
  }, [])


  return [theme, toggleTheme]
}