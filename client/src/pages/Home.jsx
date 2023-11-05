import React from 'react'
import Header from '../layouts/Header'
import Hero from '../layouts/Hero'
import Card from '../components/Card'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

export default function Home () {
  return (
    <>
      <Header />
      <Hero />
      <div className='grid place-content-center'>
        <div className='grid grid-cols-3 lg:grid-cols-4 gap-12 mt-12 w-[90vw]'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className='grid place-content-center'>
        <div className='w-[90vw] flex justify-between items-center'>
          <button className='flex items-center gap-2 font-semibold'><BiChevronLeft className='text-2xl' /> Previous</button>
          <div className='flex font-semibold gap-6'>
            <button className='p-1 w-10 h-10 rounded-xl bg-neutral-foreground text-neutral-background'>1</button>
            <button className='p-1 w-10 h-10 rounded-xl bg-neutral-background'>2</button>
            <button className='p-1 w-10 h-10 rounded-xl bg-neutral-background'>3</button>
            <div className='p-1 w-10 h-10 rounded-xl bg-neutral-background'>...</div>
            <button className='p-1 w-10 h-10 rounded-xl bg-neutral-background'>8</button>
            <button className='p-1 w-10 h-10 rounded-xl bg-neutral-background'>9</button>
            <button className='p-1 w-10 h-10 rounded-xl bg-neutral-background'>10</button>
          </div>
          <button className='flex items-center gap-2 font-semibold'>Next <BiChevronRight className='text-2xl' /></button>
        </div>
      </div>

      <footer className='grid place-content-center mt-12 bg-neutral-foreground'>
        <article className='text-neutral-background w-[90vw] py-4 h-[30vh]'>
          <h1>Kirlee</h1>
        </article>
      </footer>
    </>
  )
}
