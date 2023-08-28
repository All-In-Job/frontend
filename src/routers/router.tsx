import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import Login from "../pages/login/Login";
import FindID from "../pages/findID/FindID";
import Signup from "../pages/Signup";

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
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'find-id',
        element: <FindID />
      }
    ]
  },
]);
