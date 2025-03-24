import React from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
};

const CompletedTaskCounter: React.FC<TaskListProps> = ({ tasks }) => {
  const countCompletedTasks = (tasks: Task[]): number => {
    return tasks.filter((task) => task.completed).length;
  };
  return (
    <div>
      <h3
        style={{
          border: "2px solid #bbb",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        You have {tasks.length} Tasks | Total Completed Tasks:{" "}
        {countCompletedTasks(tasks)}
      </h3>
    </div>
  );
};

export default CompletedTaskCounter;
