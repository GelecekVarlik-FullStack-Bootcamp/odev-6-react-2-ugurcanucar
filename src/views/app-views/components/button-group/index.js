import React from "react";

const ButtonGroup = ({ setIsTodoList }) => {
  return (
    <div className="button-group">
      <button onClick={() => setIsTodoList(true)}>Todolar</button>
      <button onClick={() => setIsTodoList(false)}>Kategoriler</button>
    </div>
  );
};

export default ButtonGroup;
