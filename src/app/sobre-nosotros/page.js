import Section from '../../components/Section'
import { AssetPrimary } from '@/assets/assets'
const QuienesSomos = () => {
  return (
    <>
      <header className='flex space-between mt-0 relative min-h-screen px-10 overflow-x-hidden'>
        <div className='hero-content flex-row-reverse'>
          <h1 className='font-bold text-8xl text-balance leading-[7rem]'>
            Quiénes Somos?
          </h1>
          <AssetPrimary />
        </div>
      </header>
      <main className='px-8 pb-10 pt-24 min-h-screen'>
        <Section id='monthly'>
          <h2>Ideas en el aire</h2>
        </Section>
      </main>
    </>
  )
}

export default QuienesSomos
