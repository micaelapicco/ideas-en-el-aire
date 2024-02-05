import Image from 'next/image'

const Card = ({ key, title, description, image }) => {
  return (
    <article key={key}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Image src={image} width={50} height={100} alt="photo" />
    </article>
  )
}

export default Card
