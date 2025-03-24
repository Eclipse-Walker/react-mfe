import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Task } from "../../config/types";
import useList from "../../store/ListStore";

const TodoList: React.FC = () => {
  /* const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      text: "Peter Parker",
      completed: false,
    },
    {
      id: 2,
      text: "Tony Stark",
      completed: true,
    },
  ]); */
  const [tasks, setTasks] = useList();

  const [text, setText] = useState<string>("");

  function addTask(text: string): void {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id: number): void {
    setTasks(tasks.filter((task): boolean => task.id !== id));
  }

  function toggleCompleted(id: number): void {
    setTasks(
      tasks.map((task): Task => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div style={{}}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <input style={{
          width: '300px',
          margin: '10px',
          borderRadius: "10px",
          paddingLeft: "10px",
        }} value={text} onChange={(e): void => setText(e.target.value)} onKeyDown={(e) => {
          if (e.key === "Enter" && text !== "") {
            console.log(`%c ${text}`, 'color: green')
            addTask(text);
          }
        }} />
        <button style={{
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: "10px",
          height: '1.5em',
        }} onClick={() => text !== "" ? addTask(text) : undefined}>Add List</button>
      </div>
      {tasks.map((task: Task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}

export default TodoList;
