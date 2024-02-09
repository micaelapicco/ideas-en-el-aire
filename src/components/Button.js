const Button = ({ children }) => {
  return (
    <button className="rounded-full uppercase text-sm font-semibold py-3 px-5 hover:bg-blue-700 bg-gradient-to-br from-accent from-15% via-primary via-60% to-secondary to-100%">
      {children}
    </button>
  )
}

export default Button
