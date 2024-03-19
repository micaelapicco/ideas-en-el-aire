import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import { Menu } from './Icons'

const Navbar = () => {
  return (
    <nav className='navbar bg-base-100/55 py-[20px] px-[30px] sticky top-0 z-10 justify-between backdrop-blur-lg'>
      <div className='navbar-start w-full flex-row-reverse justify-between xl:w-auto'>
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} role='button' className='btn btn-ghost p-0 xl:hidden'>
            <Menu />
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-2xl'
          >
            <li>
              <Link href='/#programming'>Programación</Link>
            </li>
            <li>
              <Link href='/#sponsors'>Sponsors</Link>
            </li>
            <li>
              <Link href='/san-marcos-sierras'>San Marcos Sierras</Link>
              <ul className='p-2'>
                <li>
                  <Link href='/san-marcos-sierras/#gallery'>Galería</Link>
                </li>
                <li>
                  <Link href='/san-marcos-sierras/#institutes'>
                    Instituciones
                  </Link>
                </li>
                <li>
                  <Link href='/san-marcos-sierras/#location'>
                    ¿Cómo llegar?
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/sobre-nosotros'>Sobre nosotros</Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
        <Link href='/' className='text-2xl flex items-center space-x-2'>
          <Image
            src='/logo-nav.svg'
            alt='Ideas en el aire logo'
            width={0}
            height={0}
            className='w-auto h-auto'
          ></Image>
          <span className='font-semibold'>Ideas en el aire</span>
        </Link>
      </div>
      <div className='navbar-center hidden xl:flex'>
        <ul className='menu menu-horizontal px-1 text-xl flex-nowrap'>
          <li>
            <Link href='/#programming'>Programación</Link>
          </li>
          <li>
            <Link href='/#sponsors'>Sponsors</Link>
          </li>
          <li>
            <details>
              <summary>
                <Link href='/san-marcos-sierras'>San Marcos Sierras</Link>
              </summary>
              <ul className='p-2'>
                <li>
                  <Link href='/san-marcos-sierras/#gallery'>Galería</Link>
                </li>
                <li>
                  <Link href='/san-marcos-sierras/#institutes'>
                    Instituciones
                  </Link>
                </li>
                <li>
                  <Link href='/san-marcos-sierras/#location'>
                    ¿Cómo llegar?
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href='/sobre-nosotros'>Sobre nosotros</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end w-fit hidden xl:block'>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar
