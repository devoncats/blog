import { Link } from 'react-router-dom'
import Header from '../layouts/Header'
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'

export default function AboutMe () {
  return (
    <>
      <Header />
      <main className='h-[93.4vh] grid place-content-center bg-neutral-background-1'>
        <article className='flex items-center w-[90vw]'>
          <section className='flex flex-col flex-1 text-neutral-foreground-1'>
            <h2 className='text-4xl font-semibold'>Welcome 👋</h2>
            <h1 className='text-6xl font-semibold pt-2'>I am <span className='text-transparent bg-clip-text bg-gradient-to-tr from-brand-1 to-brand-2'>devoncats</span></h1>
            <p className='w-[50%] pt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ea illum, debitis harum iste placeat quam repudiandae, fugiat impedit amet eius sint fuga? Tempore dolorum corporis ullam fugiat eos voluptatum?</p>
            <div className='flex gap-8 mt-12'>
              <Link to='https://github.com/devoncats' className='p-2 rounded-lg bg-neutral-background-inverted-base text-neutral-foreground-inverted-base hover:bg-neutral-background-inverted-hover hover:text-neutral-foreground-inverted-hover'><BiLogoGithub className='text-3xl' /></Link>
              <Link to='https://www.linkedin.com/in/jose-ignacio-vasquez/' className='p-2 rounded-lg bg-neutral-background-inverted-base text-neutral-foreground-inverted-base hover:bg-neutral-background-inverted-hover hover:text-neutral-foreground-inverted-hover'><BiLogoLinkedin className='text-3xl' /></Link>
              <Link to='' className='p-2 rounded-lg bg-neutral-background-inverted-base text-neutral-foreground-inverted-base hover:bg-neutral-background-inverted-hover hover:text-neutral-foreground-inverted-hover'><BiLogoInstagram className='text-3xl' /></Link>
            </div>
          </section>
          <section>
            <img src='https://placehold.co/600' alt='' />
          </section>
        </article>
      </main>
    </>
  )
}
