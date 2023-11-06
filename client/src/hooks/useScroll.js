import { useState } from 'react'

export default function useScroll () {
  const [scroll, setScroll] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return scroll
}
