import Link from 'next/link'
import Image from 'next/image'

const SponsorItem = ({ sponsor, key }) => {
  return (
    <article key={key} className='mb-12 w-fit lg:mb-0'>
      <Link href={sponsor.link} target='_blank noopener noreferrer' className='w-fit'>
        <Image
          className='hover:scale-110 hover:opacity-70 transition duration-300 ease-in-out cursor-pointer'
          src={sponsor.image}
          alt={sponsor.title}
          width={100}
          height={100}
        />
      </Link>
    </article>
  )
}

export default SponsorItem
