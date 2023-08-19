import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import Login from "../pages/login/Login";
import FindID from "../pages/findID/FindID";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'find-id',
        element: <FindID />
      }
    ]
  },
]);
