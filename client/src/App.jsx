import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import useThemeStore from './stores/themeStore'
import AboutMe from './pages/AboutMe'
import Login from './pages/Login'

function App () {
  const theme = useThemeStore()
  useEffect(() => theme.setTheme(theme.theme), [theme.theme])
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
