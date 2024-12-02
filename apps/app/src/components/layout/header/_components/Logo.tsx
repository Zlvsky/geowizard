import { Link } from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link to="/" className="text-2xl tracking-tight text-black dark:text-white">
      geowizard.
    </Link>
  )
}

export default Logo
