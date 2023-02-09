import React, { Dispatch, SetStateAction } from "react"
import { OptionType } from "../App"

interface OptionProps {
  id: string
  text: string
  options: OptionType[]
  setOptions: React.Dispatch<React.SetStateAction<OptionType[]>>
}
interface Props {
  pwLength: React.MutableRefObject<null>
  options: OptionType[]
  setOptions: Dispatch<SetStateAction<OptionType[]>>
}
function Option(props: OptionProps) {
  const { id, text, options, setOptions } = props
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newOptions = options.map((option: OptionType) =>
      option.id === id
        ? {
            ...option,
            isChecked: e.target.checked as boolean,
          }
        : option
    )
    setOptions(newOptions)
  }
  return (
    <label>
      {`Include ${text}`}
      <input id={id} type="checkbox" onChange={handleChange} />
    </label>
  )
}

export default function Options(props: Props) {
  const { pwLength, options, setOptions } = props
  return (
    <div className="optionsWrapper">
      <div className="pw-length-wrapper">
        Password length
        <input ref={pwLength} type="number" min="4" max="20" defaultValue="8" />
      </div>
      {options?.map((option) => (
        <Option
          key={option.id}
          id={option.id}
          text={option.text}
          options={options}
          setOptions={setOptions}
        />
      ))}
    </div>
  )
}
