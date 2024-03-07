'use client'
import { useEffect, useState } from 'react'

const ProgrammingAccordion = () => {
  const programmingList = [
    {
      day: 'Lunes',
      dayNumber: 1,
      programs: [
        { time: '00:00 hs', name: 'La hora negra' },
        { time: '02:00 hs', name: 'Trasnoche Quilpo' },
        { time: '04:00 hs', name: 'Latinoamericano lento' },
        { time: '10:00 hs', name: 'D10' },
        { time: '12:30 hs', name: 'Percepciones diferentes' },
        { time: '13:00 hs', name: 'NAC - Rock Argentino' },
        { time: '15:00 hs', name: 'Internacional' },
        { time: '17:00 hs', name: 'Latino' },
        { time: '18:00 hs', name: 'Sale mate' },
        { time: '19:00 hs', name: 'TV Vespertina en colores (TVC)' },
        { time: '20:00 hs', name: 'Soñando barcos' }
      ]
    },
    {
      day: 'Martes',
      dayNumber: 2,
      programs: [
        { time: '00:00 hs', name: 'La hora negra' },
        { time: '02:00 hs', name: 'Trasnoche Quilpo' },
        { time: '04:00 hs', name: 'Latinoamericano lento' },
        { time: '10:00 hs', name: 'D10' },
        { time: '12:30 hs', name: 'Percepciones diferentes' },
        { time: '13:00 hs', name: 'NAC - Rock Argentino' },
        { time: '15:00 hs', name: 'Internacional' },
        { time: '17:00 hs', name: 'Latino' },
        { time: '18:00 hs', name: 'Sale mate' },
        { time: '19:00 hs', name: 'TV Vespertina en colores (TVC)' },
        { time: '20:00 hs', name: 'La Herrería' }
      ]
    },
    {
      day: 'Miércoles',
      dayNumber: 3,
      programs: [
        { time: '00:00 hs', name: 'La hora negra' },
        { time: '02:00 hs', name: 'Trasnoche Quilpo' },
        { time: '04:00 hs', name: 'Latinoamericano lento' },
        { time: '10:00 hs', name: 'D10' },
        { time: '12:30 hs', name: 'Percepciones diferentes' },
        { time: '13:00 hs', name: 'NAC - Rock Argentino' },
        { time: '15:00 hs', name: 'Internacional' },
        { time: '17:00 hs', name: 'Latino' },
        { time: '18:00 hs', name: 'Sale mate' },
        { time: '19:00 hs', name: 'TV Vespertina en colores (TVC)' }
      ]
    },
    {
      day: 'Jueves',
      dayNumber: 4,
      programs: [
        { time: '00:00 hs', name: 'La hora negra' },
        { time: '02:00 hs', name: 'Trasnoche Quilpo' },
        { time: '04:00 hs', name: 'Latinoamericano lento' },
        { time: '10:00 hs', name: 'D10' },
        { time: '12:30 hs', name: 'Percepciones diferentes' },
        { time: '13:00 hs', name: 'NAC - Rock Argentino' },
        { time: '15:00 hs', name: 'Internacional' },
        { time: '17:00 hs', name: 'Latino' },
        { time: '18:00 hs', name: 'Sale mate' },
        { time: '19:00 hs', name: 'TV Vespertina en colores (TVC)' }
      ]
    },
    {
      day: 'Viernes',
      dayNumber: 5,
      programs: [
        { time: '00:00 hs', name: 'La hora negra' },
        { time: '02:00 hs', name: 'Trasnoche Quilpo' },
        { time: '04:00 hs', name: 'Latinoamericano lento' },
        { time: '10:00 hs', name: 'D10' },
        { time: '12:30 hs', name: 'Percepciones diferentes' },
        { time: '13:00 hs', name: 'NAC - Rock Argentino' },
        { time: '15:00 hs', name: 'Internacional' },
        { time: '17:00 hs', name: 'Latino' },
        { time: '18:00 hs', name: 'Sale mate' },
        { time: '19:00 hs', name: 'TV Vespertina en colores (TVC)' }
      ]
    },
    {
      day: 'Sábado',
      dayNumber: 6,
      programs: [
        { time: '02:00 hs', name: 'Trasnoche Quilpo' },
        { time: '04:00 hs', name: 'Latinoamericano lento' },
        { time: '06:00 hs', name: 'Folcklore a las seis' },
        { time: '10:00 hs', name: 'Hoy puede ser un gran día' },
        { time: '21:00 hs', name: 'Con ciertos sonidos' }
      ]
    },
    {
      day: 'Domingo',
      dayNumber: 7,
      programs: [
        { time: '06:00 hs', name: 'Folcklore a las seis' },
        { time: '10:00 hs', name: 'Hoy puede ser un gran día' },
        { time: '19:00 hs', name: 'Rincón porteño' }
      ]
    }
  ]

  const [currentDayIndex, setCurrentDayIndex] = useState(new Date().getDay())

  useEffect(() => {
    const collapse = document.querySelectorAll('.collapse')

    collapse.forEach((collapse, index) => {
      if (index === currentDayIndex) {
        collapse.classList.add('defaultChecked')
      } else {
        collapse.classList.remove('defaultChecked')
      }
    })
  }, [currentDayIndex])

  return (
    <div className='join join-vertical w-full xl:hidden'>
      {programmingList.map(({ day, dayNumber, programs }) => (
        <div key={day} className='collapse collapse-arrow join-item bg-base-100 lg:hidden'>
          <input type='radio' name='accordion' defaultChecked={currentDayIndex === dayNumber}
            onChange={() => setCurrentDayIndex(dayNumber)} />
          <div className='collapse-title text-xl font-medium'>{day}</div>
          <ul className='collapse-content'>
            {programs.map(({ time, name }) => (
              <li key={`${dayNumber}-${time}`} className='flex items-center text-balance'>
                <strong className='text-secondary text-balance'>{time}</strong>&nbsp;-&nbsp;{name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ProgrammingAccordion
