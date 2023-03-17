import {Dialog, Button} from '@asynctech/lake-ui'
// import Dialog from "../components/base/Dialog.jsx";
import Sidebar from "../components/Sidebar.jsx";
import TopBar from "../components/Topbar.jsx";
import {useState} from "react";
import SimpleCodeSection from "../components/SimpleCodeSection.jsx";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-[800px] pt-10 pb-20 px-6">
                <h2 className="text-3xl font-bold mb-3">Dialog</h2>

                <h3 className="text-lg font-semibold">Usage</h3>
                <p className="mb-4">
                    To use the Dialog component, import it and add it to your JSX code.
                </p>

                <SimpleCodeSection>
                    <Button className="bg-black" onClick={() => setDialogOpen(true)}>
                        Open a dialog
                    </Button>
                    <Dialog useOpen={[dialogOpen, setDialogOpen]}>
                        <div className="bg-red-500 h-96 w-96"></div>
                    </Dialog>
                </SimpleCodeSection>
            </main>
        </div>
    );
}