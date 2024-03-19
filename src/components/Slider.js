'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import Image from 'next/image'

const images = [
  {
    src: '/images/imagen-1.png',
    alt: 'Mujer en medio de la calle con perro y combi atrás'
  },
  {
    src: '/images/imagen-2.jpg',
    alt: 'Calle con comercios y jacarandas'
  },
  {
    src: '/images/imagen-3.jpg',
    alt: 'Calle de tierra rodeada de vegetación'
  },
  {
    src: '/images/imagen-4.jpg',
    alt: 'Paisaje desde las Sierras'
  },
  {
    src: '/images/imagen-5.jpg',
    alt: 'Calle con niños en bici y puente peatonal atrás'
  },
  {
    src: '/images/imagen-6.jpg',
    alt: 'Fotografía de larga exposición en calle asfaltada con auto pasando'
  },
  {
    src: '/images/imagen-7.jpg',
    alt: 'Paisaje desde las sierras con nubes'
  },
  {
    src: '/images/imagen-8.jpg',
    alt: 'Arroyo con vegetación alrededor'
  },
  {
    src: '/images/imagen-9.jpg',
    alt: 'Puente peatonal con vegetación alrededor y las sierras de fondo'
  },
  {
    src: '/images/imagen-10.jpg',
    alt: 'Puente peatonal desde otra perspectiva con cielo nublado'
  },
  {
    src: '/images/imagen-11.png',
    alt: 'Puente peatonal con personas encima observando el cielo y un ómnibus pasando por debajo'
  },
  {
    src: '/images/imagen-12.jpg',
    alt: 'Arco de piedra graffiteado con bici al lado y árboles alrededor'
  },
  {
    src: '/images/imagen-13.jpg',
    alt: 'Parque con árboles alrededor y gente paseando'
  },
  {
    src: '/images/imagen-14.jpg',
    alt: 'Plaza de comidas con mesas y sillas y gente alrededor'
  },
  {
    src: '/images/imagen-15.jpg',
    alt: 'Paisaje con sierras de fondo cubiertas por neblina y vegetación alrededor'
  },
  {
    src: '/images/imagen-16.jpg',
    alt: 'Parque con juegos, personas y vegetación alrededor'
  }
]

const renderImages = () => {
  return images.map(({ src, alt }, index) => (
    <SwiperSlide key={`swiperslide-${index}`}>
      <Image
        src={src}
        alt={alt}
        key={`image-${index}`}
        className='mx-auto'
        width={700}
        height={700}
      />
    </SwiperSlide>
  ))
}

const Slider = () => {
  return (
    <Swiper
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ dynamicBullets: true, clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper'
    >
      {renderImages()}
    </Swiper>
  )
}

export default Slider
