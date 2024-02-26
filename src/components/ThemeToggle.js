'use client'
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from './Icons'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        window.localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
      )
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const handleToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <label className='swap swap-rotate'>
      <input
        type='checkbox'
        onChange={handleToggle}
        checked={theme === 'dark'}
        className='theme-controller'
        value='synthwave'
      />
      <SunIcon />
      <MoonIcon />
    </label>
  )
}

export default ThemeToggle
