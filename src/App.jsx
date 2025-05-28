import { useEffect, useState } from "react";
import Advice from "./Advice";
import "./App.css";
import Clock from "./Clock";
import StopWatch from "./StopWatch";
import Timer from "./Timer";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import useDelete from "./useDelete";
import useFetch from "./useFetch";
import useGet from "./useGet";
import usePost from "./usePost";

function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: uuidv4(), content: "밥 먹기" },
  //   { id: uuidv4(), content: "코딩 공부하기" },
  //   { id: uuidv4(), content: "잠 자기" },
  // ]);
  const [todoList, setTodoList] = useState([]);
  const [isStopwatch, setIsStopwatch] = useState(true);

  // 어떤 todo의 시간을 측정할지 정한다.
  const [selectedTodoId, setSelectedTodoId] = useState(0);

  const { isLoading, data } = useGet("http://localhost:3000/todo");
  const { sendData } = usePost("http://localhost:3000/todo");
  const { deleteData } = useDelete();
  const { patchData } = useFetch();

  const addTodo = async (newTodo) => {
    const { id, ...dataWithoutId } = newTodo;
    const result = await sendData(dataWithoutId);
    // setTodoList((prev) => [...prev, newTodo]);
    setTodoList((prev) => [...prev, result]);
  };

  const removeTodo = async (targetId) => {
    await deleteData(`http://localhost:3000/todo/${targetId}`);
    setTodoList((prev) => prev.filter((todo) => todo.id !== targetId));
  };

  const handleMode = () => {
    setIsStopwatch((prev) => !prev);
  };

  const updateFetchTimeForTodo = (selectedTodoId, updatedTime) => {
    patchData(`http://localhost:3000/todo/${selectedTodoId}`, {
      time: updatedTime,
    });
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === selectedTodoId ? { ...todo, time: updatedTime } : todo
      )
    );
  };

  // 스탑워치 켜기 버튼
  // todo 의 id 가 들어온다
  const handleSelectTodo = (id) => {
    setSelectedTodoId(id);
  };

  useEffect(() => {
    if (data) {
      setTodoList(data);
    }
  }, [isLoading]);

  return (
    <>
      <Advice />
      <button onClick={handleMode}>
        {isStopwatch ? "타이머로 변경" : "스탑워치로 변경"}
      </button>
      {isStopwatch ? (
        <StopWatch
          selectedTodoId={selectedTodoId}
          updateFetchTimeForTodo={updateFetchTimeForTodo}
        />
      ) : (
        <Timer />
      )}
      <TodoInput addTodo={addTodo} />
      {!isLoading && (
        <TodoList
          todoList={todoList}
          removeTodo={removeTodo}
          handleSelectTodo={handleSelectTodo}
        />
      )}
      <Clock />
    </>
  );
}

export default App;
