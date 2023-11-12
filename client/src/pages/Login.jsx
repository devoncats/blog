import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useThemeStore from '../stores/themeStore'
import useAuthStore from '../stores/authStore'
import { BiLowVision, BiShowAlt } from 'react-icons/bi'

export default function Login () {
  const theme = useThemeStore(theme => theme.theme)
  const login = useAuthStore()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login.login()
  }

  useEffect(() => {
    if (login.auth) navigate('/')
  }, [login.auth])

  return (
    <main className='h-screen w-screen grid place-content-center bg-[url("/bg.svg")] bg-cover text-neutral-foreground-1'>
      <article className='h-[50rem] w-[30rem] flex flex-col items-center justify-between p-12 rounded-lg bg-neutral-background-1'>
        <img className='w-44' src={theme === 'dark' ? '/logo-full-dark.svg' : '/logo-full.svg'} alt='' />

        <div className='relative grid gap-2 text-center'>
          <h1 className='text-4xl font-semibold'>Welcome back!</h1>
          <p className='text-sm text-neutral-foreground-3'>Please enter your details</p>
        </div>

        {!login.loginForm.valid && <p className='text-2xl'>Incorrect username or password</p>}

        <form className='w-full grid gap-4' onSubmit={handleSubmit}>
          <div className='flex flex-col relative'>
            <label className={login.loginForm.usernameSelected || login.loginForm.username !== '' ? 'absolute text-sm -translate-y-6 transition-all' : 'absolute top-1 text-lg transition-all'} htmlFor='username'>Email or username</label>
            <input
              className='h-10 bg-neutral-background-1 border-b px-2'
              name='username'
              id='username'
              type='text'
              value={login.loginForm.username}
              onChange={login.handleLoginFormChange}
              onSelect={login.handleLoginFormSelected}
              onBlur={login.handleLoginFormBlur}
              autoComplete='on'
              required
            />
          </div>

          <div className='flex flex-col relative mt-6'>
            <label className={login.loginForm.passwordSelected || login.loginForm.password !== '' ? 'absolute text-sm -translate-y-6 transition-all z-30' : 'absolute top-1 text-lg transition-all'} htmlFor='password'>Password</label>
            <input
              className='h-10 bg-neutral-background-1  border-b px-2'
              name='password'
              id='password'
              type={login.loginForm.type}
              value={login.loginForm.password}
              onChange={login.handleLoginFormChange}
              onSelect={login.handleLoginFormSelected}
              onBlur={login.handleLoginFormBlur}
              autoComplete='on'
              required
            />
            <button className='absolute top-3 right-2' type='button' onClick={login.changePasswordType}>
              {login.loginForm.type === 'password' ? <BiLowVision className='text-xl' /> : <BiShowAlt className='text-xl' />}
            </button>
          </div>

          <a className='text-neutral-foreground-3' href='#'>Forgot password?</a>

          <div className='flex flex-col gap-4'>
            <button className='p-2 rounded-lg font-semibold bg-neutral-background-inverted-base text-neutral-foreground-inverted-base' type='submit'>Login</button>
            <button className='p-2 rounded-lg font-semibold text-neutral-foreground-1'>Login with google</button>
          </div>
        </form>

        <p>Don't have an account? <a className='font-semibold' href='#'>Sign up</a></p>

      </article>
    </main>
  )
}
