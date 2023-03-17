import { IF } from "../IF"

import { render, screen } from "@/utils/test-utils"

interface ITestProps {
  state: boolean
}
function Test({ state }: ITestProps): JSX.Element {
  return (
    <IF condition={state}>
      <IF.THEN>
        <h1>then</h1>
      </IF.THEN>
      <IF.ELSE>
        <h1>else</h1>
      </IF.ELSE>
    </IF>
  )
}

describe("Test If components", () => {
  test("should render THEN element", () => {
    render(<Test state={true} />)
    const result = screen.getByText(/then/)
    expect(result.innerHTML).toEqual("then")
  })
})
