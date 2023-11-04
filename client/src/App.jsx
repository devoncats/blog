import Header from './layouts/Header'

function App () {
  const stock = 'https://images.unsplash.com/photo-1694893501629-7e4b82313e42?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <>
      <Header />
      <main className='grid place-content-center mt-36'>
        <article className='flex flex-col items-center'>
          <h1 className='font-semibold text-lg'>Kirlee Blog</h1>
          <h2 className='font-semibold text-6xl mt-2'>Writing from our team</h2>
          <p className='mt-6'>The latest industry news, interviews, technologies, and resources.</p>
          <article className='w-[93vw] h-[40vw] px-12 mt-16'>
            <img className='h-full w-full object-cover' src={stock} alt='' />
          </article>
        </article>
      </main>
      <div className='h-screen'>
        a
      </div>
    </>
  )
}

export default App
