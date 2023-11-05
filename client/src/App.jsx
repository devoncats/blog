import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import useThemeStore from './stores/themeStore'
import AboutMe from './pages/AboutMe'

function App () {
  const theme = useThemeStore()
  useEffect(() => theme.setTheme(theme.theme), [theme.theme])
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
    </Router>
  )
}

export default App
