import Section from "../../components/Section";

const SanMarcosSierras = () => {
  return (
    <main>
      <Section className="activities">
        <h2>Te invitamos a las siguientes actividades</h2>
      </Section>
      <Section className="pictures">
        <h2>Algunos de los paisajes que nos representan</h2>
      </Section>
      <Section className="institutes">
        <h2>Contá con el apoyo de nuestras instituciones</h2>
      </Section>
      <Section className="location">
        <h2>Cómo llegar? </h2>
        <article>mapita google</article>
        <article>Horario de colectivo</article>
      </Section>
    </main>
  );
};

export default SanMarcosSierras;
