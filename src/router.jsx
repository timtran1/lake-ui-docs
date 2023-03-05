import {createBrowserRouter} from "react-router-dom";
import Home from "./routes/Home.jsx";
import ButtonPage from "./routes/ButtonPage.jsx";
import InputPage from "./routes/InputPage.jsx";
import TabsPage from "./routes/TabsPage.jsx";
import CardPage from "./routes/CardPage.jsx";

export default createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },

    {
        path: "/button",
        element: <ButtonPage/>,
    },
    {
        path: "/input",
        element: <InputPage/>,
    },
    {
        path: "/tabs",
        element: <TabsPage/>,
    },
    {
        path: "card",
        element: <CardPage/>,
    }
])