import Section from "../components/Section";

const Home = () => {
  return (
    <main>
      <Section className="programming">
        <h2>Nuestra programación</h2>
      </Section>
      <Section className="news">
        <h2>Mirá algunas de las noticias recientes</h2>
      </Section>
      <Section className="sponsors">
        <h2>Conocé los negocios con los que trabajamos</h2>
        <h2>Querés formar parte?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          auctor, tellus ut commodo pretium, diam turpis fringilla felis, eu
          rhoncus ipsum nisi id orci. Curabitur dapibus elementum nisi ut
          fermentum. Phasellus tellus lorem, fringilla sit amet sem nec, cursus
          aliquet lectus. Donec molestie odio elit, nec consequat magna
          scelerisque a. Donec efficitur facilisis magna accumsan maximus.
          Maecenas placerat felis vitae elit eleifend, in dictum lectus
          pharetra. Quisque at efficitur tellus.
        </p>
      </Section>
      <Section className="location">
        <h2>¡Conoce donde nos encontramos!</h2>
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
