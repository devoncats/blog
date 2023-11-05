import useThemeStore from '../stores/themeStore'
import { BiMoon, BiSearchAlt2, BiSun } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Header () {
  const theme = useThemeStore(state => state.theme)
  const setTheme = useThemeStore(state => state.setTheme)

  return (
    <header className='flex justify-center py-3 bg-neutral-background-1'>
      <article className='w-[90vw] flex items-center justify-between'>
        <section className='flex items-center justify-center gap-8'>
          {
            theme === 'dark'
              ? <Link to='/'><img src='/logo-full-dark.svg' alt='Logo of the company' /></Link>
              : <Link to='/'><img src='/logo-full.svg' alt='Logo of the company' /></Link>
          }

          <ul className='flex gap-8 font-semibold text-neutral-foreground-link-base'>
            <li className='hover:text-neutral-foreground-link-hover'><Link to='/'>Home</Link></li>
            <li className='hover:text-neutral-foreground-link-hover'><Link to='/about-me'>About me</Link></li>
            <li className='hover:text-neutral-foreground-link-hover'><Link to='/contact'>Contact</Link></li>
          </ul>
        </section>

        <section className='flex gap-4 text-neutral-foreground-1'>
          {
            theme === 'light'
              ? <button onClick={() => setTheme('dark')}><BiSun className='text-2xl' /></button>
              : <button onClick={() => setTheme('light')}><BiMoon className='text-2xl' /></button>
          }
          <button className='w-64 flex items-center justify-between px-4 rounded-lg text-sm text-neutral-foreground-2 bg-neutral-background-2'>
            <div className='flex items-center gap-2'>
              <BiSearchAlt2 />
              <p>Quick search...</p>
            </div>

            <p className='px-2 py-1 rounded-md text-neutral-foreground-3 bg-neutral-background-3'>Ctrl K</p>
          </button>

          <Link className='px-4 py-2 rounded-lg font-semibold text-white bg-brand-1 hover:bg-brand-hover' to='/login'>Login</Link>
        </section>
      </article>
    </header>
  )
}
