/* import { useAtom } from "jotai";
import { Atom } from "jotai";

let todosAtom: Atom<string[]>;
try {
  const loadTodosAtom = async () => {
    const { todosAtom: importedTodosAtom } = await import(
      "hostRemote/sharedStore"
    );
    todosAtom = importedTodosAtom;
    console.log("todosAtom", todosAtom);
  };
  loadTodosAtom();
} catch (error) {
  console.error("Failed to load remote module:", error);
  // todosAtom = new Atom<string[]>([]);
}

const RemoteApp = () => {
  const [todos] = useAtom(todosAtom); // ใช้ state จาก host

  return (
    <div>
      <h2>Remote Todo List - poc</h2>
      <ul>
        {todos?.map((todo: string, index: number) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default RemoteApp;
 */

import { useState, useEffect, Suspense } from "react";
// import { useAtom } from "jotai";
import { Atom } from "jotai";

const RemoteApp = () => {
  const [todosAtom, setTodosAtom] = useState<Atom<string[]> | null>(null);

  useEffect(() => {
    const loadTodosAtom = async () => {
      try {
        const { todosAtom: importedTodosAtom } = await import(
          "hostRemote/sharedStore"
        );
        setTodosAtom(importedTodosAtom);
      } catch (error) {
        console.error("Failed to load remote module:", error);
      }
    };

    loadTodosAtom();
  }, []);

  if (!todosAtom) {
    return (
      <div>
        <h2>Loading...</h2>
        <p>Loading shared state...</p>
      </div>
    ); // แสดงข้อความโหลดระหว่างรอ
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {/* <TodoList todosAtom={todosAtom} /> */}
    </Suspense>
  );
};

/* const TodoList = ({ todosAtom }: { todosAtom: Atom<string[]> }) => {
  const [todos] = useAtom(todosAtom);

  return (
    <div>
      <h2>Remote Todo List - poc</h2>
      <ul>
        {todos?.map((todo: string, index: number) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}; */

export default RemoteApp;
