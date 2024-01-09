import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  // const r = getDragonList();
  // console.log(r);

  // const re = UseGetDragonList();

  // console.log(re);
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default HomePage;
