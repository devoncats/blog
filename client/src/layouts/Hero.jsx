import React from 'react'

export default function Hero () {
  const stock = 'https://images.unsplash.com/photo-1694893501629-7e4b82313e42?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <main className='grid place-content-center pt-24 bg-neutral-background text-neutral-foreground'>
      <article className='flex flex-col items-center'>
        <h1 className='font-semibold text-lg'>Kirlee Blog</h1>
        <h2 className='font-semibold text-6xl mt-2'>Writing about technology</h2>
        <p className='mt-6'>The latest industry news, interviews, technologies, and resources.</p>
        <article className='w-[90vw] h-[40vw] mt-16'>
          <div className='absolute grid gap-4 top-[45vw] left-32 text-neutral-background z-50'>
            <h2 className='text-lg'>Olivia Rhye - 29 February 2021 </h2>
            <div className='grid gap-4'>
              <h1 className='text-5xl font-semibold'>Webpage review</h1>
              <p className='text-base'>How do you make a good web page using react, tailwind, node, express, and mongo db.</p>
            </div>
            <div className='flex gap-4'>
              <div className='py-1 px-2 border rounded-xl'>Programming</div>
              <div className='py-1 px-2 border rounded-xl'>Review</div>
            </div>
          </div>
          <div className='w-[90vw] h-[45%] bg-gradient-to-t from-neutral-foreground to-transparent absolute top-[36vw] z-20' />
          <img className='h-full w-full object-cover' src={stock} alt='' />
        </article>
      </article>
    </main>
  )
}
