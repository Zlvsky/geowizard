import Header from '@/components/layout/header/Header'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'
import PageWrap from './components/layout/containers/PageWrap'

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
      <PageWrap>
        <GlobalTopComponents />
        <Router />
        <GlobalBottomComponents />
      </PageWrap>
    </BrowserRouter>
  )
}

export default App
