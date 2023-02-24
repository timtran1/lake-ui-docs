import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";

import './assets/css/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
