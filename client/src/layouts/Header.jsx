export default function Header () {
  return (
    <header className='flex items-center justify-between px-24 py-2 bg-neutral-background'>
      <section className='flex items-center gap-8'>
        <img src='/logo-full.svg' alt='' />

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
    </header>
  )
}
