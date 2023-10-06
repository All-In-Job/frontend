import { createBrowserRouter } from 'react-router-dom';

// import PassionTempList from 'components/CardList/PassionTempList/PassionTempList';
import FindID from 'pages/findID/FindID';
import { Home } from 'pages/Home';
import Login from 'pages/login/Login';
import Signup from 'pages/Signup';

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
      },
      {
        path: 'find-id',
        element: <FindID />,
      },
    ],
  },
]);
