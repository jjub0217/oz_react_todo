import { useRef } from "react";

const TodoInput = ({ addTodo }) => {
  const inputRef = useRef(null);

  const handleAdd = () => {
    const newContent = {
      content: inputRef.current.value,
      time: 0,
    };
    addTodo(newContent);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleAdd}>추가</button>
    </>
  );
};

export default TodoInput;
