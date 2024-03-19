import Image from 'next/image'

const CardLocation = () => {
  return (
    <div className='hidden absolute max-w-full xl:flex justify-between skew-y-[4deg] -skew-x-[4deg] w-full -z-10'>
      <picture className='w-[500px] h-[600px] transform -left-28'>
        <Image
          className='object-cover bordered h-full w-auto border-[8px] border-primary rounded-3xl'
          src='/images/imagen-11.png'
          alt='Puente peatonal con personas encima observando el cielo y un ómnibus pasando por debajo'
          width={500}
          height={500}
        />
      </picture>
      <picture className='w-[500px] h-[600px] -right-28'>
        <Image
          className='object-cover bordered h-full w-auto border-[8px] border-primary rounded-3xl'
          src='/images/imagen-1.png'
          alt='Mujer en medio de la calle con perro y combi atrás'
          width={450}
          height={450}
        />
      </picture>
    </div>
  )
}

export default CardLocation
