import React from "react";
import SpecialRow from "../special-row";
import "./table.css";
const Table = ({
  todoList,
  setTodoList,
  isTodoList,
  setModalVisible,
  setSelectedCategory,
}) => {
  return (
    <>
      <table>
        <tbody>
          {todoList.map((x) => (
            <SpecialRow
              key={x.id}
              {...{
                todoList,
                setTodoList,
                isTodoList,
                setModalVisible,
                setSelectedCategory,
                x,
              }}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
