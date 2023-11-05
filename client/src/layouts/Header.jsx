import { BiSearchAlt2 } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className='flex py-2 justify-center bg-neutral-background'>
      <article className='flex justify-between items-center w-[90vw]'>
        <section className='flex justify-center items-center gap-8'>
          <img src='/logo-full.svg' alt='Logo of the company' />

          <ul className='flex font-semibold text-neutral-foreground gap-8'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-me'>About me</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </section>

        <section className='flex text-neutral-foreground gap-4'>
          <button className='flex items-center justify-between px-4 w-52 text-sm rounded-lg bg-neutral-foreground text-neutral-background'>
            <div className='flex items-center gap-2'>
              <BiSearchAlt2 />
              <p>Quick search...</p>
            </div>
            <p>Ctrl K</p>

          </button>
          <button className='px-4 py-2 rounded-lg font-semibold text-neutral-background bg-neutral-foreground'>Login</button>
        </section>
      </article>
    </header>
  )
}
