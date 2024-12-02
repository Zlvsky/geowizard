import Header from '@/components/layout/header/Header'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import PageWrap from './components/layout/containers/PageWrap'
import { Toaster } from './components/ui/sonner'
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
      <Toaster theme={'light'} richColors position="bottom-center" />
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
