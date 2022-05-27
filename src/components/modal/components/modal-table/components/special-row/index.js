import React, { useRef, useState } from "react";
import TodoService from "../../../../../../views/services/todos_service";

const SpecialRow = ({ x, statusList, setStatusList }) => {
  const [colorValue, setColorValue] = useState(x.color);
  const [statusTitle, setStatusTitle] = useState(x.title);
  const [isFocused, setIsFocused] = useState(false);
  const modalInputRef = useRef(null);

  const updateStatus = async () => {
    const obj = {
      id: x.id,
      title: statusTitle,
      color: colorValue,
    };
    const resp = await TodoService.Status.updateStatus(obj);
    const newArr = statusList.map((elem) =>
      elem.id === resp.data.id ? resp.data : elem
    );
    setStatusList(newArr);
    setIsFocused(false);
  };
  return (
    <tr style={{ backgroundColor: x.color }}>
      <td>
        <span
          hidden={isFocused}
          onClick={() => {
            modalInputRef.current.focus();
            setIsFocused(!isFocused);
          }}
        >
          {statusTitle}
        </span>

        <input
          style={{
            opacity: isFocused ? 1 : 0,
            pointerEvents: isFocused ? "all" : "none",
          }}
          ref={modalInputRef}
          value={statusTitle}
          onChange={(e) => setStatusTitle(e.target.value)}
        />
      </td>
      <td>
        <input
          type="color"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
          style={{ height: "27px" }}
        />
      </td>
      <td>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => updateStatus()}>Güncelle</button>
        </div>
      </td>
    </tr>
  );
};

export default SpecialRow;
