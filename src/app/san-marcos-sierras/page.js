import Section from '../../components/Section'
import { AssetOne } from '../../assets/assets'
import InstitutesCards from '@/components/InstitutesCards'
import Slider from '@/components/Slider'
import Hero from '@/components/Hero'
import HeroTitle from '@/components/Hero/HeroTitle'
import HeroParagraph from '@/components/Hero/HeroParagraph'

const SanMarcosSierras = () => {
  return (
    <>
      <Hero>
        <HeroTitle>
          Conocé{' '}
          <strong>
            San Marcos Sierras
          </strong>
        </HeroTitle>
        <HeroParagraph>
          San Marcos Sierras ubicado entre las Sierras de Córdoba, Argentina, es un lugar único en el mundo, con paisajes
          increíbles, una comunidad cálida y una cultura que se respira en cada
          rincón.
        </HeroParagraph>
      </Hero>
      <main className='px-8 pb-10 pt-24 min-h-screen'>
        <Section className='pictures' id='gallery'>
          <h2 className='title-center'>
            Algunos de los paisajes que nos representan
          </h2>
          <Slider />
          <AssetOne className='mx-auto' />
        </Section>
        <Section id='institutes' className='mb-10'>
          <h2 className='title-center'>
            Contá con el apoyo de{' '}
            <span className='underline text-primary'>
              nuestras instituciones
            </span>
          </h2>
          <InstitutesCards />
        </Section>
        <Section id='location'>
          <h2 className='title-center'>¿Cómo llegar? </h2>
          <article>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13710.511557186914!2d-64.6429507!3d-30.785021649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942deb751d30a281%3A0xcf3af38a9ae4d221!2sSan%20Marcos%20Sierras%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2suy!4v1708959016743!5m2!1ses!2suy'
              width='100%'
              height='auto'
              className='border-none aspect-square max-w-lg mx-auto'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </article>
          <h3 className='text-center text-3xl lg:text-[5rem] text-primary uppercase font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent from-15% via-primary via-60% to-secondary to-100% my-8 py-7'>
            ¡Los esperamos!
          </h3>
        </Section>
      </main>
    </>
  )
}

export default SanMarcosSierras
