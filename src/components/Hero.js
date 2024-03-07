import { AssetPrimary } from '../assets/assets'

const Hero = () => {
  return (
    <header className='hero min-h-[calc(100vh-4rem)] px-9 xl:px-10'>
      <div className='hero-content w-full text-center md:text-left md:items-start md:justify-start'>
        <div className='max-w-md -m-8'>
          <h1 className='text-5xl font-bold text-balance md:text-6xl xl:text-[5rem]'>
            Escuchanos en vivo por {' '}
            <strong className='text-primary font-extrabold'>100.7 FM</strong>
          </h1>
          <p className='py-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto natus ad facere nemo sunt amet doloribus.
          </p>
        </div>
      </div>
      <AssetPrimary />
    </header>
  )
}

export default Hero
