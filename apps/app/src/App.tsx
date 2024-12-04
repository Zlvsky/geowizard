import Header from '@/components/layout/header/Header'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import PageWrap from './components/layout/containers/PageWrap'
import { TutorialPopup } from './components/tutorial-popup/TutorialPopup'
import { Toaster } from './components/ui/sonner'
import { Router } from './router/Router'

const GlobalTopComponents = () => {
  return (
    <>
      <Header />
      <TutorialPopup />
    </>
  )
}

const GlobalBottomComponents = () => {
  return (
    <>
      <Toaster richColors position="bottom-center" toastOptions={{}} />
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
