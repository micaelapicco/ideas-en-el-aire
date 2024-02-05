import Section from '../components/Section'
import Card from '../components/Card'

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
    image: '/barquito.png',
    link: 'https://articulo.mercadolibre.com.ar/MLA-1619241544-miel-de-monte-tay-12kg-x3-_JM'
  },
  {
    title: 'Gabriel Martoglio',
    image: '/barquito.png',
    link: 'https://www.abog-martoglio.com/'
  },
  {
    title: 'Guairúru',
    image: '/barquito.png',
    link: 'https://twitter.com/guairuru?lang=es'
  },
  {
    title: 'Cuántica',
    image: '/barquito.png',
    link: 'https://www.instagram.com/cuantica___/'
  },
  {
    title: 'Selva C. Rovetta',
    image: '/barquito.png',
    link: 'mailto:selvaclarovetta@gmail.com'
  },
  {
    title: 'Sabores de la Montaña',
    image: '/barquito.png',
    link: 'https://www.facebook.com/people/Sabores-de-la-Monta%C3%B1a/100057717631227/'
  },
  {
    title: 'Kenai',
    image: '/barquito.png',
    link: 'https://www.google.com'
  },
  {
    title: 'Estudio Genera',
    image: '/barquito.png',
    link: 'https://www.estudiogenera.com/'
  },
  {
    title: 'Bon Appetit',
    image: '/barquito.png',
    link: 'https://www.google.com'
  },
  {
    title: 'La Comarca',
    image: '/barquito.png',
    link: 'https://www.google.com'
  },
  {
    title: 'MeryHuén Holística',
    image: '/barquito.png',
    link: 'https://www.google.com'
  },
  {
    title: 'PapaloteCrea',
    image: '/barquito.png',
    link: 'https://www.google.com'
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
    <main className="px-8 pb-10 pt-24 min-h-screen">
      <Section className="programming">
        <h2 id="programming">Nuestra programación</h2>
      </Section>
      <Section className="news">
        <h2 id="news">Mirá algunas de las noticias recientes</h2>
        {newsToRender}
      </Section>
      <Section className="sponsors">
        <article>
          <h2 id="sponsors">Conocé los negocios con los que trabajamos</h2>
        </article>
        <article>
          <h2>Querés formar parte?</h2>
          <p>
            Te invitamos a que visites nuestro espacio publicitario donde
            encontraras promociones por radio, avisos, y la oportunidad de
            aparecer junto a nuestros sponsors
          </p>
        </article>
      </Section>
      <Section className="location">
        <h2 id="location">¡Conoce donde nos encontramos!</h2>
        <p>
          Ideas en el aire se encuentra en San Marcos Sierras, provincia de
          Córdoba. Te invitamos a que conozcas algunos de nuestros paisajes
          naturales, nuestras instituciones y actividades que se realizan,
          ¡entre otras cosas de interés!
        </p>
      </Section>
    </main>
  )
}

export default Home
