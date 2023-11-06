export default function Hero () {
  const stock = 'https://images.unsplash.com/photo-1694893501629-7e4b82313e42?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <main className='grid place-content-center pt-24 bg-neutral-background-1'>
      <article className='flex flex-col items-center'>
        <h1 className='text-xl font-semibold text-neutral-foreground-1'>Kirlee Blog</h1>
        <h2 className='mt-2 text-6xl font-semibold text-neutral-foreground-1'>Writing about <span className='text-transparent bg-clip-text bg-gradient-to-tr from-brand-1 to-brand-2'>technology</span></h2>
        <p className='mt-6 text-neutral-foreground-1'>The latest industry news, interviews, technologies, and resources.</p>
        <article className='w-[90vw] h-[40vw] mt-16'>
          <div className='absolute grid top-[45vw] left-32 gap-4 z-40'>
            <h2 className='text-lg text-white'>Olivia Rhye - 29 February 2021 </h2>

            <div className='grid gap-4'>
              <h1 className='text-5xl font-semibold text-white'>Webpage review</h1>
              <p className='text-white'>How do you make a good web page using react, tailwind, node, express, and mongo db.</p>
            </div>

            <div className='flex gap-4'>
              <div className='py-1 px-2 border rounded-xl font-semibold text-white'>Programming</div>
              <div className='py-1 px-2 border rounded-xl font-semibold text-white'>Review</div>
            </div>
          </div>

          <div className='w-[90vw] h-[45%] absolute top-[37vw] z-20 bg-gradient-to-t from-black to-transparent' />

          <img className='h-full w-full object-cover' src={stock} alt='' />
        </article>
      </article>
    </main>
  )
}
