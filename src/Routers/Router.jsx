import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Login from '../FormReleted/Login/Login';
import SignUp from '../FormReleted/SignUp/SignUp';
import SendMoney from '../Pages/SendMoney/SendMoney';
import CashOut from '../Pages/CashOut/CashOut';
import CashIn from '../Pages/CashIn/CashIn';
import UserHostry from '../Pages/userHostry/UserHostry';
import OwerView from '../Pages/OverView/OwerView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <OwerView></OwerView>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/sendmoney',
        element: <SendMoney></SendMoney>,
      },
      {
        path: '/cashout',
        element: <CashOut></CashOut>,
      },
      {
        path: '/cashin',
        element: <CashIn></CashIn>,
      },
      {
        path: '/userhistry',
        element: <UserHostry></UserHostry>,
      },
    ],
  },
]);
