import React, { useCallback, useEffect, useState } from "react";
import Modal from "../../components/modal/modal";
import TodoService from "../services/todos_service";
import "./app.css";
import ButtonGroup from "./components/button-group";
import CategoryFilterGroup from "./components/category/category-filter-group";
import Table from "./components/table/table";
import TodoFilterGroup from "./components/todo/todo-filter-group";
const AppViews = () => {
  const [isTodoList, setIsTodoList] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);

  const getTableValues = useCallback(async () => {
    if (isTodoList) {
      const todos = await TodoService.Todo.getTodos();
      setTodoList(todos.data);
    } else {
      const categories = await TodoService.Category.getCategories();
      setTodoList(categories.data);
    }
  }, [isTodoList]);

  useEffect(() => {
    getTableValues();
  }, [isTodoList, getTableValues]);
  const tableProps = {
    todoList,
    isTodoList,
    setTodoList,
    setModalVisible,
    setSelectedCategory,
  };
  return (
    <div className="app-views-main">
      <div className="app-views-wrapper">
        <ButtonGroup setIsTodoList={setIsTodoList} />
        {isTodoList ? (
          <TodoFilterGroup {...{ todoList, setTodoList }} />
        ) : (
          <CategoryFilterGroup {...{ todoList, setTodoList }} />
        )}
        <Table {...tableProps} />
      </div>
      <Modal
        selectedCategory={selectedCategory}
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      >
        test
      </Modal>
    </div>
  );
};

export default AppViews;
