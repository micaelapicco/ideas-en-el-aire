import Section from "../components/Section";

const Home = () => {
  return (
    <main className="px-8 pb-10">
      <Section className="programming">
        <h2 id="programming">Nuestra programación</h2>
      </Section>
      <Section className="news">
        <h2 id="news">Mirá algunas de las noticias recientes</h2>
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
  );
};

export default Home;
