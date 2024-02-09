import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import SponsorsList from '../components/SponsorsList'
import { AssetPrimary, AssetOne, AssetTwo, AssetThree } from '../assets/assets'
import Link from 'next/link'
import Image from 'next/image'

const newsList = [
  {
    title: 'Noticia 1',
    description: 'Descripción de la noticia 1',
    image: '/barquito.png'
  },
  {
    title: 'Noticia 2',
    description: 'Descripción de la noticia 2',
    image: '/barquito.png'
  },
  {
    title: 'Noticia 3',
    description: 'Descripción de la noticia 3',
    image: '/barquito.png'
  }
]

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
  const newsToRender = newsList.map((news, index) => {
    return (
      <Card
        key={index}
        title={news.title}
        description={news.description}
        image={news.image}
      />
    )
  })

  return (
    <>
      <header className="flex space-between mt-0 relative min-h-screen px-10 overflow-x-hidden">
        <div className="hero-content flex-row-reverse">
          <h1 className="font-bold text-8xl text-balance leading-[7rem]">
            Escuchanos en vivo por{' '}
            <span className="text-primary font-extrabold">100.7 FM</span>
          </h1>
          <AssetPrimary />
        </div>
      </header>
      <main className="px-8 pb-10 pt-24 min-h-screen overflow-x-hidden">
        <Section className="programming">
          <h2 id="programming">Nuestra programación</h2>
        </Section>
        <AssetTwo />
        <Section className="news">
          <h2 id="news">Mirá algunas de las noticias recientes</h2>
          <div className="flex">{newsToRender}</div>
          <Link href="/noticias">
            <Button>Ver más</Button>
          </Link>
        </Section>
        <AssetOne />
        <Section className="sponsors">
          <article className="pb-8">
            <h2 id="sponsors">Conocé los negocios con los que trabajamos</h2>
            <SponsorsList sponsors={sponsorsList} />
          </article>
          <article className="flex justify-between">
            <AssetThree />
            <h2>¿Querés formar parte?</h2>
            <p className="text-center w-1/2">
              Te invitamos a que visites nuestro espacio publicitario donde
              encontraras promociones por radio, avisos, y la oportunidad de
              aparecer junto a nuestros sponsors
            </p>
            <Link href="/quienes-somos">
              <Button>Más información</Button>
            </Link>
            <AssetThree />
          </article>
        </Section>
        <Section className="location flex">
          <div className="card card-bordered border-4 border-purple-600 image-full w-[300px] transform skew-y-[8deg] -skew-x-[8deg] -left-28">
            <figure>
              <Image
                src="/barquito.png"
                alt="Barquito"
                width={300}
                height={300}
              />
            </figure>
          </div>
          <div className="flex flex-col items-center text-center space-y-12">
            <h2 id="location">¡Conocé donde nos encontramos!</h2>
            <p>
              Ideas en el aire se encuentra en San Marcos Sierras, provincia de
              Córdoba. Te invitamos a que conozcas algunos de nuestros paisajes
              naturales, nuestras instituciones y actividades que se realizan,
              ¡entre otras cosas de interés!
            </p>
            <Link href="/san-marcos-sierras">
              <Button>Descubrí más</Button>
            </Link>
          </div>
        </Section>
      </main>
    </>
  )
}

export default Home
