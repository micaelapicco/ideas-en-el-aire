import Image from 'next/image'
import Link from 'next/link'
import { Coffee, Facebook, Instagram, Youtube } from './Icons'

const Footer = () => {
  return (
    <footer className='flex items-center justify-between p-8'>
      <div>
        <h3 className='uppercase'>Contacto</h3>
        <Link href='mailto:mensajeroradioquilpo@gmail.com'>
          <p>mensajeroradioquilpo@gmail.com</p>
        </Link>
        <Link href='tel:03549-475474'>
          <p>(03549) 475474</p>
        </Link>
      </div>

      <div className='text-center'>
        <Image
          className='mx-auto'
          src='/logo.svg'
          alt='Ideas en el Aire'
          width={32}
          height={32}
        />
        <p className='mt-2'>@ 2024 Ideas en el aire</p>
      </div>

      <ul className='flex space-x-5 items-center'>
        <li className='hover:scale-125 hover:opacity-70 transition inline-block'>
        <Link href='https://cafecito.app/ideasenelaire777' targe='_blank noopener noreferrer'>
          <Coffee />
        </Link>
        </li>
        <li className='hover:scale-125 hover:opacity-70 transition inline-block'>
          <Link href='https://www.facebook.com/radioquilpo' target='_blank noopener noreferrer'>
            <Facebook />
          </Link>
        </li>
        {/* <li>
          <Link href={}>
            <Twitter />
          </Link>
        </li> */}
        <li className='hover:scale-125 hover:opacity-70 transition inline-block'>
          <Link href='https://www.instagram.com/hoypuedeserungrandiahps/' target='_blank noopener noreferrer'>
            <Instagram />
          </Link>
        </li>
        <li className='hover:scale-125 hover:opacity-70 transition inline-block'>
          <Link href='https://www.youtube.com/@ideasenelaire2345' target='_blank noopener noreferrer'>
            <Youtube />
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
