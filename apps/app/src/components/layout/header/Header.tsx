import Logo from './components/Logo'

function Header() {
  return (
    <nav className="container grid w-full grid-cols-3 px-4 mx-auto">
      <div />
      <div className="flex items-center justify-center p-4">
        <Logo />
      </div>
      <div className="flex items-center justify-end p-4">
        <Logo />
      </div>
    </nav>
  )
}

export default Header
