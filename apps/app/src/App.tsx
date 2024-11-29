import Header from '@/components/layout/header/Header'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'

const GlobalTopComponents = () => {
  return (
    <>
      <Header />
    </>
  )
}

const GlobalBottomComponents = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <GlobalTopComponents />
      <Router />
      <GlobalBottomComponents />
    </BrowserRouter>
  )
}

export default App
