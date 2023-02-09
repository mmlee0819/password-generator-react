import Tooltips from "./tooltip"
import clipboardImg from "../assets/clipboard-blue.png"
import copyImg from "../assets/copy.png"

interface Props {
  password: string
  reminder: { status: string; text: string }
}
export default function Result(props: Props) {
  const { password, reminder } = props
  return (
    <div className="result-wrapper">
      <span className="result">{password}</span>
      <Tooltips reminder={reminder}>{reminder.text}</Tooltips>
      <img
        src={reminder.status === "isCopied" ? clipboardImg : copyImg}
        alt="reminder"
      />
    </div>
  )
}
