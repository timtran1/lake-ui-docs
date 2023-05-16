import TopBar from "../components/navigation/Topbar.jsx";
import Sidebar from "../components/navigation/Sidebar.jsx";
import {useState} from "react";
// import TextSlide from "../components/base/TextSlide.jsx";
import {TextSlide} from '@deepsel/lake-ui'

export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-[800px] pt-10 pb-20 px-6">
                <h2 className="text-3xl font-bold mb-3">Text Slide Animation</h2>

                <h3 className="text-lg font-semibold">Usage</h3>


                <section className={`bg-green-300 h-screen p-20`}>
                    <TextSlide className={'text-white text-2xl'} right>
                        <div>aaa</div>
                        hahaha
                    </TextSlide>
                </section>
                <section className={`bg-blue-300 h-screen p-20`}>
                    <TextSlide className={'text-white text-2xl'}>
                        bbb
                    </TextSlide>
                </section>

            </main>

        </div>
    )
}