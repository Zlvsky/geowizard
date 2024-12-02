import Header from '@/components/layout/header/Header'
// import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'
import PageWrap from './components/layout/containers/PageWrap'
import { CustomToster } from './components/ui/toaster'
import { Toaster } from './components/ui/sonner'
import { QueryClient, QueryClientProvider } from 'react-query'


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
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <Toaster theme={"light"} richColors position="bottom-center" />
      <CustomToster />
    </>
  )
}

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PageWrap>
          <GlobalTopComponents />
          <Router />
          <GlobalBottomComponents />
        </PageWrap>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
