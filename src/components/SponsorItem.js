import Link from 'next/link'
import Image from 'next/image'

const SponsorItem = ({ sponsor, key }) => {
  return (
    <article key={key} className='mb-12 lg:mb-0 hover:scale-110'>
      <Link href={sponsor.link} className='tooltip tooltip-primary' target='_blank noopener noreferrer' data-tip={sponsor.title}>
        <Image
          className='grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-300 ease-in-out cursor-pointer rounded-lg shadow-lg shadow-primary w-[250px] h-[250px]'
          src={sponsor.image}
          alt={sponsor.title}
          width={250}
          height={250}
        />
      </Link>
    </article>
  )
}

export default SponsorItem
