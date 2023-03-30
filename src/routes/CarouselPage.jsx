import {Carousel} from '@asynctech/lake-ui'
// import Carousel from "../components/base/Carousel.jsx";
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
                    <div className="flex flex-col items-center">
                        <h4 className="text-white font-bold text-xl mb-4 mt-8 ">Simple image carousel</h4>
                        <Carousel autoPlay>
                            <div className="bg-[url('/lake-1.jpg')] bg-cover bg-no-repeat bg-center h-72 w-96"></div>
                            <div className="bg-[url('/lake-2.jpg')] bg-cover bg-no-repeat bg-center h-72 w-96"></div>
                            <div className="bg-[url('/lake-3.jpg')] bg-cover bg-no-repeat bg-center h-72 w-96"></div>
                        </Carousel>

                        <h4 className="text-white font-bold text-xl mb-4 mt-8 ">Carousel with hybrid content</h4>
                        <Carousel autoPlay>
                            <div className="bg-[url('/lake-1.jpg')] bg-cover bg-no-repeat bg-center h-72 w-96"></div>
                            <div className="bg-[url('/lake-2.jpg')] bg-cover bg-no-repeat bg-center h-72 w-96"></div>
                            <div className="bg-[url('/lake-3.jpg')] bg-cover bg-no-repeat bg-center h-72 w-96"></div>
                        </Carousel>
                    </div>
                </SimpleCodeSection>
            </main>
        </div>
    );
}