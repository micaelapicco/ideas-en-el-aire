import Section from '../components/Section'
import Programming from '../components/Programming'
import { AssetOne, AssetTwo } from '../assets/assets'
import Hero from '../components/Hero'
import Location from '@/components/Location'
import Sponsors from '@/components/Sponsors'
import ProgrammingAccordion from '@/components/ProgrammingAccordion'
import { Play } from '../components/Icons'

const Home = () => {
  return (
    <>
      <Hero />
      <main className='min-h-screen'>
        <AssetTwo />
        <Section id='programming'>
          <h2 className='flex justify-center items-center text-4xl md:text-5xl'>
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
