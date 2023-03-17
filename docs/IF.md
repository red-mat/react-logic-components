# IF

## examples of uses

```js
import { useState } from "react"
import { IF } from "@red-mat/react-logic-components"

const App = () => {
  const [state, setState] = useState(true)

  return (
    <>
      <IF condition={state}>
        <IF.THEN>
          <h1>Then</h1>
        </IF.THEN>

        <IF.ELSE>
          <h1>Else</h1>
        </IF.ELSE>
      </IF>

      <button onClick={() => useState(state => !state)}>Change State</button>
    </>
  )
}

export default App
```
