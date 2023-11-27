import { AxiosError } from 'axios';
import { createBrowserRouter } from 'react-router-dom';


import { getLoginUserInfo } from 'apis/user';
import { ActivityHistory } from 'components/ActivityHistory/ActivityHistory';
import { BasicInformation } from 'components/BasicInformation/BasicInformation';
import { Calendar } from 'components/Calendar/Calendar';
import Error from 'components/Error/Error';
import InterestForm from 'components/InterestForm/InterestForm';
import { DetailPage } from 'pages/detail';
import FindID from 'pages/findID/FindID';
import { Home } from 'pages/Home';
import Login from 'pages/login/Login';
import Menu from 'pages/menu/Menu';
import MenuList from 'pages/menu/MenuList/MenuList';
import MyInfo from 'pages/myInfo/MyInfo';
import { NewPost } from 'pages/newPost/NewPost';
import ScrapPage from 'pages/scrap/ScrapPage';
import Signup from 'pages/signUp/SignUp';

const getUserProfile = async () => {
  try {
    const res = await getLoginUserInfo();
    return res.data.data;
  } catch (e) {
    if (e instanceof AxiosError && e.response) {
      return null;
    }
  }
};

export const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
    errorElement: <Error />,
    loader: getUserProfile,
    children: [
      {
        path: 'scrap',
        element: <ScrapPage />,
      },
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
          {
            path: 'interest',
            element: <InterestForm />,
          },
        ],
      },
      {
        path: 'my-info',
        element: <MyInfo />,
      },
      {
        path: 'passion-temperature',
        element: <ActivityHistory />,
      },
      {
        path: 'find-id',
        element: <FindID />,
      },
      {
        path: ':menuName',
        element: <Menu />,
        children: [
          {
            path: ':categoryId',
            element: <MenuList />,
            loader: getUserProfile,
          },
        ],
      },
      {
        path: ':menuName/:categoryId/:detailId',
        element: <DetailPage />,
        loader: getUserProfile,
      },
      {
        path: ':menuName/newpost',
        element: <NewPost />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
    ],
  },
]);
