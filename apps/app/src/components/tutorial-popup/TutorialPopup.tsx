import { useTutorialStore } from '@/store'
import { AnimatePresence } from 'framer-motion'
import React, { useCallback, useEffect, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'

import { AlertDialog, AlertDialogContent } from '../ui/AlertDialog'
import NavDots from './_components/NavDots'
import PopupBackground from './_components/PopupBackground'
import TutorialContent from './_components/TutorialContent'
import { AboutTutorialBackground } from './_components/_steps/1_About'
import { FormTutorialBackground } from './_components/_steps/2_Form'
import { DetailsTutorialBackground } from './_components/_steps/3_Details'
import { OnboardTutorialBackground } from './_components/_steps/4_Onboard'

export const TutorialPopup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [open, setOpen] = useTutorialStore(
    useShallow((state) => [state.open, state.setOpen])
  )

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      setOpen(false)
      localStorage.setItem('tutorial-completed', 'true')
    }
  }

  useEffect(() => {
    const isTutorialCompleted = localStorage.getItem('tutorial-completed')
    if (!isTutorialCompleted) {
      setTimeout(() => {
        setOpen(true)
      }, 300)
    }
  }, [])

  const renderStep = useCallback(() => {
    switch (currentStep) {
      case 0:
        return (
          <TutorialContent
            initial
            key={'about-tutorial'}
            nextStep={nextStep}
            data={{
              title: 'Welcome to Geowizard!',
              description: "Let's take a quick tour to get you started."
            }}
          />
        )
      case 1:
        return (
          <TutorialContent
            key={'form-tutorial'}
            nextStep={nextStep}
            data={{
              title: 'Create a new project',
              description: 'Go through all the steps to create a new project.'
            }}
          />
        )
      case 2:
        return (
          <TutorialContent
            key={'detail-tutorial'}
            nextStep={nextStep}
            data={{
              title: 'Visualize your data',
              description: 'Use the map to visualize geojson data.'
            }}
          />
        )
      case 3:
        return (
          <TutorialContent
            key={'onboard-tutorial'}
            nextStep={nextStep}
            data={{
              title: 'That’s it!',
              description:
                "You're all set. Enjoy using Geowizard! Note that, this is just a demo:)"
            }}
          />
        )
      default:
        return null
    }
  }, [currentStep])

  const renderStepBackground = useCallback(() => {
    switch (currentStep) {
      case 0:
        return <AboutTutorialBackground key={'about-tutorial-bg'} />
      case 1:
        return <FormTutorialBackground key={'form-tutorial-bg'} />
      case 2:
        return <DetailsTutorialBackground key={'detail-tutorial-bg'} />
      case 3:
        return <OnboardTutorialBackground key={'onboard-tutorial-bg'} />
      default:
        return null
    }
  }, [currentStep])

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="">
        <PopupBackground currentStep={currentStep}>
          <AnimatePresence mode="wait">{renderStepBackground()}</AnimatePresence>
        </PopupBackground>
        <div className="relative h-52 overflow-hidden sm:px-12 sm:py-6">
          <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
          <div className="absolute bottom-4 left-0 right-0 mt-10 flex justify-center">
            <NavDots currentStep={currentStep} setCurrentStep={setCurrentStep} />
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
