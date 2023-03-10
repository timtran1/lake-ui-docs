import {Button, Card, Input, TabPanel, Tabs, Toast} from '@asynctech/lake-ui'
import {useState} from "react";
import TopBar from "../components/Topbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus, faCopy, faHeart, faShareAlt, faStar} from "@fortawesome/free-solid-svg-icons";
// import {Link} from "react-router-dom";

import '../assets/css/home.css'
import {faCommentAlt, faStarHalfStroke} from "@fortawesome/free-regular-svg-icons";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [copyToastOpen, setCopyToastOpen] = useState(false)
    const [tabIndex, setTabIndex] = useState(0)
    const [getStarted, setGetStarted] = useState('npm install @asynctech/lake-ui')

    function copyToClipboard() {
        navigator.clipboard.writeText(getStarted);
        setCopyToastOpen(true)
    }

    return (
        <div className={`md:h-screen w-screen flex flex-col`}>
            <TopBar setSidebarOpen={setSidebarOpen} className={``}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>
            <Toast className={`text-white bg-green-500 p-1 pl-2`} useOpen={[copyToastOpen, setCopyToastOpen]}>
                Copied!
            </Toast>

            <main className={`w-full flex-grow bg-gray-50 relative overflow-hidden`}>

                <div className={`flex flex-wrap m-auto max-w-7xl text-center md:text-left justify-ar`}>
                    <div className={`md:w-1/3 sm:w-full px-3 pt-20`}>
                        <h1 className={`text-5xl font-bold mb-3`}>Lake UI</h1>
                        <h2 className={` text-2xl`}>
                            Modern React UI components <br/>
                            fully customizable <br/>
                            with inline CSS, CSS classes, and Tailwind classes</h2>
                        <div className={`flex py-4 justify-center md:justify-start`}>
                            {/*<Link to={`/card`}>*/}
                            <Button className={`mr-1 py-2.5 px-5 bg-black font-bold`}
                                    onClick={() => setSidebarOpen(true)}>See Components</Button>
                            {/*</Link>*/}

                            {/*<Button*/}
                            {/*    className={`ml-1 py-2.5 px-5 text-black bg-gray-200/30 backdrop-blur-sm`}>Components</Button>*/}
                        </div>

                        <div className={`pt-4`}>
                            <div className={`font-semibold`}>Get Started</div>
                            <div className={`flex`}>
                                <Input className="border border-gray-400 flex-grow" value={getStarted} disabled/>
                                <Button className={`ml-1 text-green-700 border border-green-500 bg-green-100 text-sm`}
                                        onClick={copyToClipboard}>
                                    <FontAwesomeIcon icon={faCopy}/>
                                    <span className={`ml-1`}>Copy</span>
                                </Button>
                            </div>
                        </div>

                        <div className={`py-4 flex justify-center md:justify-start`}>
                            <img src="/ts.svg" alt="" className="w-10 h-10 rounded-md"/>
                            <img src="/js.svg" alt="" className="w-10 h-10 rounded-md ml-1"/>
                            <img src="/react.svg" alt="" className="w-10 h-10 rounded-md ml-1"/>
                        </div>
                    </div>

                    <div
                        className={`mt-4 flex flex-wrap items-center justify-around md:w-2/3 bg-gradient-to-r from-green-400 to-cyan-500 rounded-md shadow p-4 pt-6 z-30`}>

                        <Card className="float mt-2 w-[200px] p-0 group">
                            <div className="overflow-hidden w-full rounded-t">
                                <img src="/shoes.jpg" alt=""
                                     className="group-hover:scale-110 transition-all duration-300"/>
                            </div>

                            <div className="p-3">
                                <div className="flex flex-wrap justify-between items-center mb-1">
                                    <div className="text-xl">AIR<span className="font-semibold">THUNDER</span></div>
                                    <Card className="bg-black border-0 text-white">$<span
                                        className="font-black">299.99</span></Card>
                                </div>
                                <div className="text-sm text-gray-600">X-ATHELETE COLLECTION</div>
                                <div className="flex text-xs py-1 text-amber-400">
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStarHalfStroke}/>
                                </div>
                                <div className="text-sm py-1 font-semibold text-gray-600">SIZE</div>
                                <div className="flex ">
                                    <Button className="rounded-full h-8 w-8 bg-transparent text-black"><small>6</small></Button>
                                    <Button className="rounded-full h-8 w-8 bg-transparent text-black"><small>7</small></Button>
                                    <Button className="rounded-full h-8 w-8 bg-transparent text-black"><small>8</small></Button>
                                    <Button className="rounded-full h-8 w-8 bg-red-500"><small>9</small></Button>
                                    <Button className="rounded-full h-8 w-8 bg-transparent text-black"><small>10</small></Button>
                                </div>
                                <div className="text-sm py-1 font-semibold text-gray-600">COLOR</div>
                                <div className="flex justify-between">
                                    <div className="flex">
                                        <div><Button
                                            className="rounded-full h-6 w-6 p-0 bg-indigo-400"></Button></div>
                                        <div className="ml-1"><Button
                                            className="rounded-full h-6 w-6 p-0 bg-green-500"></Button></div>
                                        <div className="border-b-4 border-b-yellow-400 ml-1 pb-1"><Button
                                            className="rounded-full h-6 w-6 p-0 bg-yellow-400"></Button></div>
                                    </div>
                                    <Button className="bg-black h-8 w-8"><FontAwesomeIcon icon={faCartPlus}/></Button>
                                </div>
                            </div>
                        </Card>

                        <Card className="float mt-2 w-[250px] p-0 group rounded-xl">
                            <div className="w-full h-[250px] overflow-hidden rounded-xl relative">
                                <img src="/model1.jpg"
                                     className="w-full group-hover:scale-125 transition-all duration-300"/>
                                <div className="flex absolute left-0 bottom-0 p-3">
                                    <Button className="rounded-xl px-2 py-1 bg-red-500">
                                        <FontAwesomeIcon icon={faHeart}/>
                                    </Button>
                                    <Button className="rounded-xl ml-2 bg-white text-black px-2.5 py-1 text-sm">
                                        <FontAwesomeIcon className="mr-1" icon={faCommentAlt}/>
                                        32
                                    </Button>
                                    <Button className="rounded-xl ml-2 px-2.5 py-1 bg-black">
                                        <FontAwesomeIcon icon={faShareAlt}/>
                                    </Button>
                                </div>
                            </div>
                            <div className="p-3">
                                <h3 className="font-semibold text-lg">Finibus Bonorum et Malorum</h3>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </div>
                            </div>
                        </Card>

                        <div className={`float mt-2 max-w-xs`}>
                            <Tabs
                                className="max-w-xs backdrop-blur-sm bg-white/30 mb-1 "
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


                        <Card
                            className="float mt-2 group relative w-[280px] p-0 overflow-hidden rounded-tl-lg rounded-tr-2xl rounded-bl-2xl hover:rounded-bl-[40px] hover:rounded-tr-[40px]">
                            <div className="w-full overflow-hidden z-0 relative">
                                <img src="/model3.jpg" alt=""/>
                                <div
                                    className="flex absolute left-0 bottom-0 p-3  group-hover:-translate-y-20 transition-all duration-300">
                                    <Button className="rounded-xl px-2 py-1 bg-red-500">
                                        <FontAwesomeIcon icon={faHeart}/>
                                    </Button>
                                    <Button className="rounded-xl ml-2 bg-white text-black px-2.5 py-1 text-sm">
                                        <FontAwesomeIcon className="mr-1" icon={faCommentAlt}/>
                                        56
                                    </Button>
                                </div>
                            </div>

                            <div
                                className="absolute z-10 left-8 bottom-2 translate-y-10 bg-white rounded-lg p-3 transition-all duration-300 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                                <h3 className="font-semibold">Finibus Bonorum et Malorum</h3>
                                <div>Lorem ipsum dolor sit amet</div>
                            </div>
                        </Card>


                        <div className={`float mt-2`}>
                            <Card className="max-w-sm p-3.5 mb-6">
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
                                    <div className="w-full md:w-1/2">
                                        <label htmlFor="card">Card number</label>
                                        <Input id="card" className="w-full border border-gray-400 shadow-none"
                                               placeholder="xxxx xxxx xxxx xxxx" maxLength="16"/>
                                    </div>
                                    <div className="w-full md:w-1/4">
                                        <label htmlFor="expiry">Expiry</label>
                                        <Input id="expiry" className="w-full border border-gray-400 shadow-none"
                                               placeholder="MM/YY"/>
                                    </div>
                                    <div className="w-full md:w-1/4">
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

                <div className="ocean hidden md:block">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </main>


        </div>
    )
}