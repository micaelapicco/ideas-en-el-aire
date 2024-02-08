import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="flex justify-between p-8 items-center fixed w-full flex-no-wrap bg-base-100 left-0">
      <Link href="/">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo-nav.svg"
            alt="Ideas en el Aire"
            width={35}
            height={35}
          />
          <span className="font-bold text-2xl">Ideas en el aire</span>
        </div>
      </Link>
      <ul className="flex gap-8 items-center text-center">
        <li>
          <Link href="/#programming">Programación</Link>
        </li>
        <li>
          <Link href="/#news">Noticias</Link>
        </li>
        <li>
          <Link href="/#sponsors">Sponsors</Link>
        </li>
        <li>
          <Link href="/san-marcos-sierras">San Marcos Sierras</Link>
        </li>
        <li>
          <Link href="/quienes-somos">Quienes somos?</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
