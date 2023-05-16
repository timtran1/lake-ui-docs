import {createBrowserRouter} from "react-router-dom";
import Home from "./routes/Home.jsx";
import ButtonPage from "./routes/ButtonPage.jsx";
import InputPage from "./routes/InputPage.jsx";
import TabsPage from "./routes/TabsPage.jsx";
import CardPage from "./routes/CardPage.jsx";
import ToastPage from "./routes/ToastPage.jsx";
import SliderPage from "./routes/SliderPage.jsx";
import DialogPage from "./routes/DialogPage.jsx";
import DropdownPage from "./routes/DropdownPage.jsx";
import NavbarPage from "./routes/NavbarPage.jsx";
import CheckboxPage from "./routes/CheckboxPage.jsx";
import TextSlidePage from "./routes/TextSlidePage.jsx";

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
        path: "/card",
        element: <CardPage/>,
    },
    {
        path: "/toast",
        element: <ToastPage/>,
    },
    {
        path: "/slider",
        element: <SliderPage/>,
    },
    {
        path: "/dialog",
        element: <DialogPage/>,
    },
    {
        path: "/dropdown",
        element: <DropdownPage/>,
    },
    {
        path: "/navbars",
        element: <NavbarPage/>,
    },
    {
        path: "/checkbox",
        element: <CheckboxPage/>,
    },
    {
        path: "/text-slide",
        element: <TextSlidePage/>,
    }
])