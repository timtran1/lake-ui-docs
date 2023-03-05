import {Button, Card, Input, TabPanel, Tabs} from '@asynctech/lake-ui'
import {useState} from "react";
import TopBar from "../components/Topbar.jsx";
import Sidebar from "../components/Sidebar.jsx";

import '../assets/css/home.css'


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className={`w-screen h-screen bg-gray-50`}>

                <div className={`flex m-auto max-w-7xl pt-20`}>
                    <div className={`w-1/3`}>
                        <h1 className={`text-5xl font-bold mb-3`}>Lake UI</h1>
                        <h2 className={` text-2xl`}>
                            Modern React UI components <br/>
                            fully customizable <br/>
                            with inline CSS, CSS classes, and Tailwind classes</h2>
                        <div className={`flex py-4`}>
                            <Button className={`mr-1 py-2.5 px-5 bg-black font-bold`}>Get started</Button>
                            <Button
                                className={`ml-1 py-2.5 px-5 text-black bg-gray-200/30 backdrop-blur-sm`}>Components</Button>
                        </div>

                        <div className={`pt-4`}>
                            <div>Quick Search</div>
                            <Input className={`border border-gray-300 shadow-none h-12 text-lg`} placeholder="CmD + K"/>
                        </div>
                    </div>

                    <div className={`w-2/3 bg-gradient-to-r from-green-400 to-cyan-500 rounded-md shadow p-4 pt-6`}>

                        <div className={`max-w-xs float-10`}>
                            <Tabs
                                className="backdrop-blur-sm bg-white/30 mb-1 "
                                useCurrentTabIndex={[tabIndex, setTabIndex]}
                                tabs={['Lorem', 'Ipsum', 'Dolor']}
                            >
                                <TabPanel className="bg-white p-5 rounded-md" index={0} currentTabIndex={tabIndex}>
                                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </TabPanel>
                                <TabPanel className="bg-white p-5 rounded-md" index={1} currentTabIndex={tabIndex}>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est laborum.
                                </TabPanel>
                                <TabPanel className="bg-white p-5 rounded-md" index={2} currentTabIndex={tabIndex}>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </TabPanel>
                            </Tabs>
                        </div>

                        <div className={`float-7 mt-6`}>
                            <Card className="max-w-lg p-3.5 mb-6">
                                <h3 className={`font-semibold text-center`}>Sample checkout</h3>
                                <div className="w-full flex my-3 justify-center">
                                    <img src="/visa.png" className="h-12"/>
                                    <img src="/Mastercard-logo.svg" className="h-12 ml-4"/>
                                    <img src="/American_Express_logo.svg" className="h-12 ml-4"/>
                                </div>

                                <div className="w-full mb-2">
                                    <label htmlFor="card-name">Name on card</label>
                                    <Input id="card-name" className="w-full border border-gray-400 shadow-none"
                                           placeholder="Name on card"/>
                                </div>

                                <div className="w-full flex space-x-2">
                                    <div className="w-full md:w-2/3">
                                        <label htmlFor="card">Card number</label>
                                        <Input id="card" className="w-full border border-gray-400 shadow-none"
                                               placeholder="xxxx xxxx xxxx xxxx" maxLength="16"/>
                                    </div>
                                    <div className="w-full md:w-1/6">
                                        <label htmlFor="expiry">Expiry</label>
                                        <Input id="expiry" className="w-full border border-gray-400 shadow-none"
                                               placeholder="MM/YY"/>
                                    </div>
                                    <div className="w-full md:w-1/6">
                                        <label htmlFor="cvv">CVV</label>
                                        <Input id="cvv" className="w-full border border-gray-400 shadow-none"
                                               type="password"
                                               placeholder="123" maxLength="3"/>
                                    </div>
                                </div>
                                <Button className="w-full mt-4 bg-black">Checkout</Button>
                            </Card>
                        </div>

                    </div>

                </div>

            </main>
        </div>
    )
}