import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./routes/HomePage";
import Dragons from "./views/dragons/Dragons";
import Rockets from "./views/rockets/Rockets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Missions from "./views/missions/Missions";
const rootElement = document.getElementById("root");

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "/",
        element: <div>Hello</div>,
      },
      {
        path: "/dragonList",
        element: <Dragons></Dragons>,
      },
      {
        path: "/missionList",
        element: <Missions></Missions>,
      },
      {
        path: "/rocketList",
        element: <Rockets></Rockets>,
      },
      {
        path: "/rocketList",
        element: <Rockets></Rockets>,
      },
    ],
  },
]);

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
} else {
  console.error('Could not find the root element with id "root".');
}
