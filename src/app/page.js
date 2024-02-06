import Section from "../components/Section";
import Card from "../components/Card";
import SponsorsList from "../components/SponsorsList";

const newsList = [
  {
    title: "Noticia 1",
    description: "Descripción de la noticia 1",
    image: "/barquito.png",
  },
  {
    title: "Noticia 2",
    description: "Descripción de la noticia 2",
    image: "/barquito.png",
  },
  {
    title: "Noticia 3",
    description: "Descripción de la noticia 3",
    image: "/barquito.png",
  },
];

const sponsorsList = [
  {
    title: "Tay",
    image: "/images/Tay.jpeg",
    link: "https://articulo.mercadolibre.com.ar/MLA-1619241544-miel-de-monte-tay-12kg-x3-_JM",
  },
  {
    title: "Gabriel Martoglio",
    image: "/images/Gabriel-Martoglio.jpeg",
    link: "https://www.abog-martoglio.com/",
  },
  {
    title: "Guairúru",
    image: "/images/Guairuru.jpeg",
    link: "https://twitter.com/guairuru?lang=es",
  },
  {
    title: "Cuántica",
    image: "/images/Cuantica.jpeg",
    link: "https://www.instagram.com/cuantica___/",
  },
  {
    title: "Selva C. Rovetta",
    image: "/barquito.spng",
    link: "mailto:selvaclarovetta@gmail.com",
  },
  {
    title: "Sabores de la Montaña",
    image: "/barquito.png",
    link: "https://www.facebook.com/people/Sabores-de-la-Monta%C3%B1a/100057717631227/",
  },
  {
    title: "Kenai",
    image: "/barquito.png",
    link: "tel:3549551888",
  },
  {
    title: "Estudio Genera",
    image: "/barquito.png",
    link: "https://www.estudiogenera.com/",
  },
  {
    title: "Bon Appetit",
    image: "/barquito.png",
    link: "tel:3549550614",
  },
  {
    title: "La Comarca a granel",
    image: "/barquito.png",
    link: "https://www.instagram.com/lacomarcaagranel/?hl=es",
  },
  {
    title: "MeryHuén Holística",
    image: "/barquito.png",
    link: "tel:1164543856",
  },
  {
    title: "PapaloteCrea",
    image: "/barquito.png",
    link: "https://www.instagram.com/papalotecrea/?img_index=1",
  },
  {
    title: "Indot",
    image: "/barquito.png",
    link: "mailto:servicios@indot.com.ar",
  },
  {
    title: "Casa Malvón",
    image: "/barquito.png",
    link: "mailto:servicios@indot.com.ar",
  },
];

const Home = () => {
  const newsToRender = newsList.map((news, index) => {
    return (
      <Card
        key={index}
        title={news.title}
        description={news.description}
        image={news.image}
      />
    );
  });

  return (
    <main className="px-8 pb-10 pt-24 min-h-screen">
      <h1>Escuchanos en vivo por 100.7 FM</h1>
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
          <SponsorsList sponsors={sponsorsList} />
        </article>
        <article>
          <h2>Querés formar parte?</h2>
          <p>
            s Te invitamos a que visites nuestro espacio publicitario donde
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
  );
};

export default Home;
