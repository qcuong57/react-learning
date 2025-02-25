import ControlledComponnents from "./components/ControlledComponnents";
import TodoList from "./components/TodoList";
import UncontrolledComponents from "./components/UncontrolledComponents";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <ControlledComponnents />
      <UncontrolledComponents />
    </div>
  );
}
export default App;
