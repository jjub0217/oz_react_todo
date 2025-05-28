import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Advice from "./Advice";
import "./App.css";
import Clock from "./Clock";
import StopWatch from "./StopWatch";
import Timer from "./Timer";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import usePost from "./usePost";

function App() {
  const [todoList, setTodoList] = useState([
    { id: uuidv4(), content: "밥 먹기" },
    { id: uuidv4(), content: "코딩 공부하기" },
    { id: uuidv4(), content: "잠 자기" },
  ]);

  const inputRef = useRef(null);

  const { sendData } = usePost("http://localhost:3000/todo");

  const addTodo = (newTodo) => {
    setTodoList((prev) => [...prev, newTodo]);
  };

  const removeTodo = (targetId) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== targetId));
  };

  return (
    <>
      <StopWatch />
      <Timer />
      <TodoInput ref={inputRef} addTodo={addTodo} />
      <TodoList todoList={todoList} removeTodo={removeTodo} />
      <Clock />
      <Advice />

      {/* <input type="text" />
      <button onClick={addTodo}>추가</button> */}
      {/* <ul>
        {todoList.map((todo) => (
          // <Todo
          //   key={todo.id}
          //   todo={todo}
          //   todoList={todoList}
          //   setTodoList={setTodoList}
          // />
          <li key={todo.id}>
            {todo.content}
            <button
              className="remove"
              onClick={() => {
                removeTodo(todo.id);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default App;
