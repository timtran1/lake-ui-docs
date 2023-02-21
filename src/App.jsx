import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import React from "react";
import Sidebar from "./components/Sidebar.jsx";

export default function App() {

  return (
    <div className="App h-screen w-screen flex">
      <Sidebar/>

        <RouterProvider router={router}/>
    </div>
  )
}
