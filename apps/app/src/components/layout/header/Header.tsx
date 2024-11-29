import Logo from './components/Logo'

function Header() {

  return (
    <>
     <nav>
      <div className="flex items-center justify-between p-4">
        <Logo />
      </div>
     </nav>
    </>
  )
}

export default Header
