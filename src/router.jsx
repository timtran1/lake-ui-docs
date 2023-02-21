import {createBrowserRouter} from "react-router-dom";
import Homebase from "./routes/Home.jsx";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
])