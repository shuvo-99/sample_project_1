import React from "react";
import UseGetRocketList from "../../hooks/query/useGetRocketList";
const Rockets = () => {
  const re = UseGetRocketList();
  console.log(re);
  return (
    <div>
      <p>Hello Rocket</p>
    </div>
  );
};

export default Rockets;
