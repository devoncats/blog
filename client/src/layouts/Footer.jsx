import { BiMinus } from 'react-icons/bi'

export default function Footer () {
  return (
    <footer className='pt-12 pb-2 text-neutral-foreground bg-neutral-background'>
      <article className='flex items-center justify-center gap-4 text-center'>
        <h4>Creado por devoncats</h4>
        <BiMinus />
        <p>© 2023 Todos los derechos reservados</p>
      </article>
    </footer>
  )
}
