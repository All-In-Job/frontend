import { createBrowserRouter } from 'react-router-dom';

// import PassionTempList from 'components/CardList/PassionTempList/PassionTempList';

import { BasicInformation } from 'components/BasicInformation/BasicInformation';
import FindID from 'pages/findID/FindID';
// import { Home } from 'pages/Home';
import { Home } from 'pages/Home';
import Login from 'pages/login/Login';
import Menu from 'pages/menu/Menu';
import MenuList from 'pages/menu/MenuList/MenuList';
import Signup from 'pages/signUp/SignUp';

// eslint-disable-next-line react-refresh/only-export-components
// const HomeWithPassion = () => (
//   <>
//     {/* <Home /> */}
//     <FindID />
//     <Login />
//     <PassionTempList />
//   </>
// );

export const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
        children: [
          {
            path: 'basic-info',
            element: <BasicInformation />,
          },
        ],
      },
      {
        path: 'find-id',
        element: <FindID />,
      },
      {
        path: ':menuName',
        element: <Menu />,
        children: [{ path: ':categoryId', element: <MenuList /> }],
      },
    ],
  },
]);
