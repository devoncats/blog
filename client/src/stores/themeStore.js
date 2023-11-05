/* eslint-disable no-undef */
import { create } from 'zustand'

const useThemeStore = create((set) => ({
  theme: JSON.parse(localStorage.getItem('theme')) ? JSON.parse(localStorage.getItem('theme')) : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',

  setTheme: (theme) => {
    set({ theme })
    document.querySelector('html').setAttribute('data-theme', theme)
    localStorage.setItem('theme', JSON.stringify(theme))
  }
}))

export default useThemeStore
