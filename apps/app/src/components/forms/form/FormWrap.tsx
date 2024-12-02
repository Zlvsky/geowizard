import { Button } from '@/components/ui/Button'
import { cn } from '@/utils'
import { useWizardContext } from '@/views/home/_context/WizardContext'

interface FormInterface {
  id?: string
  submitText?: React.ReactNode
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  buttonClassName?: string
  disabled?: boolean
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function FormWrap({
  id,
  submitText,
  onSubmit,
  disabled,
  buttonClassName,
  onClick,
  children
}: FormInterface): JSX.Element {
  const { currentStep, setCurrentStep } = useWizardContext()

  return (
    <form
      id={id}
      className="mx-auto max-w-2xl"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit && onSubmit(e)
      }}>
      <div className="mb-4">{children}</div>
      {submitText && (
        <div className="mt-6 flex justify-center py-1">
          {currentStep === 0 ? (
            <Button
              type="submit"
              disabled={disabled}
              size={'lg'}
              className={buttonClassName}
              onClick={onClick}>
              {submitText}
            </Button>
          ) : (
            <>
              <Button
                type="button"
                size={'lg'}
                variant={"outline"}
                className={cn(buttonClassName, 'w-full rounded-r-none')}
                onClick={() => setCurrentStep(currentStep - 1)}>
                Back
              </Button>
              <Button
                type="submit"
                disabled={disabled}
                size={'lg'}
                className={cn(buttonClassName, 'w-full rounded-l-none')}
                onClick={onClick}>
                {submitText}
              </Button>
            </>
          )}
        </div>
      )}
    </form>
  )
}

export default FormWrap
