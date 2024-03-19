import Section from '../components/Section'
import Programming from '../components/Programming'
import { AssetOne, AssetTwo } from '../assets/assets'
import Hero from '../components/Hero'
import Location from '@/components/Location'
import Sponsors from '@/components/Sponsors'
import ProgrammingAccordion from '@/components/ProgrammingAccordion'
import { Play } from '../components/Icons'
import HeroTitle from '@/components/Hero/HeroTitle'
import HeroParagraph from '@/components/Hero/HeroParagraph'

const Home = () => {
  return (
    <>
      <Hero>
        <HeroTitle>
          Escuchanos en vivo por{' '}
          <strong>100.7 FM</strong>
        </HeroTitle>
        <HeroParagraph>
          ¡Déjate llevar por la música y las historias que inspiran en Ideas
          en el Aire, estés donde estés!
        </HeroParagraph>
      </Hero>
      <main className='min-h-screen'>
        <AssetTwo />
        <Section id='programming'>
          <h2 className='title-center flex justify-center items-center'>
            Nuestra programación&nbsp;
            <Play />
          </h2>
          <Programming />
          <ProgrammingAccordion />
        </Section>
        <AssetOne />
        <Section id='sponsors'>
          <Sponsors />
        </Section>
        <Section
          id='location'
          className='flex relative flex-row flex-no-wrap justify-around w-full items-center h-[40rem]'
        >
          <Location />
        </Section>
      </main>
    </>
  )
}

export default Home
