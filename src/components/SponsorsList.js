import SponsorItem from './SponsorItem'

const SponsorsList = ({ sponsors }) => {
  const sponsorsToRender = sponsors.map((sponsor, index) => {
    return <SponsorItem sponsor={sponsor} key={index} />
  })

  return <div className='flex flex-wrap justify-center gap-10'>{sponsorsToRender}</div>
}

export default SponsorsList
