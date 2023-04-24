import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>
    <RouterProvider router={router}></RouterProvider></AuthProvider>

)
