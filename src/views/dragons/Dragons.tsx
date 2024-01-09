import React from "react";
import UseGetDragonList from "../../hooks/query/useGetDragonList";

const Dragons = () => {
  const re = UseGetDragonList();
  console.log(re);
  return (
    <div>
      <p>Hello dragons</p>
    </div>
  );
};

export default Dragons;
