export default function Header () {
  return (
    <header className='flex py-2 justify-center bg-neutral-background'>
      <article className='flex justify-between items-center w-[90vw]'>
        <section className='flex justify-center items-center gap-8'>
          <img src='/logo-full.svg' alt='Logo of the company' />

          <ul className='flex font-semibold text-neutral-foreground gap-8'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>Resources</a></li>
            <li><a href='#'>Pricing</a></li>
          </ul>
        </section>

        <section className='flex text-neutral-foreground gap-4'>
          <button className='px-4 py-2 rounded-lg font-semibold text-neutral-foreground'>Log In</button>
          <button className='px-4 py-2 rounded-lg font-semibold text-neutral-background bg-neutral-foreground'>Sign Up</button>
        </section>
      </article>
    </header>
  )
}
