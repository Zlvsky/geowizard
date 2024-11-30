import Container from "@/components/layout/containers/Container";
import { WizardContextProvider } from "./_context/WizardContext";
import ProgressBar from "./_components/ProgressBar";
import ProjectWizard from "./_components/ProjectWizard";

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

export default Home;