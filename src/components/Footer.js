import Link from 'next/link'
import { IEEAlogo, Coffee, Facebook, Instagram, Youtube } from './Icons'

const Footer = () => {
  return (
    <footer className='footer footer-center p-0 pb-[15px] mt-[20px] gap-[15px] bg-base-100 text-primary-content'>
      <aside className='text-base-content'>
        <IEEAlogo />
        <p className='font-bold'>
          Ideas en el Aire <br />
          <Link
            href='mailto:mensajeroradioquilpo@gmail.com'
            target='_blank noopener noreferrer'
          >
            mensajeroradioquilpo@gmail.com
          </Link>
          <span className='hidden md:inline'>&nbsp;|&nbsp;</span>
          <br className='block md:hidden' />
          <Link href='tel:03549-475474' target='_blank noopener noreferrer'>
            (03549) 475474
          </Link>
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className='text-base-content'>
        <div className='grid grid-flow-col gap-4'>
          <Link
            className='hover:scale-125 hover:opacity-70 transition inline-block'
            href='https://cafecito.app/ideasenelaire777'
            target='_blank noopener noreferrer'
          >
            <Coffee />
          </Link>
          <Link
            className='hover:scale-125 hover:opacity-70 transition inline-block'
            href='https://www.instagram.com/hoypuedeserungrandiahps/'
            target='_blank noopener noreferrer'
          >
            <Instagram />
          </Link>
          <Link
            className='hover:scale-125 hover:opacity-70 transition inline-block'
            href='https://www.facebook.com/radioquilpo'
            target='_blank noopener noreferrer'
          >
            <Facebook />
          </Link>
          <Link
            className='hover:scale-125 hover:opacity-70 transition inline-block'
            href='https://www.youtube.com/@ideasenelaire2345'
            target='_blank noopener noreferrer'
          >
            <Youtube />
          </Link>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
