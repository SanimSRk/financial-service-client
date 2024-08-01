import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Router';
import AuthProvider from './AuthProviders/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
        <ToastContainer />
      </QueryClientProvider>
    </React.StrictMode>
  </AuthProvider>
);
