import React, { createContext, useContext, useState } from 'react'

interface CustomContextData {
  currentStep: number
  setCurrentStep: (step: number) => void
  formDetails: {
    name: string
    description: string
    date: {
      from: Date
      to: Date
    }
  }
  setFormDetails: (details: any) => void
  uploadedFile: File | null
  setUploadedFile: (file: File | null) => void
  newProjectId: string | null
  setNewProjectId: (id: string) => void
}

interface ContextProps {
  children: React.ReactNode
}

const CustomContext = createContext<CustomContextData | undefined>(undefined)

export function WizardContextProvider({ children }: ContextProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formDetails, setFormDetails] = useState({
    name: '',
    description: '',
    date: {
      from: new Date(),
      to: new Date()
    }
  })
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [newProjectId, setNewProjectId] = useState<string | null>(null)

  return (
    <CustomContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        formDetails,
        setFormDetails,
        setUploadedFile,
        uploadedFile,
        newProjectId,
        setNewProjectId
      }}>
      {children}
    </CustomContext.Provider>
  )
}

export function useWizardContext() {
  const context = useContext(CustomContext)
  if (context === undefined) {
    throw new Error('useReviewContext must be used within a ReviewContextProvider')
  }
  return context
}
