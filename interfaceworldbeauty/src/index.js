import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Listagem from './pages/listagem';
import Cadastro from './pages/cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
  path: "/",
  element: <App />
},
{
  path: "listagem",
  element: <Listagem />
},
{
  path: "cadastro",
  element: <Cadastro />
}])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

