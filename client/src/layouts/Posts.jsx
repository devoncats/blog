import Card from '../components/Card'
import PostsBar from '../components/PostsBar'

export default function Posts () {
  return (
    <section className='grid place-content-center bg-neutral-background'>
      <div className='w-[90vw] grid grid-cols-4 gap-12 mt-12'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <PostsBar />
    </section>
  )
}
