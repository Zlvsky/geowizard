import { steps } from '@/data/steps'
import { cn } from '@/utils'
import { cubicBezier, motion } from 'framer-motion'
import { useWizardContext } from '../_context/WizardContext'

function ProgressBar() {
  const { currentStep } = useWizardContext()

  return (
    <div className="relative mx-auto mt-8 mb-4 max-w-6xl">
      <div className="bg-muted dark:bg-muted-foreground absolute bottom-2.5 left-0 h-1 w-full translate-y-1/2" />
      <motion.div
        className="absolute bottom-2.5 left-0 h-1  translate-y-1/2 bg-blue-500"
        initial={{ width: '0%' }}
        animate={{ width: `${currentStep * (100 / (steps.length - 1))}%` }}
        transition={{ duration: 0.6, ease: cubicBezier(0.32, 0.81, 0.91, 0.88) }}
      />
      <div className="relative z-10 flex flex-row justify-between gap-2">
        {steps.map((step, index) => (
          <div key={step} className=" flex flex-col ">
            <div
              className={cn(
                `relative h-5 w-5 rounded-full border-[3px] transition-colors duration-700`,
                index <= currentStep ? 'border-blue-500' : 'border-muted dark:border-muted-foreground',
                index < currentStep ? 'bg-blue-500' : 'dark:bg-dark-background bg-white'
              )}>
              <span
                className={cn(
                  'absolute -top-8 left-1/2 mb-3 w-max -translate-x-1/2 text-sm transition-colors duration-700',
                  index === currentStep ? 'text-blue-500' : 'text-slate'
                )}>
                {step}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
