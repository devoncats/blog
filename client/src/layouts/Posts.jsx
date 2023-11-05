import Post from '../components/Post'
import PostsBar from '../components/PostsBar'

export default function Posts () {
  return (
    <section className='grid place-content-center bg-neutral-background-1'>
      <div className='w-[90vw] grid grid-cols-4 mt-12 gap-12'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>

      <PostsBar />
    </section>
  )
}
