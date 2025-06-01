import './todo.css';

type Task = {
  id: number;
  text: string;
  completed: boolean;
}

type TodoItemProps = {
  task: Task;
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
}

function TodoItem({ task, deleteTask, toggleCompleted }: TodoItemProps) {
  function handleChange(): void {
    toggleCompleted(task.id);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <p style={{
        color: "#000",
        textDecoration: task.completed ? "line-through" : '',
        paddingLeft: '50px', paddingRight: '50px',
        fontFamily: 'Arial", sans-serif'
      }}>{task.text}</p>
      <div>
        <button style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          border: '1px solid #000',
          color: '#c0392b'
        }}
          onClick={(): void => deleteTask(task.id)}>X</button>
      </div>
    </div>
  );
}

export default TodoItem;
