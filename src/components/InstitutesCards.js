// import Image from 'next/image'
import { Address, Phone } from './Icons'

const institutes = [
  {
    name: 'Policía',
    type: 'Organismo',
    telephone: '101 / (03549) 496-020',
    address: 'Vélez Sarsfield 995',
    image: '/placeholder-image.png'
  },
  {
    name: 'Bomberos',
    type: 'Organismo',
    telephone: '100 / (03549) 496-203',
    address: 'Vélez Sarsfield y Rivadavia',
    image: '/placeholder-image.png'
  },
  {
    name: 'Centro de Integración Comunitario',
    type: 'Organismo',
    telephone: '(03549) 496-169',
    address: 'Vélez Sarsfield y Rivadavia',
    image: '/placeholder-image.png'
  },
  //   {
  //     name: 'Ambulancia',
  //     type: 'Emergencia',
  //     telephone: '(03549) 15-465455',
  //     image: '/placeholder-image.png'
  //   },
  {
    name: 'Municipalidad',
    type: 'Organismo',
    telephone: '(03549) 496-137',
    address: 'Vélez Sarsfield 1093',
    image: '/placeholder-image.png'
  },
  {
    name: 'Oficina turismo',
    type: 'Organismo',
    telephone: '(03549) 496-452',
    address: 'Plaza Cacique Tulián',
    image: '/placeholder-image.png'
  },
  {
    name: 'La Cooperativa',
    type: 'Organismo',
    telephone: '(03549) 496-134',
    address: 'San Martín 504',
    image: '/placeholder-image.png'
  },
  {
    name: 'Correo Argentino',
    type: 'Organismo',
    telephone: '(03549) 496-107',
    address: 'Libertad 841',
    image: '/placeholder-image.png'
  },
  {
    name: 'Escuela Roque Sáenz Peña',
    type: 'Centro educativo',
    telephone: '(03549) 496-984',
    address: 'Libertad 1075',
    image: '/placeholder-image.png'
  },
  {
    name: 'Escuela El Caracol',
    type: 'Centro educativo',
    telephone: '(03549) 15-637241',
    address: 'El Rincón, San Marcos Sierras',
    image: '/placeholder-image.png'
  },
  {
    name: 'IPEM 45 Dr Ernesto Molinari Romero',
    type: 'Centro educativo',
    telephone: '(03549) 496-022',
    address: 'Reyna Mora s/n',
    image: '/placeholder-image.png'
  }
]

const InstitutesCards = () => {
  return (
    <article className='flex flex-wrap  justify-around gap-4 md:gap-8 md:justify-center'>
      {institutes.map(({ name, type, telephone, address }) => (
        <div className='card card-side bg-base-100 shadow-xl min-w-[150px] w-full md:max-w-[400px]' key={name}>
          <div className='card-body'>
            <div>
                <h3 className='card-title'>{name}</h3>
                <div className='badge badge-secondary'>{type}</div>
            </div>
            <p className='inline-flex items-center gap-2'><Phone /> {telephone}</p>
            <p className='inline-flex items-center gap-2'><Address /> {address}</p>
          </div>
        </div>
      ))}
    </article>
  )
}

export default InstitutesCards
