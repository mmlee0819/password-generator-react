import { useState, useRef } from "react"
import { initialOptions } from "./data"
import "./App.css"
import clipboardImg from "./assets/clipboard-blue.png"
import copyImg from "./assets/copy.png"

export default function App() {
  const [options, setOptions] = useState(initialOptions)
  const [password, setPassword] = useState("")
  const [showReminder, setShowReminder] = useState("")
  const pwLength = useRef(null)

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
        <div className="optionsWrapper">
          <div className="pw-length-wrapper">
            Password length
            <input
              ref={pwLength}
              type="number"
              min="4"
              max="20"
              defaultValue="8"
            />
          </div>
          {options.map((option) => (
            <label key={option.id}>
              {`Include ${option.text}`}
              <input id={option.id} type="checkbox" />
            </label>
          ))}
        </div>

        <div className="btn-generate">Generate password</div>
      </div>
    </div>
  )
}
