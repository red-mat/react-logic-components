import { type ReactElement, type ReactNode } from "react"

type TSentencesComp = React.FC<ISentencesProps>
interface ISentencesProps {
  children: ReactNode
}

const THEN: TSentencesComp = ({ children }: ISentencesProps) => <>{children}</>
const ELSE: TSentencesComp = ({ children }: ISentencesProps) => <>{children}</>

interface IIFProps {
  condition: boolean
  children: [ReactElement<ISentencesProps>, ReactElement<ISentencesProps>]
}

interface IIFComposition {
  THEN: TSentencesComp
  ELSE: TSentencesComp
}
const IF: React.FC<IIFProps> & IIFComposition = ({ condition, children }) => {
  const [SentA, SentB] = children

  const CompTHEN = SentA.type === THEN ? SentA : SentB
  const CompELSE = SentA.type === ELSE ? SentA : SentB

  return condition ? CompTHEN : CompELSE
}

IF.THEN = THEN
IF.ELSE = ELSE

export { IF }
