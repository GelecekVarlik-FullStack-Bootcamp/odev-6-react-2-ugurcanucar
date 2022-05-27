import React, { useRef, useState } from "react";
import TodoService from "../../../services/todos_service";

const SpecialRow = ({
  x,
  todoList,
  setTodoList,
  isTodoList,
  setModalVisible,
  setSelectedCategory,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(x.title);

  const inputRef = useRef(null);
  const updateTodo = async () => {
    const obj = { ...x, title: value };
    var resp;
    if (isTodoList) {
      resp = await TodoService.Todo.updateTodo(obj);
    } else {
      resp = await TodoService.Category.updateCategory(obj);
    }

    const newArr = todoList.map((elem) =>
      elem.id === resp.data.id ? resp.data : elem
    );
    setTodoList(newArr);
  };
  return (
    <tr>
      <td>
        <span
          hidden={isFocused}
          onClick={() => {
            inputRef.current.focus();
            setIsFocused(!isFocused);
          }}
        >
          {x.title}
        </span>

        <input
          style={{
            opacity: isFocused ? 1 : 0,
            pointerEvents: isFocused ? "all" : "none",
          }}
          ref={inputRef}
          value={value}
          onBlur={() => setIsFocused(!isFocused)}
          onChange={(e) => setValue(e.target.value)}
        />
      </td>

      <td style={{ display: "flex", gap: 5 }}>
        {!isTodoList && (
          <button
            onClick={() => {
              setSelectedCategory(x);
              setModalVisible(true);
            }}
            style={{ whiteSpace: "nowrap" }}
          >
            Statüleri Gör
          </button>
        )}
        <button onMouseDown={() => updateTodo()}>Güncelle</button>
      </td>
    </tr>
  );
};

export default SpecialRow;
