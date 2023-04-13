import DocTopBar from "../components/navigation/Topbar.jsx";
import Sidebar from "../components/navigation/Sidebar.jsx";
import {useState} from "react";
import ExampleCodeSection from "../components/common/ExampleCodeSection.jsx";
import {
    Button,
    TopBar,
    SideDrawer
} from "@deepsel/lake-ui"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars,
    faVideo,
    faClock,
    faGears,
    faUser,
    faBook,
    faFolderTree,
    faEarth,
    faCalendar
} from "@fortawesome/free-solid-svg-icons";
// import TopBar from '../components/base/TopBar.jsx'
// import SideDrawer from '../components/base/Sidebar.jsx'
import Code from "../components/common/Code.jsx";


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

                    <SideDrawer useOpen={[sidebarOpen4, setSidebarOpen4]}
                                className="bg-gradient-to-b from-amber-500 to-orange-300 text-white flex flex-col gap-6 items-center w-[60px]">
                        <Button className="bg-transparent">
                            <FontAwesomeIcon icon={faBook}/>
                        </Button>
                        <Button className="bg-transparent">
                            <FontAwesomeIcon icon={faFolderTree}/>
                        </Button>
                        <Button className="bg-transparent">
                            <FontAwesomeIcon icon={faEarth}/>
                        </Button>
                        <Button className="bg-transparent">
                            <FontAwesomeIcon icon={faCalendar}/>
                        </Button>
                        <Button className="bg-transparent">
                            <FontAwesomeIcon icon={faClock}/>
                        </Button>
                        <Button className="bg-transparent">
                            <FontAwesomeIcon icon={faVideo}/>
                        </Button>
                        <Button className="bg-transparent">
                            <FontAwesomeIcon icon={faUser}/>
                        </Button>
                        <Button className="bg-transparent">
                            <FontAwesomeIcon icon={faGears}/>
                        </Button>
                    </SideDrawer>

                    <div className="flex flex-col items-center gap-10 py-10">
                        <Button onClick={() => setSidebarOpen2(true)}>Open SideDrawer</Button>
                        <Button onClick={() => setSidebarOpen3(true)}>Open SideDrawer on the right</Button>
                        <Button onClick={() => setSidebarOpen4(true)}>Open SideDrawer with custom styling</Button>
                    </div>
                </ExampleCodeSection>

                <h3 className="text-lg font-semibold mt-10">TopBar + SideDrawer</h3>
                <p className="mb-4">
                    To use the TopBar and SideDrawer together, import the TopBar and SideDrawer components and add them
                    to your JSX code.
                </p>
                <ExampleCodeSection>
                    <div className={`w-[500px] bg-white my-10`}>
                        <TopBar className="flex justify-between items-center">
                            <div className="flex items-center">
                                <Button hoverEffect={false} className={`p-2 pr-4 bg-transparent text-black`}
                                        onClick={() => setSidebarOpen2(true)}>
                                    <FontAwesomeIcon icon={faBars}/>
                                </Button>
                                <div className="flex">
                                    <img src="/logo.png" className="h-8 rounded shadow"/>
                                    <h1 className={`font-bold text-2xl ml-2`}>Lake UI</h1>
                                </div>
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
                </ExampleCodeSection>

                <h3 className="text-lg font-semibold mt-8">TopBar Props</h3>
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
                        <td><code>...other</code></td>
                        <td><code>any</code></td>
                        <td></td>
                        <td></td>
                        <td>Any additional props passed to the component will be spread here.</td>
                    </tr>
                    </tbody>
                </table>

                <h3 className="text-lg font-semibold mt-8">SideDrawer Props</h3>
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
                        <td><code>useOpen</code></td>
                        <td><code>array</code></td>
                        <td><code></code></td>
                        <td>yes</td>
                        <td>React <Code>useState</Code> hook array for the open state of the SideDrawer.</td>
                    </tr>
                    <tr>
                        <td><code>right</code></td>
                        <td><code>boolean</code></td>
                        <td>false</td>
                        <td></td>
                        <td>Places the SideDrawer on the right side.</td>
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
    );
}