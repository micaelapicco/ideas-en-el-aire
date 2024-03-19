import { AssetPrimary } from '../../assets/assets'

const Hero = ({ children }) => {
  return (
    <header className='hero-header'>
      <div className='hero-content'>
        <div>
          {children}
        </div>
      </div>
      <AssetPrimary />
    </header>
  )
}

export default Hero
