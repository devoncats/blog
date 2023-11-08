import useThemeStore from '../stores/themeStore'
import { BiLowVision, BiShowAlt } from 'react-icons/bi'
import useLoginForm from '../hooks/useLoginForm'

export default function Login () {
  const theme = useThemeStore(theme => theme.theme)
  const login = useLoginForm()  

  return (
    <main className='h-screen w-screen grid place-content-center bg-[url("/bg.svg")] bg-cover text-neutral-foreground-1'>
      <article className='h-[50rem] w-[30rem] flex flex-col items-center justify-between p-12 rounded-lg bg-neutral-background-1'>
        <img className='w-44' src={theme === 'dark' ? '/logo-full-dark.svg' : '/logo-full.svg'} alt='' />

        <div className='relative grid gap-2 text-center'>
          <h1 className='text-4xl font-semibold'>Welcome back!</h1>
          <p className='text-sm text-neutral-foreground-3'>Please enter your details</p>
        </div>

        <form className='w-full grid gap-4' onSubmit={login.handleSubmit}>
          <div className='flex flex-col relative'>
            <label className={login.emailSelected || login.email !== '' ? 'absolute text-sm -translate-y-6 transition-all' : 'absolute top-1 text-lg transition-all'} htmlFor='email'>Email</label>
            <input
              className='h-10 bg-neutral-background-1 border-b px-2'
              name='email'
              id='email'
              type='email'
              value={login.email}
              onChange={login.handleEmail}
              onSelect={login.handleEmailSelected}
              onBlur={login.handleEmailBlur}
              autoComplete='current-password'
            />
          </div>

          <div className='flex flex-col relative mt-6'>
            <label className={login.passwordSelected || login.password !== '' ? 'absolute text-sm -translate-y-6 transition-all z-30' : 'absolute top-1 text-lg transition-all'} htmlFor='password'>Password</label>
            <input
              className='h-10 bg-neutral-background-1  border-b px-2'
              name='password'
              id='password'
              type={login.type}
              value={login.password}
              onChange={login.handlePassword}
              onSelect={login.handlePasswordSelected}
              onBlur={login.handlePasswordBlur}
              autoComplete='on'
            />
            <button className='absolute top-3 right-0' type='button' onClick={login.changePasswordType}>
              {login.passwordVisible ? <BiLowVision className='text-xl' /> : <BiShowAlt className='text-xl' />}
            </button>
          </div>

          <div className='flex justify-between'>
            <div className='flex items-center gap-1'>
              <input type='checkbox' name='remember' id='remember' />
              <label htmlFor='remember'>Remember me</label>
            </div>
            <a className='text-neutral-foreground-3' href='#'>Forgot password?</a>
          </div>

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
