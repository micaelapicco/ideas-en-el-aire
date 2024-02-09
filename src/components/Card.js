import Image from 'next/image'

const Card = ({ key, title, description, image }) => {
  return (
    <article className='bg-gradient-to-b from-accent via-primary to-secondary p-2 rounded-2xl'>
      <article
        key={key}
        className="card card-bordered w-[20vw] h-[60vh] bg-base-100"
      >
        <div className="card-body">
          <h3 className="card-title font-bold text-2xl">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-actions">
          <button className="bg-transparent text-accent uppercase font-bold tracking-widest">
            Leer más
          </button>
        </div>
        <figure>
          <Image src={image} width={50} height={100} alt="photo" />
        </figure>
      </article>
    </article>
  )
}

export default Card
