import Link from 'next/link'
import Image from 'next/image'

const SponsorItem = ({ sponsor, key }) => {
  return (
    <article key={key}>
      <Link href={sponsor.link} target='_blank noopener noreferrer'>
        <Image
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
