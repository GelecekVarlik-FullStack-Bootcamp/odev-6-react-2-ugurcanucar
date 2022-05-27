import React, { useState } from "react";
import TodoService from "../../../../services/todos_service";

const CategoryFilterGroup = ({ todoList, setTodoList }) => {
  const [categoryDescription, setCategoryDescription] = useState("");

  const addNewCategory = async () => {
    const resp = await TodoService.Category.addNewCategory({
      title: categoryDescription,
    });
    setTodoList([...todoList, resp.data]);
    setCategoryDescription("");
  };

  return (
    <div className="filter-group">
      <input
        style={{ width: "100%" }}
        placeholder="Kategori Adı"
        value={categoryDescription}
        onChange={(e) => setCategoryDescription(e.target.value)}
      />
      <button onClick={() => addNewCategory()}>Ekle</button>
    </div>
  );
};

export default CategoryFilterGroup;
