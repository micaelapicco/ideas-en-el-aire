const Button = ({ children, props }) => {
  return (
    <button className='rounded-full uppercase text-sm font-semibold py-3 px-5 bg-gradient-to-br from-accent from-15% via-primary via-60% to-secondary to-100% transform shadow cursor-pointer focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1' {...props}>
      {children}
    </button>
  )
}

export default Button
