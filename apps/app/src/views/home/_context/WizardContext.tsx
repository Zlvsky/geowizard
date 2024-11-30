import React, { createContext, useContext, useState } from 'react'

interface CustomContextData {
  currentStep: number
  setCurrentStep: (step: number) => void
}

interface ContextProps {
  children: React.ReactNode
}

const CustomContext = createContext<CustomContextData | undefined>(undefined)

export function WizardContextProvider({ children }: ContextProps) {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <CustomContext.Provider
      value={{
        currentStep,
        setCurrentStep
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
