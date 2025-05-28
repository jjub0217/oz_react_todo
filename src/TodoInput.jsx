import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoInput = ({ addTodo }) => {
  const inputRef = useRef(null);

  const handleAdd = () => {
    const newContent = { id: uuidv4(), content: inputRef.current.value };
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
