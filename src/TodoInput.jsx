import { useRef } from "react";

const TodoInput = ({ addTodo }) => {
  const inputRef = useRef(null);

  const handleAdd = (e) => {
    e.preventDefault();
    const newContent = {
      content: inputRef.current.value,
      time: 0,
    };
    if (!newContent) return;
    addTodo(newContent);
    inputRef.current.value = "";
    inputRef.current.focus();
    // const content = inputRef.current.value.trim();
    // if (!content) return;

    // addTodo({ content, time: 0 });
    // inputRef.current.value = "";
    // inputRef.current.focus();
  };

  return (
    <form onSubmit={handleAdd}>
      <input type="text" ref={inputRef} />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInput;
