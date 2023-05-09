import {Slider, Button} from '@deepsel/lake-ui'
// import Slider from "../components/base/Slider.jsx";
import Sidebar from "../components/navigation/Sidebar.jsx";
import TopBar from "../components/navigation/Topbar.jsx";
import {useState} from "react";
import SimpleCodeSection from "../components/common/SimpleCodeSection.jsx";
import Code from "../components/common/Code.jsx";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-[800px] pt-10 pb-20 px-6">
                <h2 className="text-3xl font-bold mb-3">Slider</h2>

                <h3 className="text-lg font-semibold">Usage</h3>
                <p className="mb-4">
                    To use the Slider component, import it and add it to your JSX code.
                </p>

                {/*simple slider, hybrid slider*/}
                {/*controls: inset, disable, custom*/}
                {/*autoPlay: disable, custom timeout*/}
                {/*custom slider styling*/}
                {/*indicators: enable, custom*/}

                <SimpleCodeSection>
                    <div className="flex flex-col items-center">
                        <h4 className="text-white font-bold text-xl mb-4 mt-8 ">Simple image slider</h4>
                        <Slider>
                            <div
                                className="bg-[url('/model4.jpg')] bg-cover bg-no-repeat bg-center h-[380px] w-[450px]"></div>
                            <div
                                className="bg-[url('/model8.jpg')] bg-cover bg-no-repeat bg-center h-[380px] w-[450px]"></div>
                            <div
                                className="bg-[url('/model6.jpg')] bg-cover bg-no-repeat bg-center h-[380px] w-[450px]"></div>
                        </Slider>

                        <h4 className="text-white font-bold text-xl mb-4 mt-8 ">Slider with hybrid content</h4>
                        <Slider>
                            <div className="flex bg-white p-5 rounded-lg">
                                <div className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.
                                </div>
                                <img src="/model1.jpg" className="w-[300px] rounded-lg"/>
                            </div>

                            <div className="flex bg-white p-5 rounded-lg">
                                <img src="/model7.jpg" className="w-[300px] rounded-lg"/>
                                <div className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.
                                </div>
                            </div>

                            <div className="flex bg-white p-5 rounded-lg">
                                <div className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.
                                </div>
                                <img src="/model5.jpg" className="w-[300px] rounded-lg"/>
                            </div>
                        </Slider>
                    </div>
                </SimpleCodeSection>

                <h3 className="text-lg font-semibold mt-8">Autoplay</h3>
                <p className="mb-4">
                    The Slider component autoplay can enabled by the <Code>autoPlay</Code> prop.
                    The autoplay time delay between each slide can also be customized with the <Code>delay</Code> prop,
                    with a default of 3 seconds.
                    Note that autoplay will pause when the user has mouse over the slider.
                </p>
                <SimpleCodeSection>
                    <div className="flex flex-col items-center">
                        <h4 className="text-white font-bold text-xl mb-4 mt-8 ">Autoplay enabled</h4>
                        <Slider autoPlay={false}>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 1</div>
                            </div>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 2</div>
                            </div>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 3</div>
                            </div>
                        </Slider>

                        <h4 className="text-white font-bold text-xl mb-4 mt-8 ">Custom delay of 1 second</h4>
                        <Slider autoPlay delay={1000}>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 1</div>
                            </div>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 2</div>
                            </div>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 3</div>
                            </div>
                        </Slider>

                    </div>
                </SimpleCodeSection>

                <h3 className="text-lg font-semibold mt-8">Controls</h3>
                <p className="mb-4">
                    The Slider component controls can be disabled or customized.
                </p>
                <SimpleCodeSection>
                    <div className="flex flex-col items-center">
                        <h4 className="text-white font-bold text-xl mb-4 mt-8 ">Inset controls</h4>
                        <Slider insetControls>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 1</div>
                            </div>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 2</div>
                            </div>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 3</div>
                            </div>
                        </Slider>

                        <h4 className="text-white font-bold text-xl mb-4 mt-8 ">Render custom controls</h4>
                        <Slider
                            renderNext={nextFunc => <Button onClick={nextFunc}>Next</Button>}
                            renderPrev={prevFunc => <Button onClick={prevFunc}>Prev</Button>}
                        >
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 1</div>
                            </div>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 2</div>
                            </div>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 3</div>
                            </div>
                        </Slider>

                        <h4 className="text-white font-bold text-xl mb-4 mt-8 ">Disable controls</h4>
                        <Slider disableButtons autoPlay>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 1</div>
                            </div>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 2</div>
                            </div>
                            <div className="bg-gray-300 flex justify-center items-center h-[380px] w-[450px]">
                                <div>Slide 3</div>
                            </div>
                        </Slider>
                    </div>
                </SimpleCodeSection>
            </main>
        </div>
    );
}