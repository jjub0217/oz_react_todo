import Todo from "./Todo";

const TodoList = ({
  todoList,
  selectedTodoId,
  removeTodo,
  handleSelectTodo,
}) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          isSelected={todo.id === selectedTodoId}
          removeTodo={removeTodo}
          handleSelectTodo={handleSelectTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
