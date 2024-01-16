import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux'
import { store } from './modules/redux'
import {router} from './modules/routing';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
);
