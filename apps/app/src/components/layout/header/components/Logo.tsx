import { Link } from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <img src={'/vite.svg'} alt="Logo" width={40} />
    </Link>
  )
}

export default Logo
