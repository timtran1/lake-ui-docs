// import {Carousel} from '@asynctech/lake-ui'
import Carousel from "../components/base/Carousel.jsx";
import Sidebar from "../components/Sidebar.jsx";
import TopBar from "../components/Topbar.jsx";
import {useState} from "react";
import SimpleCodeSection from "../components/SimpleCodeSection.jsx";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-[800px] pt-10 pb-20 px-6">
                <h2 className="text-3xl font-bold mb-3">Carousel</h2>

                <h3 className="text-lg font-semibold">Usage</h3>
                <p className="mb-4">
                    To use the Carousel component, import it and add it to your JSX code.
                </p>

                <SimpleCodeSection>
                    <Carousel >
                        <div className="bg-red-500 h-96 w-96"></div>
                        <div className="bg-green-500 h-96 w-96"></div>
                        <div className="bg-blue-500 h-96 w-96"></div>
                    </Carousel>
                </SimpleCodeSection>
            </main>
        </div>
    );
}