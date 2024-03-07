import Link from 'next/link'
import Button from './Button'
import CardLocation from './CardLocation'

const Location = () => {
  return (
    <>
      <CardLocation />
      <article>
        {/* <div className='absolute -z-10'>
        <img className='mask mask-parallelogram' src='images/imagen-8.jpg' />
        <img className='mask mask-parallelogram' src='images/imagen-3.jpg' />
      </div> */}
        <header className='flex flex-col items-center text-center space-y-12 max-w-[500px] px-14 xl:px-0'>
          <h2 id='location' className='mb-0 text-4xl md:text-5xl'>
            ¡Conocé donde nos encontramos!
          </h2>
      <p className='text-balance'>
        Ideas en el aire se encuentra en San Marcos Sierras, provincia de
        Córdoba. Te invitamos a que conozcas algunos de nuestros paisajes
        naturales, nuestras instituciones y actividades que se realizan,
        ¡entre otras cosas de interés!
      </p>
          <Link href='/san-marcos-sierras'>
            <Button>Descubrí más</Button>
          </Link>
        </header>
      </article>
    </>
  )
}
export default Location
