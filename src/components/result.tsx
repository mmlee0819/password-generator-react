import { Dispatch, SetStateAction } from "react"
import Tooltips from "./tooltip"
import clipboardImg from "../assets/clipboard-blue.png"
import copyImg from "../assets/copy.png"

interface Props {
  password: string
  reminder: { status: string; text: string }
  setReminder: Dispatch<SetStateAction<{ status: string; text: string }>>
}

export default function Result(props: Props) {
  const { password, reminder, setReminder } = props

  const copyTextToClipboard = async () => {
    if ("clipboard" in navigator) {
      try {
        await navigator.clipboard.writeText(password)
        setReminder({ status: "isCopied", text: "Copied password." })
      } catch (error) {
        if (error instanceof Error) {
          setReminder({
            status: "isError",
            text: error.message,
          })
        }
      }
    } else {
      return document.execCommand("copy", true, password)
    }
  }
  return (
    <div className="result-wrapper">
      <span className="result">{password}</span>
      <Tooltips reminder={reminder}>{reminder.text}</Tooltips>
      <img
        src={reminder.status === "isCopied" ? clipboardImg : copyImg}
        alt="reminder"
        onClick={copyTextToClipboard}
      />
    </div>
  )
}
