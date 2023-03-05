import {Button, Card} from '@asynctech/lake-ui'
import ExampleCodeSection from "../components/ExampleCodeSection.jsx";
import TopBar from "../components/Topbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {faStarHalfStroke} from "@fortawesome/free-regular-svg-icons";
// import Card from "../components/base/Card.jsx";

export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    function handleClick() {
        alert('Button clicked!');
    }

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


                <h3 className="text-lg font-semibold">Styling variations</h3>
                <p className="mb-4">
                    To use the Card component, simply import it and add it to your JSX code.
                </p>
                <ExampleCodeSection>
                    <div className="py-6 flex w-full flex-wrap justify-around">

                        <Card className="w-[250px] p-0">
                            <img src="/shoes.jpg" alt="" className="w-full rounded-t"/>
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

                        <Card className="rounded-none w-[280px]  mt-16">
                            <img src="/watch.jpg" className="w-[240px] -mt-16 m-auto"/>
                            <div className="mt-2 text-center text-xl font-black pt-2">Tempus Nova</div>
                            <div className="text-center font-semibold">$14,000</div>
                            <div className="text-center text-sm">Experience the ultimate fusion of style and technology
                                with the Tempus Nova watch.
                                Crafted with precision engineering, this timepiece features state-of-the-art materials
                                that ensure unparalleled durability and accuracy.
                            </div>
                            <div className="text-sm py-1 font-semibold text-gray-600">COLOR OPTIONS</div>
                            <div className="flex">
                                <Button className="h-6 w-6 p-0 bg-green-500 rounded-none"></Button>
                                <Button className="h-6 w-6 p-0 bg-green-500 rounded-none ml-1"></Button>
                                <Button className="h-6 w-6 p-0 bg-green-500 rounded-none ml-1"></Button>
                                <Button className="h-6 w-6 p-0 bg-green-500 rounded-none ml-1"></Button>
                            </div>


                                <Button className="bg-black w-full rounded-none">BUY NOW</Button>

                        </Card>

                    </div>
                </ExampleCodeSection>


                <h3 className="text-lg font-semibold mt-8">Props</h3>
                <p>Any prop can be passed to the componnent, including all <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"
                    className={`underline`}>attributes</a> of the regular HTML <code
                    className={`bg-gray-200 rounded p-1`}>&lt;button&gt;</code> component.</p>
                <table className={`w-full mt-2`}>
                    <thead className={`text-left`}>
                    <tr>
                        <th>Prop name</th>
                        <th>Type</th>
                        <th>Default value</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><code>hoverEffect</code></td>
                        <td><code>boolean</code></td>
                        <td><code>true</code></td>
                        <td>An optional flag to enable/disable hover effect. Default is true.</td>
                    </tr>
                    <tr>
                        <td><code>...other</code></td>
                        <td><code>any</code></td>
                        <td></td>
                        <td>Any additional props passed to the component will be spread here.</td>
                    </tr>
                    </tbody>
                </table>

            </main>
        </div>
    )
}