import styles from './CardLocation.module.css'
import Image from 'next/image'

const CardLocation = () => {
  return (
    <div className={styles.locationCardsWrapper}>
      <picture className={`${styles.leftCard} ${styles.locationCard}`} >
        <Image
          className={styles.locationImage}
          src='/images/imagen-11.png'
          alt='Puente peatonal con personas encima observando el cielo y un ómnibus pasando por debajo'
          width={500}
          height={500}
        />
      </picture>
      <picture className={`${styles.rightCard} ${styles.locationCard}`}>
        <Image
          className={styles.locationImage}
          src='/images/imagen-1.png'
          alt='Mujer en medio de la calle con perro y combi atrás'
          width={450}
          height={450}
        />
      </picture>
    </div>
  )
}

export default CardLocation
