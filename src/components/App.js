import { TodoList } from "./TodoList/TodoList";
import { Container } from "../UI-components/Container/Container";

import "../styles/index.css";
import "../styles/themes.css";

function App() {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}

export default App;
