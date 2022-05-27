import React, { useCallback, useEffect, useState } from "react";
import TodoService from "../../views/services/todos_service";
import ModalTable from "./components/modal-table/modal-table";
import "./modal.css";
const Modal = ({ selectedCategory, isVisible, onClose }) => {
  const [statusList, setStatusList] = useState([]);
  const [statusTitle, setStatusTitle] = useState("");
  const [colorValue, setColorValue] = useState("#f3f3f3");
  window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      onClose();
    }
  };

  const getStatusList = useCallback(async () => {
    const resp = await TodoService.Status.getStatus(selectedCategory.id);
    setStatusList(resp.data);
  }, [selectedCategory]);

  useEffect(() => {
    if (Object.entries(selectedCategory).length !== 0) getStatusList();
  }, [selectedCategory, getStatusList]);

  const addNewStatus = async () => {
    const obj = {
      title: statusTitle,
      categoryId: selectedCategory.id,
      color: colorValue,
    };
    const resp = await TodoService.Status.addNewStatus(obj);
    setStatusTitle("");
    setStatusList([...statusList, resp.data]);
  };

  return (
    <div id="modal" className="modal-wrapper" hidden={!isVisible}>
      <div className="modal-box">
        <div className="modal-header">
          <span className="modal-title">
            {selectedCategory.title} - Statüler
          </span>
          <span className="close-button" onClick={onClose}>
            X
          </span>
        </div>
        <hr />
        <div className="modal-content">
          <div className="modal-button-group">
            <div className="modal-input-group">
              <input
                placeholder="Durum Başlığı"
                value={statusTitle}
                onChange={(e) => setStatusTitle(e.target.value)}
              />
              <input
                type="color"
                value={colorValue}
                onChange={(e) => setColorValue(e.target.value)}
              />
            </div>
            <button onClick={() => addNewStatus()} className="modal-button">
              Ekle
            </button>
          </div>
          <ModalTable {...{ statusList, setStatusList }} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Modal;
