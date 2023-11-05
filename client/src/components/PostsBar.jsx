import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'

export default function PostsBar () {
  return (
    <section className='flex items-center justify-between font-semibold text-neutral-foreground-1'>
      <button className='flex items-center gap-4'><BiChevronLeft className='text-xl' />Previous</button>

      <div className='flex gap-2'>
        <button className='w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-foreground-1 text-neutral-background-1'>1</button>
        <button className='w-8 h-8 flex items-center justify-center'>2</button>
        <button className='w-8 h-8 flex items-center justify-center'>3</button>
        <div className='w-8 h-8 flex items-center justify-center'>...</div>
        <button className='w-8 h-8 flex items-center justify-center'>7</button>
        <button className='w-8 h-8 flex items-center justify-center'>8</button>
        <button className='w-8 h-8 flex items-center justify-center'>9</button>
      </div>

      <button className='flex items-center gap-2'>Next<BiChevronRight className='text-xl' /></button>
    </section>
  )
}
