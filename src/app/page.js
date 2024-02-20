import Section from '../components/Section'
import Button from '../components/Button'
import SponsorsList from '../components/SponsorsList'
import Programming from '../components/Programming'
import { AssetPrimary, AssetOne, AssetTwo, AssetThree } from '../assets/assets'
import Link from 'next/link'
import Image from 'next/image'

const sponsorsList = [
  {
    title: 'Tay',
    image: '/images/Tay.png',
    link: 'https://articulo.mercadolibre.com.ar/MLA-1619241544-miel-de-monte-tay-12kg-x3-_JM'
  },
  {
    title: 'Gabriel Martoglio',
    image: '/images/Gabriel-Martoglio.png',
    link: 'https://www.abog-martoglio.com/'
  },
  {
    title: 'Guairúru',
    image: '/images/Guairuru.png',
    link: 'https://twitter.com/guairuru?lang=es'
  },
  {
    title: 'Cuántica',
    image: '/images/Cuantica.png',
    link: 'https://www.instagram.com/cuantica___/'
  },
  {
    title: 'Selva C. Rovetta',
    image: '/images/Selva-Rovetta.png',
    link: 'mailto:selvaclarovetta@gmail.com'
  },
  {
    title: 'Sabores de la Montaña',
    image: '/images/Sabores-de-la-montaña.png',
    link: 'https://www.facebook.com/people/Sabores-de-la-Monta%C3%B1a/100057717631227/'
  },
  {
    title: 'Kenai',
    image: '/images/Kenai.png',
    link: 'tel:3549551888'
  },
  {
    title: 'Estudio Genera',
    image: '/images/Estudio-genera.png',
    link: 'https://www.estudiogenera.com/'
  },
  {
    title: 'Bon Appetit',
    image: '/images/Bon-Appetit.png',
    link: 'tel:3549550614'
  },
  {
    title: 'La Comarca a granel',
    image: '/images/La-comarca.png',
    link: 'https://www.instagram.com/lacomarcaagranel/?hl=es'
  },
  {
    title: 'MeryHuén Holística',
    image: '/images/MeryHuen-Holistica.png',
    link: 'tel:1164543856'
  },
  {
    title: 'PapaloteCrea',
    image: '/images/Papalote.png',
    link: 'https://www.instagram.com/papalotecrea/?img_index=1'
  },
  {
    title: 'Indot',
    image: '/images/Indot.png',
    link: 'mailto:servicios@indot.com.ar'
  },
  {
    title: 'Casa Malvón',
    image: '/images/Casa-Malvon.png',
    link: 'mailto:servicios@indot.com.ar'
  }
]

const Home = () => {
  return (
    <>
      <header className="flex space-between mt-0 relative min-h-screen px-10">
        <div className="hero-content flex-row-reverse">
          <h1 className="font-bold text-8xl text-balance leading-[7rem]">
            Escuchanos en vivo por{' '}
            <span className="text-primary font-extrabold">100.7 FM</span>
          </h1>
          <AssetPrimary />
        </div>
      </header>
      <main className="px-8 pb-10 pt-24 min-h-screen">
        <Section className="programming">
          <h2 id="programming">Nuestra programación</h2>
          <Programming />
        </Section>
        <AssetTwo />
        <Section className="recorders">
          <h2 id="recorders">Reviví algunos momentos!</h2>
          <Programming />
        </Section>
        <AssetOne />
        <Section className="sponsors">
          <article className="pb-8">
            <h2 id="sponsors">Conocé los negocios con los que trabajamos</h2>
            <SponsorsList sponsors={sponsorsList} />
          </article>
          <article className="flex justify-between items-center h-[30rem]">
            <div className="absolute max-w-full flex justify-between w-full -z-10">
              <figure>
                <AssetThree />
              </figure>
              <figure>
                <AssetThree />
              </figure>
            </div>
            <h2 className="text-left">¿Querés formar parte?</h2>
            <div className="flex flex-col items-center gap-11">
              <p className="text-center w-1/2">
                Te invitamos a que visites nuestro espacio publicitario donde
                encontraras promociones por radio, avisos, y la oportunidad de
                aparecer junto a nuestros sponsors
              </p>
              <Link href="/quienes-somos">
                <Button>Más información</Button>
              </Link>
            </div>
          </article>
        </Section>
        <Section className="location flex flex-row flex-no-wrap justify-around w-full items-center h-[40rem]">
          <div className="absolute max-w-full flex justify-between skew-y-[4deg] -skew-x-[4deg] w-full -z-10">
            <picture className="w-[500px] h-[600px] transform -left-28">
              <Image
                className="bordered h-full w-auto border-[8px] border-primary rounded-3xl"
                src="/images/imagen-11.png"
                alt="Puente peatonal con vista al río"
                width={500}
                height={500}
              />
            </picture>
            <picture className="w-[500px] h-[600px] -right-28">
              <Image
                className="bordered h-full w-auto border-[8px] border-primary rounded-3xl"
                src="/images/imagen-1.png"
                alt="Casa rodante en una calle de tierra rodeada de árboles"
                width={450}
                height={450}
              />
            </picture>
          </div>
          <header className="flex flex-col items-center text-center space-y-12 max-w-[500px]">
            <h2 id="location" className="mb-0">
              ¡Conocé donde nos encontramos!
            </h2>
            <p className="text-balance">
              Ideas en el aire se encuentra en San Marcos Sierras, provincia de
              Córdoba. Te invitamos a que conozcas algunos de nuestros paisajes
              naturales, nuestras instituciones y actividades que se realizan,
              ¡entre otras cosas de interés!
            </p>
            <Link href="/san-marcos-sierras">
              <Button>Descubrí más</Button>
            </Link>
          </header>
        </Section>
      </main>
    </>
  )
}

export default Home
