import DocTopBar from "../components/Topbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {useState} from "react";
// import SimpleCodeSection from "../components/SimpleCodeSection.jsx";
import ExampleCodeSection from "../components/ExampleCodeSection.jsx";
import {
    Button,
    TopBar,
    SideDrawer
} from "@asynctech/lake-ui"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
// import TopBar from '../components/base/TopBar.jsx'
// import SideDrawer from '../components/base/Sidebar.jsx'

export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarOpen2, setSidebarOpen2] = useState(false)
    const [sidebarOpen3, setSidebarOpen3] = useState(false)
    const [sidebarOpen4, setSidebarOpen4] = useState(false)

    return (
        <div>
            <DocTopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-[800px] pt-10 pb-20 px-6">
                <h2 className="text-3xl font-bold mb-3">Navigation Bars</h2>

                {/*topbar: top, custom styles eg height, bg*/}
                {/*sidebar: left, right, custom styles eg width, bg*/}
                {/*topbar + sidebar*/}

                <h3 className="text-lg font-semibold">TopBar</h3>
                <p className="mb-4">
                    To use the TopBar, import the TopBar component and add it to your JSX code.
                </p>


                <ExampleCodeSection>
                    <h4 className="text-white text-center w-full font-bold text-xl my-8">Simple TopBar</h4>
                    <div className={`w-[500px] bg-white`}>
                        <TopBar className="flex justify-between items-center">
                            <div className="flex">
                                <img src="/logo.png" className="h-8 rounded shadow"/>
                                <h1 className={`font-bold text-2xl ml-2`}>Lake UI</h1>
                            </div>


                            <a href="https://github.com/timtran1/lake-ui" target="_blank" className="block">
                                <img className="h-5 mr-1.5" src="/github.png"/>
                            </a>
                        </TopBar>

                        <main className="p-3 h-[400px] overflow-y-auto">
                            <h2 className="font-semibold">The standard Lorem Ipsum passage, used since the 1500s</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum.</p>
                            <br/>
                            <h2 className="font-semibold">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                                Cicero in 45 BC</h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                                labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                                nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                                nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?
                            </p>
                        </main>
                    </div>

                    <h4 className="text-white font-bold text-xl my-8">TopBar with custom styling</h4>
                    <div className={`w-[500px] bg-white mb-10`}>
                        <TopBar
                            className="rounded-b-3xl flex justify-between items-center bg-gradient-to-r from-indigo-500 to-cyan-700 text-white h-[90px] px-6">
                            <div className="flex">
                                <img src="/logo.png" className="h-8 rounded shadow"/>
                                <h1 className={`font-bold text-2xl ml-2`}>Lake UI</h1>
                            </div>


                            <a href="https://github.com/timtran1/lake-ui" target="_blank" className="block">
                                <img className="h-5 mr-1.5" src="/github-white.png"/>
                            </a>
                        </TopBar>

                        <main className="p-3 h-[400px] overflow-y-auto">
                            <h2 className="font-semibold">The standard Lorem Ipsum passage, used since the 1500s</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum.</p>
                            <br/>
                            <h2 className="font-semibold">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                                Cicero in 45 BC</h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                                labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                                nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                                nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?
                            </p>
                        </main>
                    </div>

                </ExampleCodeSection>

                <h3 className="text-lg font-semibold mt-10">SideDrawer</h3>
                <p className="mb-4">
                    To use the SideDrawer, import the SideDrawer component and add it to your JSX code.
                </p>

                <ExampleCodeSection>
                    <SideDrawer useOpen={[sidebarOpen2, setSidebarOpen2]}>
                        <p className="font-semibold">You opened a SideDrawer!</p>
                    </SideDrawer>

                    <SideDrawer useOpen={[sidebarOpen3, setSidebarOpen3]} right>
                        <p className="font-semibold">You opened a SideDrawer on the right!</p>
                    </SideDrawer>

                    <SideDrawer useOpen={[sidebarOpen4, setSidebarOpen4]}>
                        <p className="font-semibold">You opened a SideDrawer on the right!</p>
                    </SideDrawer>

                    <div className="flex flex-col items-center gap-10 py-10">
                        <Button onClick={() => setSidebarOpen2(true)}>Open SideDrawer</Button>
                        <Button onClick={() => setSidebarOpen3(true)}>Open SideDrawer on the right</Button>
                        <Button onClick={() => setSidebarOpen4(true)}>Open SideDrawer with custom styling</Button>
                    </div>
                </ExampleCodeSection>
            </main>
        </div>
    );
}