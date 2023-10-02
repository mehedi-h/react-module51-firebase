import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import UserProvider from './Providers/UserProvider';
import Orders from './Pages/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/registration",
      element: <Registration></Registration>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/orders",
      element: <PrivateRoute><Orders></Orders></PrivateRoute>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
