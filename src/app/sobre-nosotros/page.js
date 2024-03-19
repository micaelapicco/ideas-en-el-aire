import { Poppins } from 'next/font/google'
import Section from '../../components/Section'
import { AssetPrimary } from '@/assets/assets'
import HeroTitle from '@/components/Hero/HeroTitle'
import Hero from '@/components/Hero'
import {
  Hashtag,
  LiveAudio,
  Museum,
  Address,
  Community,
  Music
} from '@/components/Icons'
import HeroParagraph from '@/components/Hero/HeroParagraph'
import Marquee from 'react-fast-marquee'
import styles from './sobre-nosotros.module.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '900'] })

const identityWords = [
  'radio',
  'productora',
  'comunidad conectada',
  'difusión cultural',
  'calidad y variedad'
]

const contentWords = [
  'investigación musical',
  'entrevistas exclusivas',
  'eventos únicos',
  'redes sociales',
  'san marcos sierras'
]

const renderWords = (words) => {
  return words.map((word, index) => (
    <span key={`${word}${index}`}>&bull; {word}</span>
  ))
}

const QuienesSomos = () => {
  return (
    <>
      <Hero>
        <HeroTitle>
          Sobre <strong>Ideas en el Aire</strong>
        </HeroTitle>
        <HeroParagraph>
          Somos una productora de contenido con una amplia trayectoria en radio,
          redes sociales y eventos. Nos caracterizamos por nuestra variedad y
          calidad, así como por nuestro compromiso con la comunidad y difusión
          cultural.
        </HeroParagraph>
        <AssetPrimary />
      </Hero>

      <main className='pb-10 pt-24 min-h-screen'>
        <Section id='aboutUs'>
          <div className={styles.marqueeWrapper}>
            <Marquee className={`${styles.marquee} ${poppins.className}`} speed={30} autoFill>
              { renderWords(identityWords) }
            </Marquee>
            <Marquee className={`${styles.marquee} ${poppins.className}`} speed={30} direction='right' autoFill>
              { renderWords(contentWords) }
            </Marquee>
          </div>
          <article className='stats flex justify-center items-center mt-36'>
            <div className='stats stats-vertical lg:stats-horizontal shadow'>
            <div className='stat'>
              <div className={`stat-title ${styles.statTitle}`}>Antiguedad</div>
              <div className={`stat-value ${styles.statValue}`}><span className='text-accent'>+</span>10</div>
              <div className={`stat-desc ${styles.statDesc}`}>años</div>
            </div>
            <div className={`stat ${styles.statBorder}`}>
              <div className={`stat-title ${styles.statTitle}`}>Desde</div>
              <div className={`stat-value ${styles.statValue}`}>1756</div>
              <div className={`stat-desc ${styles.statDesc}`}>interés municipal</div>
            </div>
            <div className='stat border-l-transparent'>
              <div className={`stat-title ${styles.statTitle}`}>Seguidores</div>
              <div className={`stat-value ${styles.statValue}`}><span className='text-accent'>+</span>600</div>
              <div className={`stat-desc ${styles.statDesc}`}>en Instagram</div>
            </div>
            </div>
          </article>
          <article className='flex flex-col justify-items-center place-items-center mt-36'>
            <h2 className='title-responsive'>
              Lo que nos <span className={styles.stroke}>destaca</span>
            </h2>
            <ul className={styles.features}>
              <li className={styles.feature}>
                <span><Hashtag /></span>
                <div>
                  <h3>Productora</h3>
                  <p>Radio, redes sociales, ediciones, programas en vivo, producción, programación, spots, publicidad, eventos.</p>
                </div>
              </li>
              <div className='divider' />
              <li className={styles.feature}>
                <span><LiveAudio /></span>
                <div>
                  <h3>Experiencia en el rubro</h3>
                  <p>Investigación musical, difusión de diversos géneros, notas, entrevistas a artistas locales, nacionales e internacionales.</p>
                </div>
              </li>
              <div className='divider' />
              <li className={styles.feature}>
                <span><Museum /></span>
                <div>
                  <h3>Difusión cultural</h3>
                  <p>Trabajo de investigadores científicos, ambientalistas.</p>
                </div>
              </li>
              <div className='divider' />
              <li className={styles.feature}>
                <span><Address /></span>
                <div>
                  <h3>Información útil y práctica</h3>
                  <p>San Marcos Sierras.</p>
                </div>
              </li>
              <div className='divider' />
              <li className={styles.feature}>
                <span><Community /></span>
                <div>
                  <h3>Contacto con la comunidad</h3>
                  <p>Nexo entre vecinos, comunicación.</p>
                </div>
              </li>
              <div className='divider' />
              <li className={styles.feature}>
                <span><Music /></span>
                <div>
                  <h3>Compañía musical reconocida</h3>
                  <p>Variedad y calidad de selección.</p>
                </div>
              </li>
            </ul>
          </article>
        </Section>
      </main>
    </>
  )
}

export default QuienesSomos
