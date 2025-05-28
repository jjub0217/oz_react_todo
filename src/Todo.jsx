import { formatTime } from "./utils/formatTime";

const Todo = ({ todo, removeTodo, handleSelectTodo }) => {
  return (
    <li>
      <div>
        {todo.content}
        <br />
        {formatTime(todo.time)}
      </div>
      <button onClick={() => handleSelectTodo(todo.id)}>시작하기</button>
      <button
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        삭제
      </button>
    </li>
  );
};

export default Todo;
