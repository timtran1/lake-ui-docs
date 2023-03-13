import TopBar from "../components/Topbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {useState} from "react";
import {Button, Toast} from "@asynctech/lake-ui";
import SimpleCodeSection from "../components/SimpleCodeSection.jsx";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [toastOpen, setToastOpen] = useState(false)

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-[800px] pt-10 pb-20 px-6">
                <h2 className="text-3xl font-bold mb-3">Toast</h2>

                <h3 className="text-lg font-semibold">Usage</h3>
                <p className="mb-4">
                    To use the Toast component, import it and add it to your JSX code.
                </p>

                <SimpleCodeSection code={``}
                >
                    <Button className="bg-black" onClick={() => setToastOpen(true)}>
                        Open Toast
                    </Button>

                    <Toast useOpen={[toastOpen, setToastOpen]}>
                        <p>You opened a toast!</p>
                    </Toast>
                </SimpleCodeSection>
            </main>
        </div>
    )
}