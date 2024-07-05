import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const dummyData = [
  {
    id: "1",
    title: "test Title",
    content: "hello world",
  },
  {
    id: "2",
    title: "test Title2",
    content: "hello world2",
  },
];

function App() {
  // const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState(dummyData);
  return (
    <>
      {/* <div>{todoList[0].title}</div>
      <div>{todoList[1].title}</div> */}

      {todoList.map((todo, i) => {
        return (
          <>
            <div>{todo.title}</div>
            <div>{todo.content}</div>
          </>
        );
      })}
    </>
  );
}

export default App;
