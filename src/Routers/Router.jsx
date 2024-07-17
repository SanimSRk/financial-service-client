import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Login from '../FormReleted/Login/Login';
import SignUp from '../FormReleted/SignUp/SignUp';
import SendMoney from '../Pages/SendMoney/SendMoney';
import CashOut from '../Pages/CashOut/CashOut';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
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
    ],
  },
]);
