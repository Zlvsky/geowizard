import { Button } from '@/components/ui/common/Button'

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
  return (
    <form
      id={id}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit && onSubmit(e)
      }}
    >
      <div className="mb-4">{children}</div>
      {submitText && (
        <div className="mt-6 flex justify-center py-1">
          <Button
            type="submit"
            disabled={disabled}
            size={'lg'}
            className={buttonClassName}
            onClick={onClick}
          >
            {submitText}
          </Button>
        </div>
      )}
    </form>
  )
}

export default FormWrap
