import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'
import './main.css'

import {createBrowserRouter,RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header/><Main/><Footer/></>,
  },
  {
    path: "/noticias",
    element: 
      <>
        <Header/>
        <div>Página de Notícias!</div>
        <Footer/>
      </>,
  },  
  {
    path: "/sobre",
    element: <div>Página Sobre!</div>,
  },  
  {
    path: "/contato",
    element: <div>Página de contato!</div>,
  },  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
