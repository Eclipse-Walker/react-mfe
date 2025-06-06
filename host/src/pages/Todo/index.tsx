import React from "react";
import Navbar from "../../components/Navbar";

import CompletedTaskCounter from "../../components/CompleatedTaskCounter";
import RemoteCheckerPage from "../../components/RemoteCheckerPage";

const Welcome = React.lazy(() => import("welcomePage/Welcome"));
const Button = React.lazy(() => import("welcomePage/Button"));
const Todo = React.lazy(() => import("welcomePage/Todo"));

import useCount from "welcomePage/store";
import useList from "welcomePage/listStore";
import HostApp from "../../components/InitialPage/HostApp";

const LineStyle: React.FC = () => {
  return (
    <hr
      style={{
        color: "#2c3e50",
        backgroundColor: "#2c3e50",
        width: "80%",
        height: "1px",
        marginTop: "25px",
      }}
    />
  );
};

const TodoPage = () => {
  const [count, setCount] = useCount();
  const [list] = useList();

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "white",
          color: "black",
          alignContent: "center",
          alignItems: "center",
          fontFamily: 'Arial", sans-serif',
        }}
      >
        <h1>Host: Vite + React</h1>
        <CompletedTaskCounter tasks={list} />
        <div className="card">
          <button
            style={{
              backgroundColor: "white",
              border: "2px solid #d6dbdf",
              color: "black",
              borderRadius: "10px",
              height: "1.5em",
            }}
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>

        <LineStyle />

        <Welcome />
        <Button />
        <Todo />

        <LineStyle />
        <RemoteCheckerPage />
        <LineStyle />
        <HostApp />
      </div>
    </>
  );
};

export default TodoPage;
