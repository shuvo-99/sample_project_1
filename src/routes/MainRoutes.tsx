import HomePage from "./HomePage";

const MainRoutes = {
  path: "/",
  element: <HomePage></HomePage>,
  children: [
    {
      path: "/demo",
      element: <div></div>,
    },
  ],
};

export default MainRoutes;
