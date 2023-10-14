import { createBrowserRouter } from 'react-router-dom';

// import PassionTempList from 'components/CardList/PassionTempList/PassionTempList';
import FindID from 'pages/findID/FindID';
// import { Home } from 'pages/Home';
import { Home } from 'pages/Home';
import Login from 'pages/login/Login';
import Community from 'pages/menu/main/Community/Community';
import Competition from 'pages/menu/main/Competition/Competition';
import Intern from 'pages/menu/main/Intern/Intern';
import Language from 'pages/menu/main/Language/Language';
import Outside from 'pages/menu/main/Outside/Outside';
import Qnet from 'pages/menu/main/Qnet/Qnet';
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
      {
        path: 'competition',
        element: <Competition />,
      },
      {
        path: 'outside',
        element: <Outside />,
      },
      {
        path: 'qnet',
        element: <Qnet />,
      },
      {
        path: 'language',
        element: <Language />,
      },
      {
        path: 'intern',
        element: <Intern />,
      },
      {
        path: 'community',
        element: <Community />,
      },
    ],
  },
]);
