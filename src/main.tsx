import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import { store } from './modules/redux'
import { router } from './modules/routing'; 

import 'react-toastify/dist/ReactToastify.css';
import './index.css'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer/>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
