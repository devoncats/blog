import React from 'react'
import { BiRightTopArrowCircle } from 'react-icons/bi'

export default function Card () {
  const stock = 'https://images.unsplash.com/photo-1694893501629-7e4b82313e42?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <article className='h-fit mb-[4rem] text-neutral-foreground-1'>
      <img className='w-full h-[13rem] object-cover' src={stock} alt='' />
      <div className='grid py-4 gap-2'>
        <h2 className='font-semibold'>Olivia Rhyne - 29 February 2021</h2>
        <div className='flex justify-between'>
          <h1 className='text-xl font-semibold'>Webpage review</h1>
          <BiRightTopArrowCircle className='text-xl' />
        </div>
        <p>How do you make a good web page using react, tailwind, node, express, and mongo db.</p>
        <div className='flex gap-2'>
          <div className='py-1 px-2 border rounded-xl text-sm font-semibold'>Programming</div>
          <div className='py-1 px-2 border rounded-xl text-sm font-semibold'>Review</div>
        </div>
      </div>
    </article>
  )
}
