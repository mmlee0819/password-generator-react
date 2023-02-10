import { ReactNode } from "react"

export default function Tooltips({
  reminder,
  children,
}: {
  reminder: { status: string; text: string }
  children: ReactNode
}) {
  return (
    <div
      className="tooltip"
      style={{
        visibility: reminder.status === "" ? "hidden" : "visible",
        opacity: reminder.status === "" ? "0" : "1",
        transition: "opacity 0.5s",
      }}
    >
      <div className="tooltip-angle" />
      {children}
    </div>
  )
}
