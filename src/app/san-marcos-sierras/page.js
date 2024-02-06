import Section from "../../components/Section";
import { AssetOne, AssetPrimary } from "../../assets/assets";
const SanMarcosSierras = () => {
  return (
    <main className="px-8 pb-10 pt-24 min-h-screen">
      <div className="space-between flex">
        <h1>Conocé San Marcos Sierras</h1>
        <AssetPrimary />
      </div>
      <Section className="pictures">
        <h2>Algunos de los paisajes que nos representan</h2>
        <section className="galery">
          <img src="/images/imagen-2.jpg"></img>
          <img src="/images/imagen-3.jpg"></img>
          <img src="/images/imagen-4.jpg"></img>
          <img src="/images/imagen-5.jpg"></img>
          <img src="/images/imagen-6.jpg"></img>
          <img src="/images/imagen-7.jpg"></img>
          <img src="/images/imagen-8.jpg"></img>
          <img src="/images/imagen-9.jpg"></img>
          <img src="/images/imagen-10.jpg"></img>
          <img src="/images/imagen-11.jpg"></img>
          <img src="/images/imagen-12.jpg"></img>
          <img src="/images/imagen-13.jpg"></img>
          <img src="/images/imagen-14.jpg"></img>
          <img src="/images/imagen-15.jpg"></img>
          <img src="/images/imagen-16.jpg"></img>
        </section>
        <AssetOne className="mx-auto" />
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
