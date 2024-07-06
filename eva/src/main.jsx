import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Prew from './pages/prew.jsx'
import Contact from './pages/contact.jsx'
import About from './pages/about.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Prew/>
  },
  {
    path:'about',
    element:<About/>
  },
  { 
    path:'contact',
    element:<Contact/>
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
