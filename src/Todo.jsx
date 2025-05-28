const Todo = ({ todo, removeTodo }) => {
  return (
    <li>
      {todo.content}
      {/* <button onClick={handleTodoFetch}>수정</button> */}
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
