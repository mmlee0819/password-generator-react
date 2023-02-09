import React, { useRef, useState } from "react"
import { initialOptions, getRandomNum } from "./data"
import Result from "./components/result"
import Options from "./components/options"
import "./App.css"

export interface OptionType {
  id: string
  text: string
  isChecked: boolean
  range: string[] | number[]
}

export default function App() {
  const [options, setOptions] = useState<OptionType[]>(initialOptions)
  const [password, setPassword] = useState("")
  const [reminder, setReminder] = useState({ status: "", text: "" })
  const pwLength = useRef<HTMLInputElement>(null)

  const clickGenerate = () => {
    if (!pwLength?.current?.value) return
    const selectedOptions = options.filter((item) => item.isChecked)
    const pwLengthIsNum = Number(pwLength?.current?.value)
    const invalidCondition = pwLengthIsNum < 4 || pwLengthIsNum > 20
    // Invalid situation 1 : No parameters be selected
    if (selectedOptions.length === 0) {
      setPassword("")
      setReminder({
        status: "isInvalid",
        text: "At least 1 option is required.",
      })
      return
    }
    // Invalid situation 2 : The password length < 4 or > 20
    if (invalidCondition) {
      setReminder({
        status: "isInvalid",
        text: "The length should between 4-20.",
      })
      return
    }
    const newPW: (string | number)[] = []
    if (selectedOptions.length === 1) {
      for (let i = 1; i <= pwLengthIsNum; i++) {
        const randomNum = getRandomNum(selectedOptions[0].range.length)
        newPW.push(selectedOptions[0].range[randomNum])
      }
    }
    if (selectedOptions.length === 2) {
      for (let i = 1; i <= pwLengthIsNum; i++) {
        if (i % 2 === 1) {
          const randomNum = getRandomNum(selectedOptions[1].range.length)
          newPW.push(selectedOptions[1].range[randomNum])
        } else {
          const randomNum = getRandomNum(selectedOptions[0].range.length)
          newPW.push(selectedOptions[0].range[randomNum])
        }
      }
    }
    if (selectedOptions.length === 3) {
      for (let i = 1; i <= pwLengthIsNum; i++) {
        if (i % 3 === 1) {
          const randomNum = getRandomNum(selectedOptions[1].range.length)
          newPW.push(selectedOptions[1].range[randomNum])
        } else if (i % 3 === 2) {
          const randomNum = getRandomNum(selectedOptions[0].range.length)
          newPW.push(selectedOptions[0].range[randomNum])
        } else {
          const randomNum = getRandomNum(selectedOptions[2].range.length)
          newPW.push(selectedOptions[2].range[randomNum])
        }
      }
    }
    if (selectedOptions.length === 4) {
      for (let i = 1; i <= pwLengthIsNum; i++) {
        if (i % 4 === 1) {
          const randomNum = getRandomNum(selectedOptions[1].range.length)
          newPW.push(String(selectedOptions[1].range[randomNum]))
        } else if (i % 4 === 2) {
          const randomNum = getRandomNum(selectedOptions[0].range.length)
          newPW.push(String(selectedOptions[0].range[randomNum]))
        } else if (i % 4 === 3) {
          const randomNum = getRandomNum(selectedOptions[2].range.length)
          newPW.push(String(selectedOptions[2].range[randomNum]))
        } else {
          const randomNum = getRandomNum(selectedOptions[3].range.length)
          newPW.push(String(selectedOptions[3].range[randomNum]))
        }
      }
    }
    const stringNewPW = String(newPW.join(""))
    setPassword(stringNewPW)
    setReminder({
      status: "",
      text: "",
    })
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Password Generator</h1>
        <Result password={password} reminder={reminder} />
        <Options
          pwLength={pwLength}
          options={options}
          setOptions={setOptions}
        />

        <div className="btn-generate" onClick={clickGenerate}>
          Generate password
        </div>
      </div>
    </div>
  )
}
