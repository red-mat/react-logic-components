# ForEach

## examples of uses

### Element

```js
import { ForEach } from "@red-mat/react-logic-components"

const App = () => (
  <ForEach
    of={[
      { id: 1, name: "user1" },
      { id: 2, name: "user2" },
      { id: 3, name: "user3" },
    ]}
  >
    {user => <h1 key={user.id}>{user.name}</h1>}
  </ForEach>
)

export default App
```

### Element and Index

```js
import { ForEach } from "@red-mat/react-logic-components"

const App = () => (
  <ForEach of={["Title_1", "Title_2", "Title_3"]}>
    {(title, index) => <h1 key={index}>{title}</h1>}
  </ForEach>
)

export default App
```

### Full Example: Element, Index and List

```js
import { ForEach } from "@red-mat/react-logic-components"

const App = () => (
  <ForEach of={["😁", "😃", "😂"]}>
    {(emoji, index, listEmoji) => (
      <div key={index}>
        <h1>Emoji: {emoji}</h1>
        <span>Next emoji: {listEmoji[index + 1]}</span>
      </div>
    )}
  </ForEach>
)

export default App
```
