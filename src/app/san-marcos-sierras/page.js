import Section from '../../components/Section'
import { AssetOne, AssetPrimary } from '../../assets/assets'
import InstitutesCards from '@/components/InstitutesCards'

const SanMarcosSierras = () => {
  return (
    <>
      <header className='flex space-between mt-0 relative min-h-screen px-10 overflow-x-hidden'>
        <div className='hero-content flex-row-reverse'>
          <h1 className='font-bold text-8xl text-balance leading-[7rem]'>
            Conocé San Marcos
            <br />
            <span>Sierras</span>
          </h1>
          <AssetPrimary />
        </div>
      </header>
      <main className='px-8 pb-10 pt-24 min-h-screen'>
        <Section className='pictures'>
          <h2>Algunos de los paisajes que nos representan</h2>
          <section id='galery'>
            <img src='/images/imagen-2.jpg'></img>
            <img src='/images/imagen-3.jpg'></img>
            <img src='/images/imagen-4.jpg'></img>
            <img src='/images/imagen-5.jpg'></img>
            <img src='/images/imagen-6.jpg'></img>
            <img src='/images/imagen-7.jpg'></img>
            <img src='/images/imagen-8.jpg'></img>
            <img src='/images/imagen-9.jpg'></img>
            <img src='/images/imagen-10.jpg'></img>
            <img src='/images/imagen-11.png'></img>
            <img src='/images/imagen-12.jpg'></img>
            <img src='/images/imagen-13.jpg'></img>
            <img src='/images/imagen-14.jpg'></img>
            <img src='/images/imagen-15.jpg'></img>
            <img src='/images/imagen-16.jpg'></img>
          </section>
          <AssetOne className='mx-auto' />
        </Section>
        <Section id='institutes'>
          <h2>Contá con el apoyo de nuestras instituciones</h2>
          <InstitutesCards />
        </Section>
        <Section id='location'>
          <h2>¿Cómo llegar? </h2>
          <article>
            mapita google
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13710.511557186914!2d-64.6429507!3d-30.785021649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942deb751d30a281%3A0xcf3af38a9ae4d221!2sSan%20Marcos%20Sierras%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2suy!4v1708959016743!5m2!1ses!2suy' width='600' height='450' style={{ border: 0 }} allowfullscreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
            </article>
          <article>Horario de colectivo</article>
          <h3 className='text-center text-[5rem] text-primary uppercase font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent from-15% via-primary via-60% to-secondary to-100% p-16'>¡Los esperamos!</h3>
        </Section>
      </main>
    </>
  )
}

export default SanMarcosSierras
