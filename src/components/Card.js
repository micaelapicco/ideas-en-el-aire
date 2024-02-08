import Image from 'next/image'
import Button from './Button'

const Card = ({ key, title, description, image }) => {
  return (
    <article key={key} className='card w-96 bg-base-100 outline-2 outline-blue'>
      <div className="card-body">
        <h3 className='card-title'>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-actions">
        <Button className="btn btn-primary">
          Leer más
        </Button>
      </div>
      <figure><Image src={image} width={50} height={100} alt="photo" /></figure>
    </article>
  )
}

export default Card
