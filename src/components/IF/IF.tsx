import { type FC, type ReactElement } from "react"

interface ISentencesProps {
  children: React.ReactNode
}
const THEN: FC<ISentencesProps> = ({ children }) => {
  return <>{children}</>
}
const ELSE: FC<ISentencesProps> = ({ children }) => {
  return <>{children}</>
}

interface IIFProps {
  condition: boolean
  children: [ReactElement<ISentencesProps>, ReactElement<ISentencesProps>]
}
function IF({ condition, children }: IIFProps): JSX.Element {
  const [ItemA, ItemB] = children
  const THEN = ItemA.type.name === "THEN" ? ItemA : ItemB
  const ELSE = ItemA.type.name === "ELSE" ? ItemA : ItemB

  return condition ? THEN : ELSE
}

IF.THEN = THEN
IF.ELSE = ELSE

export { IF }
