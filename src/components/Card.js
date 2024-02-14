import Image from 'next/image'

const Card = ({ key, title, description, image }) => {
  return (
    <article className="bg-gradient-to-b from-accent via-primary to-secondary p-2 rounded-2xl">
      <article
        key={key}
        className="card card-bordered w-[23vw] h-[70vh] bg-base-100"
      >
        <div className="card-actions pl-8 mt-8 items-start">
          <div className="badge badge-outline badge-secondary">Placeholder</div>
        </div>
        <div className="card-body h-[20vh]">
          <h3 className="card-title font-bold text-2xl mb-2">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-actions pl-8 mb-8 items-start">
          <button className="bg-transparent text-accent uppercase font-bold tracking-widest text-sm">
            Leer más
          </button>
        </div>
        <picture>
          <Image src={image} width={500} height={100} alt="photo" />
        </picture>
      </article>
    </article>
  )
}

export default Card
