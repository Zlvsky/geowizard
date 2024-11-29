export interface IInputLabel {
  name: string
  label?: string
  error?: string
}

const InputLabel = ({ name, label, error }: IInputLabel): JSX.Element | null => {
  if (!label && !error) return null

  if (error) {
    return (
      <label htmlFor={name} className="mt-2 text-sm text-red-500">
        {error}
      </label>
    )
  }

  return (
    <label htmlFor={name} className="mt-2 text-sm">
      {label}
    </label>
  )
}

export default InputLabel
