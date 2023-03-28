import TopBar from "../components/Topbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {useState} from "react";
import {
    Button,
    Toast
} from "@asynctech/lake-ui";
// import Toast from "../components/base/Toast.jsx";
import SimpleCodeSection from "../components/SimpleCodeSection.jsx";
import ExampleCodeSection from "../components/ExampleCodeSection.jsx";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const [toastOpen, setToastOpen] = useState(false)
    const [toastLeftOpen, setToastLeftOpen] = useState(false)
    const [toastBottomOpen, setToastBottomOpen] = useState(false)
    const [toastLeftBottomOpen, setToastLeftBottomOpen] = useState(false)

    const [toastCustomDelayOpen, setToastCustomDelayOpen] = useState(false)
    const [toastDisableAutoOpen, setToastDisableAutoOpen] = useState(false)

    const [toastDisableCloseBtn, setToastDisableCloseBtn] = useState(false)
    const [toastCustomButtonOpen, setToastCustomButtonOpen] = useState(false)

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

                {/*toast positions*/}
                {/*custom styling*/}
                {/*custom delay, disable autoclose*/}
                {/*custom close button, button position*/}

                <SimpleCodeSection code={``}>
                    <div className="flex flex-col gap-6">
                        <Button onClick={() => setToastOpen(true)}>
                            Open a Toast
                        </Button>
                        <Button onClick={() => setToastLeftOpen(true)}>
                            Open a Toast on the left
                        </Button>
                        <Button onClick={() => setToastBottomOpen(true)}>
                            Open a Toast at the bottom
                        </Button>
                        <Button onClick={() => setToastLeftBottomOpen(true)}>
                            Open a Toast at the bottom left
                        </Button>

                        <Toast useOpen={[toastOpen, setToastOpen]}>
                            <p>You opened a toast!</p>
                        </Toast>
                        <Toast useOpen={[toastLeftOpen, setToastLeftOpen]} left>
                            <p>You opened a toast on the left!</p>
                        </Toast>
                        <Toast useOpen={[toastBottomOpen, setToastBottomOpen]} bottom>
                            <p>You opened a toast at the bottom!</p>
                        </Toast>
                        <Toast useOpen={[toastLeftBottomOpen, setToastLeftBottomOpen]} left bottom>
                            <p>You opened a toast at the bottom left!</p>
                        </Toast>
                    </div>
                </SimpleCodeSection>


                <h3 className="text-lg font-semibold mt-6">Custom colors and styling</h3>
                <ExampleCodeSection>

                </ExampleCodeSection>

                <h3 className="text-lg font-semibold mt-6">Custom timeout and disabling auto-close</h3>
                <SimpleCodeSection code={``}>
                    <div className="flex flex-col gap-6">
                        <Button onClick={() => setToastCustomDelayOpen(true)}>
                            Open a Toast with a 10-seconds timeout
                        </Button>
                        <Button onClick={() => setToastDisableAutoOpen(true)}>
                            Open a Toast with auto-close disabled
                        </Button>

                        <Toast useOpen={[toastCustomDelayOpen, setToastCustomDelayOpen]} timeOut={10000}>
                            <p>This toast will dismiss after 10 seconds.</p>
                        </Toast>
                        <Toast useOpen={[toastDisableAutoOpen, setToastDisableAutoOpen]} disableAutoClose>
                            <p>This toast will never auto-dismiss.</p>
                        </Toast>
                    </div>
                </SimpleCodeSection>


                <h3 className="text-lg font-semibold mt-6">Custom close button</h3>
                <SimpleCodeSection code={``}>
                    <div className="flex flex-col gap-6">
                        <Button onClick={() => setToastDisableCloseBtn(true)}>
                            Open a Toast with close button disabled
                        </Button>
                        <Button onClick={() => setToastCustomButtonOpen(true)}>
                            Open a Toast with a custom close button
                        </Button>

                        <Toast useOpen={[toastDisableCloseBtn, setToastDisableCloseBtn]} disableCloseBtn>
                            <p>This toast has no close button.</p>
                        </Toast>
                        <Toast useOpen={[toastCustomButtonOpen, setToastCustomButtonOpen]} disableCloseBtn
                               timeOut={90000}>
                            <span>This toast has a custom close button.</span>
                            <Button className={`bg-black py-1 px-2 ml-1 my-1`}
                                    onClick={() => setToastCustomButtonOpen(false)}>
                                Close
                            </Button>
                        </Toast>
                    </div>
                </SimpleCodeSection>


            </main>
        </div>
    )
}