import Todo from "./Todo";

const TodoList = ({ todoList, removeTodo, handleSelectTodo }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          handleSelectTodo={handleSelectTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
