import Logo from './_components/Logo'
import ThemeToggle from './_components/ThemeToggle'

function Header() {
  return (
    <nav className=" w-full  border-b border-gray dark:border-gray-foreground transition-colors px-4 py-6">
      <div className="container mx-auto flex w-full items-center justify-between">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Header
