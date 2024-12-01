import { useCallback } from 'react'
import { useWizardContext } from '../_context/WizardContext'
import ProjectDetails from './_steps/1_ProjectDetails'
import FileUpload from './_steps/2_FileUpload'
import ProjectSummary from './_steps/3_ProjectSummary'
import ProjectResult from './_steps/4_ProjectResult'

export default function ProjectWizard() {
  const { currentStep } = useWizardContext()

  const renderStep = useCallback(() => {
    switch (currentStep) {
      case 0:
        return <ProjectDetails key={'project-details'} />
      case 1:
        return <FileUpload key={'file-upload'} />
      case 2:
        return <ProjectSummary />
      case 3:
        return <ProjectResult />
      default:
        return null
    }
  }, [currentStep])

  return (
    <div className="mx-auto mt-2 max-w-6xl px-4 py-6">
      {renderStep()}
      {/* <AnimatePresence mode="wait">{renderStep()}</AnimatePresence> */}
    </div>
  )
}
