import SponsorItem from './SponsorItem'

const SponsorsList = ({ sponsors }) => {
  const sponsorsToRender = sponsors.map((sponsor, index) => {
    return <SponsorItem sponsor={sponsor} key={index} />
  })

  return <div className='grid place-items-center justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>{sponsorsToRender}</div>
}

export default SponsorsList
