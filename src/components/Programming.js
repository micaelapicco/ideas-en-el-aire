const Programming = () => {
  const programmingList = [
    {
      day: 'Lunes',
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
      programs: [
        { time: '06:00 hs', name: 'Folcklore a las seis' },
        { time: '10:00 hs', name: 'Hoy puede ser un gran día' },
        { time: '19:00 hs', name: 'Rincón porteño' }
      ]
    }
  ]

  return (
    <div role="tablist" className="tabs tabs-bordered justify-center text-xl">
      {programmingList.map(({ day, programs }) => (
        <>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-xl"
            aria-label={day}
          />
          <div role="tabpanel" className="tab-content p-10">
            <ul>
              {programs.map(({ time, name, index }) => (
                <li key={index}>
                  <strong>{time}</strong> - {name}
                </li>
              ))}
            </ul>
          </div>
        </>
      ))}
    </div>
  )
}

export default Programming
