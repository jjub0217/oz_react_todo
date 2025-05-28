import Todo from "./Todo";

const TodoList = ({ todoList, removeTodo }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
