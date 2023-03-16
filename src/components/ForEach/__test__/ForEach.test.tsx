import todos from "./todos.json"
import { ForEach } from "../ForEach"

import { render, screen } from "@/utils/test-utils"

const App = (): JSX.Element => (
  <ForEach of={todos.list}>
    {function (todo) {
      return <h1 key={todo.id}>{todo.todo}</h1>
    }}
  </ForEach>
)

describe("Test ForEach component", () => {
  test("should render todo list", () => {
    render(<App />)

    for (const todo of todos.list) {
      const E: HTMLHeadingElement = screen.getByText(todo.todo)
      expect(E.innerHTML).toEqual(todo.todo)
    }
  })
})
