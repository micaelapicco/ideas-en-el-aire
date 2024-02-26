const Recorders = () => {
  return (
    <article className='flex'>
      <div className='mockup-browser border bg-base-300'>
        <div className='mockup-browser-toolbar'>
          <div className='input'>https://daisyui.com</div>
        </div>
        <div className='flex justify-center px-4 py-16 bg-base-200'>
          <iframe
            width='720'
            height='540'
            src='https://www.youtube.com/embed/Q0UHbrmwzWU'
            title='Nota a Paula Neri - Directora / La Narradora Impura'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </article>
  )
}

export default Recorders
