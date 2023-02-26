import TopBar from "../components/base/TopBar.jsx";
import Sidebar from "../components/base/Sidebar.jsx";
import Button from "../components/base/Button.jsx";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        // <div>
            <main className={`w-screen h-screen bg-gradient-to-b to-amber-300 from-orange-500`}>
                <div className={`m-auto max-w-2xl text-center pt-20`}>
                    <h1 className={`text-5xl font-bold text-white mb-3`}>Lake UI</h1>
                    <h2 className={` text-2xl text-white`}>
                        UI components fully customizable <br/> with inline CSS
                        and classes/Tailwind</h2>
                    <div className={`flex justify-center py-4`}>
                        <Button className={`mr-1 py-2.5 px-5 bg-black font-bold`}>Get started</Button>
                        <Button className={`ml-1 py-2.5 px-5 bg-gray-200/30 backdrop-blur-sm`}>Components</Button>
                    </div>

                    <div>
                        Quick Search
                    </div>

                </div>
            </main>
        // </div>
    )
}