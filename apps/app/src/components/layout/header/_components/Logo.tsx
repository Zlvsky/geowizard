import { Link } from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link to="/" className='dark:text-white text-black text-2xl tracking-tight'>
      geowizard.
    </Link>
  )
}

export default Logo
