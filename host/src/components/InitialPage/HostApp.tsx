import { useAtom } from "jotai";
import { todosAtom } from "../../store/sharedStore";

const HostApp = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const addTodo = () => {
    setTodos([...todos, `Task ${todos.length + 1}`]);
  };

  return (
    <div>
      <h2>Host Todo List</h2>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default HostApp;
