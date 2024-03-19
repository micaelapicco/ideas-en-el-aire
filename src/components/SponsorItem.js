import Link from 'next/link'
import Image from 'next/image'
import styles from './SponsorItem.module.css'

const SponsorItem = ({ sponsor, key }) => {
  return (
    <article key={key} className={styles.article}>
      <Link href={sponsor.link} target='_blank noopener noreferrer' data-tip={sponsor.title}>
        <Image
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
