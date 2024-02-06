import Section from "../../components/Section";

const QuienesSomos = () => {
  return (
    <main className="px-8 pb-10 pt-24 min-h-screen">
      <h1>Quienes somos?</h1>
      <Section className="monthly">
        <h2>Mensuales</h2>
      </Section>
      <Section className="events">
        <h2>Eventos Especiales</h2>
      </Section>
      <Section className="web">
        <h2>En la web</h2>
      </Section>
    </main>
  );
};

export default QuienesSomos;
