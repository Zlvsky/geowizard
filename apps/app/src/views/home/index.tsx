import Container from '@/components/layout/containers/Container'
import ProgressBar from './_components/ProgressBar'
import ProjectWizard from './_components/ProjectWizard'
import { WizardContextProvider } from './_context/WizardContext'

function Home() {
  return (
    <WizardContextProvider>
      <Container>
        <ProgressBar />
        <ProjectWizard />
      </Container>
    </WizardContextProvider>
  )
}

export default Home
