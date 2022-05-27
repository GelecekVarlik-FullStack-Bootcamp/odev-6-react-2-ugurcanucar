import React, { useCallback, useEffect, useState } from "react";
import TodoService from "../../../../services/todos_service";

const TodoFilterGroup = ({ todoList, setTodoList }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [todoDescription, setTodoDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState({});
  const [selectedStatus, setSelectedStatus] = useState({});

  const getSelectValues = useCallback(async () => {
    const categories = await TodoService.Category.getCategories();
    setCategoryList(categories.data);
    if (categories.data.length > 0) {
      setSelectedCategory(categories.data[0].id);
      const status = await TodoService.Status.getStatus(categories.data[0].id);
      if (status.data.length > 0) {
        setStatusList(status.data);
        setSelectedStatus(status.data[0].id);
      }
    }
  }, []);

  useEffect(() => {
    getSelectValues();
  }, [getSelectValues]);

  const changeCategory = async (e) => {
    const status = await TodoService.Status.getStatus(e);
    setSelectedCategory(parseInt(e));
    setStatusList(status.data);
    if (status.data.length === 0) return setSelectedStatus(0);
    setSelectedStatus(status.data[0].id);
  };

  const addNewTodo = async () => {
    const obj = {
      title: todoDescription,
      categoryId: selectedCategory,
      statusId: selectedStatus,
    };
    console.log(obj);
    const resp = await TodoService.Todo.addNewTodo(obj);
    setTodoList([...todoList, resp.data]);
    setTodoDescription("");
  };

  return (
    <div className="filter-group">
      <input
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
        placeholder="Todo Açıklama"
      />
      <select
        placeholder="Kategori"
        onChange={(e) => changeCategory(e.target.value)}
      >
        {categoryList.map((x) => (
          <option key={x.id} value={x.id}>
            {x.title}
          </option>
        ))}
      </select>
      <select placeholder="Durum">
        {statusList.map((x) => (
          <option key={x.id}>{x.title}</option>
        ))}
      </select>
      <button onClick={() => addNewTodo()}>Ekle</button>
    </div>
  );
};

export default TodoFilterGroup;
