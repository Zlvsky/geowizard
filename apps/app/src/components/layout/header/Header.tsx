import Logo from './_components/Logo'
import ThemeToggle from './_components/ThemeToggle'

function Header() {
  return (
    <nav className="container flex w-full items-center justify-between px-4 mx-auto">
      <div className="flex items-center justify-center p-4">
        <Logo />
      </div>
      <div className="flex items-center justify-end p-4">
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Header
