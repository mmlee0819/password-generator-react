const uppercaseList = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
const lowercaseList = [..."abcdefghijklmnopqrstuvwxyz"]
const numbersList = [...Array(10).keys()]
const symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*", "~"]

export const initialOptions = [
  {
    id: "uppercase",
    text: "uppercase letters",
    isChecked: false,
    range: uppercaseList,
  },
  {
    id: "lowercase",
    text: "lowercase letters",
    isChecked: false,
    range: lowercaseList,
  },
  { id: "numbers", text: "numbers", isChecked: false, range: numbersList },
  { id: "symbols", text: "symbols", isChecked: false, range: symbolsList },
]

export const getRandomNum = (max: number) => {
  return Math.floor(Math.random() * max)
}
