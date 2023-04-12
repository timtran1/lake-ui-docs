import {Button, Card} from '@asynctech/lake-ui'
import ExampleCodeSection from "../components/common/ExampleCodeSection.jsx";
import TopBar from "../components/navigation/Topbar.jsx";
import Sidebar from "../components/navigation/Sidebar.jsx";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faCartPlus, faHeart, faShareAlt} from "@fortawesome/free-solid-svg-icons";
import {faStarHalfStroke, faCommentAlt} from "@fortawesome/free-regular-svg-icons";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-[800px] pt-10 pb-20 px-6">
                <h2 className="text-3xl font-bold mb-3">Cards</h2>

                <h3 className="text-lg font-semibold">Usage</h3>
                <p className="mb-4">
                    To use the Card component, simply import it and add it to your JSX code.
                </p>

                <ExampleCodeSection>
                    <div className="py-6">

                        <h4 className="text-white font-bold text-xl mb-2 mt-8 text-center">Simple card with text</h4>
                        <Card className="w-[300px] p-4  m-auto">
                            <h3 className="text-4xl">A simple card</h3>
                            <div>Lorem ipsum dolor sit amet consectetur adipiscing elit.
                            </div>
                            <Button className="bg-black mt-2">Do something</Button>
                        </Card>

                        <h4 className="text-white font-bold text-xl mb-2 mt-8 text-center">Card with media</h4>
                        <Card className="w-[350px] p-0 ">
                            <img src="/moraine_rsz.jpg" alt="" className="w-full rounded-t"/>
                            <h3 className="text-4xl px-3 pt-3">Moraine</h3>
                            <div className="p-3">Moraine Lake is a glacially fed lake in Banff National Park. The lake,
                                being glacially fed, does not reach its crest until middle to late June. When it is
                                full, it reflects a distinctive shade of azure blue.
                            </div>
                        </Card>
                    </div>
                </ExampleCodeSection>


                <h3 className="text-lg font-semibold mt-4">Styling variations</h3>
                <p className="mb-4">
                    Here are some examples of how you can style the Card component. Some of the examples below are
                    inspired by the <a
                    href="https://vuesax.com/" className={`underline`}>Vuesax</a> library, which used to be my go-to UI
                    library until it was discontinued.
                </p>
                <ExampleCodeSection>
                    <div className="py-6 flex w-full flex-wrap justify-around">

                        <Card className="w-[250px] p-0 group">
                            <div className="overflow-hidden w-full rounded-t">
                                <img src="/shoes.jpg" alt=""
                                     className="group-hover:scale-110 transition-all duration-300"/>
                            </div>

                            <div className="p-3">
                                <div className="flex justify-between items-center mb-1">
                                    <div className="text-xl">AIR<span className="font-semibold">DUNKERS</span></div>
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

                        <Card className="rounded-none w-[280px] p-0 mt-16 group relative">
                            <div className="w-[220px] -mt-16 m-auto overflow-hidden">
                                <img src="/watch.jpg"
                                     className="w-full group-hover:scale-110 transition-all duration-300"/>
                            </div>
                            <div className="mt-2 text-center text-3xl pt-2">Tempus Nova</div>
                            <div className="text-center italic">$12,000</div>
                            <div className="text-center text-sm p-2">Experience the ultimate fusion of style and
                                technology
                                with the Tempus Nova watch.
                                Crafted with precision engineering, this timepiece features state-of-the-art materials
                                that ensure unparalleled durability and accuracy.
                            </div>

                            <Button className="bg-black w-full rounded-none absolute bottom-0 left-0"
                                    hoverEffect={false}>BUY NOW</Button>
                        </Card>


                        <Card className="w-[300px] p-0 group rounded-xl mt-6">
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
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </div>
                            </div>
                        </Card>

                        <Card className="flex h-[280px] p-0 group rounded-xl mt-6">
                            <div className="h-full flex-grow overflow-hidden rounded-xl relative">
                                <img src="/model2.jpg"
                                     className="h-full group-hover:scale-125 transition-all duration-300"/>
                                <div className="flex absolute left-0 bottom-0 p-3">
                                    <Button className="rounded-xl px-2 py-1 bg-red-500">
                                        <FontAwesomeIcon icon={faHeart}/>
                                    </Button>
                                    <Button className="rounded-xl ml-2 bg-white text-black px-2.5 py-1 text-sm">
                                        <FontAwesomeIcon className="mr-1" icon={faCommentAlt}/>
                                        26
                                    </Button>
                                </div>
                            </div>

                            <div className="p-3 flex-grow max-w-[200px]">
                                <h3 className="font-semibold text-lg">Finibus Bonorum et Malorum</h3>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </div>
                            </div>

                        </Card>


                        <Card
                            className="group relative mt-6 w-[300px] p-0 overflow-hidden rounded-tl-lg rounded-tr-2xl rounded-bl-2xl hover:rounded-bl-[40px] hover:rounded-tr-[40px]">
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


                    </div>
                </ExampleCodeSection>


                <h3 className="text-lg font-semibold mt-8">Props</h3>
                <table className={`w-full mt-2`}>
                    <thead className={`text-left`}>
                    <tr>
                        <th>Prop name</th>
                        <th>Type</th>
                        <th>Default value</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><code>hoverEffect</code></td>
                        <td><code>boolean</code></td>
                        <td><code>true</code></td>
                        <td></td>
                        <td>An optional flag to enable/disable hover effect. Default is true.</td>
                    </tr>
                    <tr>
                        <td><code>...other</code></td>
                        <td><code>any</code></td>
                        <td></td>
                        <td></td>
                        <td>Any additional props passed to the component will be spread here.</td>
                    </tr>
                    </tbody>
                </table>

            </main>
        </div>
    )
}