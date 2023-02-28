import {Button,} from '@asynctech/lake-ui'
import {useState} from "react";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        // <div>
            <main className={`w-screen h-screen bg-gradient-to-b from-green-400 to-cyan-500`}>
                <div className={`m-auto max-w-2xl text-center pt-20`}>
                    <h1 className={`text-5xl font-bold text-white mb-3`}>Lake UI</h1>
                    <h2 className={` text-2xl text-white`}>
                        React UI components <br/> fully customizable with inline CSS
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