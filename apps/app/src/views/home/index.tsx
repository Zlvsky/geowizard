import Container from "@/components/layout/containers/Container";
import { WizardContextProvider } from "./_context/WizardContext";
import ProgressBar from "./_components/ProgressBar";

function Home() {
  return (
    <WizardContextProvider>
      <Container>
        <ProgressBar />
      </Container>
    </WizardContextProvider>
  )
}

export default Home;