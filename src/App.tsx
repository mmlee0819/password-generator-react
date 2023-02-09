import React, { useState } from "react"
import { initialOptions } from "./data"
import Options from "./components/options"
import "./App.css"
import clipboardImg from "./assets/clipboard-blue.png"
import copyImg from "./assets/copy.png"

export interface OptionType {
  id: string
  text: string
  isChecked: boolean
  range: string[] | number[]
}

export default function App() {
  const [options, setOptions] = useState<OptionType[]>(initialOptions)
  const [password, setPassword] = useState("")
  const [showReminder, setShowReminder] = useState("")

  return (
    <div className="App">
      <div className="container">
        <h1>Password Generator</h1>
        <div className="result-wrapper">
          <div className="tooltip">
            <div className="tooltip-angle" />
          </div>
          <span className="result">{password}</span>
          <img
            src={showReminder === "isCopied" ? clipboardImg : copyImg}
            alt="reminder"
          />
        </div>
        <Options options={options} setOptions={setOptions} />

        <div className="btn-generate">Generate password</div>
      </div>
    </div>
  )
}
