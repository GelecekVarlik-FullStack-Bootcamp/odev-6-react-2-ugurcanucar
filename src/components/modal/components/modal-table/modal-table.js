import React from "react";
import SpecialRow from "./components/special-row";

const ModalTable = ({ statusList, setStatusList }) => {
  return (
    <table>
      <tbody>
        {statusList.map((x) => (
          <SpecialRow {...{ x, statusList, setStatusList }} key={x.id} />
        ))}
      </tbody>
    </table>
  );
};

export default ModalTable;
