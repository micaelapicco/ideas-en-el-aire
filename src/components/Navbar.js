import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flex p-8 items-center fixed w-full flex-no-wrap bg-base-100 left-0'>
      <Link href='/'>
        <div className='flex items-center space-x-4'>
          <Image
            src='/logo.svg'
            alt='Ideas en el Aire'
            width={32}
            height={32}
          />
          <span>Ideas en el aire</span>
        </div>
      </Link>
      <ul className='flex gap-6'>
        <li>
          <Link href='/#programming'>Programación</Link>
        </li>
        <li>
          <Link href='/#news'>Noticias</Link>
        </li>
        <li>
          <Link href='/#sponsors'>Sponsors</Link>
        </li>
        <li>
          <Link href='/#location'>San Marcos Sierras</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
