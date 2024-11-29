/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/utils'
import { Controller } from 'react-hook-form'
import Select from 'react-select'

type SelectOption = {
  value: string
  label: string
}

interface ISelectBox {
  name: string
  control: any
  label?: string
  options: SelectOption[]
  placeholder: string
  inputClassName?: string
  divClassName?: string
  valuesContainerClassName?: string
  isMulti?: boolean
  required?: boolean
  disabled?: boolean
  error?: string
}

const handleOnChange = (onChange: any, newValue: any, isMulti?: boolean) => {
  if (isMulti) {
    if (!newValue) return onChange([])
    const valuesArray = newValue.map((el: any) => el.value)
    onChange(valuesArray)
  } else {
    if (!newValue) return onChange('')
    onChange(newValue.value)
  }
}

/**
 * Renders a custom select input component.
 *
 * @component
 * @example
 * // Usage:
 * <InputSelect
 *   name="mySelect"
 *   control={control}
 *   options={options}
 *   placeholder="Select an option"
 *   divClassName="input-select-container"
 *   inputClassName="input-select"
 *   valuesContainerClassName="selected-values-container"
 *   required={true}
 *   isMulti={false}
 *   disabled={false}
 *   error={false}
 * />
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the select input.
 * @param {Object} props.control - The control object from react-hook-form.
 * @param {Array} props.options - The array of options for the select input.
 * @param {string} props.placeholder - The placeholder text for the select input.
 * @param {string} props.divClassName - The CSS class name for the container div.
 * @param {string} props.inputClassName - The CSS class name for the select input.
 * @param {string} props.valuesContainerClassName - The CSS class name for the selected values container.
 * @param {boolean} props.required - Indicates if the select input is required.
 * @param {boolean} props.isMulti - Indicates if the select input allows multiple selections.
 * @param {boolean} props.disabled - Indicates if the select input is disabled.
 * @param {boolean} props.error - Indicates if the select input has an error.
 * @returns {JSX.Element} The rendered InputSelect component.
 */
function InputSelect({
  name,
  control,
  options,
  placeholder,
  divClassName,
  inputClassName,
  valuesContainerClassName,
  required,
  isMulti,
  disabled,
  error
}: ISelectBox): JSX.Element {
  const styles = {
    control: () =>
      cn(
        `!text-black !border ${
          error ? '!border-red-500' : '!border-black/20'
        } !py-1.5 !px-4 !focus-visible:outline-none !tracking-wide!shadow-none
              `,
        {
          '!bg-white ': !disabled,
          '!bg-black/30 !text-opacity-30 !border-transparent': disabled
        },
        inputClassName
      ),
    menu: () => '!z-30',
    valueContainer: () => cn('!p-0', valuesContainerClassName),
    input: () => '!m-0 !p-0',
    placeholder: () => '!text-black/50 !m-0',
    indicatorSeparator: () => '!w-0',
    indicatorsContainer: () => '',
    dropdownIndicator: () => '!text-black !px-0 !py-2',
    option: ({ isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }) =>
      `${isFocused ? '!bg-black !text-white' : 'bg-transparent'} ${
        isSelected ? '!bg-black' : 'bg-transparent'
      }`,
    multiValueLabel: () => '!text-black'
  }

  return (
    <div
      className={cn(
        `${error ? `input-error` : ''} relative flex flex-col text-left`,
        divClassName
      )}
      data-content={error}
    >
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ref } }) => {
          let selectedValue
          if (!value) selectedValue = undefined
          else {
            if (Array.isArray(value) && value) {
              const filteredMultiValues = options.filter((option) =>
                value.some((val: string) => val === option.value)
              )
              selectedValue = filteredMultiValues
            } else {
              const filteredValue = options.filter((option) => value === option.value)
              selectedValue = filteredValue[0]
            }
          }

          return (
            <Select
              key={`select_${name}`}
              classNames={styles}
              classNamePrefix={'custom-select'}
              value={selectedValue}
              options={options}
              onChange={(newValue) => handleOnChange(onChange, newValue, isMulti)}
              name={name}
              id={name}
              isMulti={isMulti}
              placeholder={placeholder}
              isDisabled={disabled}
              required={required}
              isClearable={true}
              ref={ref}
              aria-label="select from list"
            />
          )
        }}
      />
    </div>
  )
}

export default InputSelect
