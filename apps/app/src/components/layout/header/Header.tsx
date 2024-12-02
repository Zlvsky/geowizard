import Logo from './_components/Logo'
import ThemeToggle from './_components/ThemeToggle'

function Header() {
  return (
    <nav className=" border-gray  dark:border-gray-foreground w-full border-b px-4 py-6 transition-colors">
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
