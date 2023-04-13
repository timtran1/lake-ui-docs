import TopBar from "../components/navigation/Topbar.jsx";
import Sidebar from "../components/navigation/Sidebar.jsx";
import {useState} from "react";
import ExampleCodeSection from "../components/common/ExampleCodeSection.jsx";
import {
    Dropdown,
    DropdownItem,
    Button
} from "@deepsel/lake-ui";
// import Dropdown from "../components/base/Dropdown.jsx";
// import DropdownItem from "../components/base/DropdownItem.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-[800px] pt-10 pb-20 px-6">
                <h2 className="text-3xl font-bold mb-3">Dropdown</h2>

                <h3 className="text-lg font-semibold">Usage</h3>
                <p className="mb-4">
                    To use the Dropdown component, import Dropdown and DropdownItem and add them to your JSX code.
                </p>

                <ExampleCodeSection classCode={`import {Button, Dropdown, DropdownItem} from "@deepsel/lake-ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function MyComponent() {
    return (
        <div>
            <Dropdown renderToggle={
                <Button className={\`bg-black text-white\`} hoverEffect={false}>
                    Show dropdown
                    <FontAwesomeIcon className="ml-2 text-xs" icon={faAngleDown}/>
                </Button>
            }>
                <DropdownItem>foo</DropdownItem>
                <DropdownItem>bar</DropdownItem>
            </Dropdown>


            <Dropdown left renderToggle={
                <Button className={\`bg-black text-white\`} hoverEffect={false}>
                    Show dropdown on the left
                    <FontAwesomeIcon className="ml-2 text-xs" icon={faAngleDown}/>
                </Button>
            }>
                <DropdownItem>foo</DropdownItem>
                <DropdownItem>bar</DropdownItem>
            </Dropdown>

            <Dropdown top renderToggle={
                <Button className={\`bg-black text-white\`} hoverEffect={false}>
                    Show dropdown up top
                    <FontAwesomeIcon className="ml-2 text-xs" icon={faAngleDown}/>
                </Button>
            }>
                <DropdownItem>foo</DropdownItem>
                <DropdownItem>bar</DropdownItem>
            </Dropdown>

            <Dropdown top left renderToggle={
                <Button className={\`bg-black text-white\`} hoverEffect={false}>
                    Show dropdown up top left
                    <FontAwesomeIcon className="ml-2 text-xs" icon={faAngleDown}/>
                </Button>
            }>
                <DropdownItem>foo</DropdownItem>
                <DropdownItem>bar</DropdownItem>
            </Dropdown>
        </div>
    )
}`}
                                    inlineCode={`import {Button, Dropdown, DropdownItem} from "@deepsel/lake-ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function MyComponent() {
    return (
        <div>
            <Dropdown renderToggle={
                <Button style={{background: 'black', color: 'white'}} hoverEffect={false}>
                    Show dropdown
                    <FontAwesomeIcon style={{marginLeft: '0.5rem', fontSize: '0.75rem'}} icon={faAngleDown}/>
                </Button>
            }>
                <DropdownItem>foo</DropdownItem>
                <DropdownItem>bar</DropdownItem>
            </Dropdown>


            <Dropdown left renderToggle={
                <Button style={{background: 'black', color: 'white'}} hoverEffect={false}>
                    Show dropdown on the left
                    <FontAwesomeIcon style={{marginLeft: '0.5rem', fontSize: '0.75rem'}} icon={faAngleDown}/>
                </Button>
            }>
                <DropdownItem>foo</DropdownItem>
                <DropdownItem>bar</DropdownItem>
            </Dropdown>

            <Dropdown top renderToggle={
                <Button style={{background: 'black', color: 'white'}} hoverEffect={false}>
                    Show dropdown up top
                    <FontAwesomeIcon style={{marginLeft: '0.5rem', fontSize: '0.75rem'}} icon={faAngleDown}/>
                </Button>
            }>
                <DropdownItem>foo</DropdownItem>
                <DropdownItem>bar</DropdownItem>
            </Dropdown>

            <Dropdown top left renderToggle={
                <Button style={{background: 'black', color: 'white'}} hoverEffect={false}>
                    Show dropdown up top left
                    <FontAwesomeIcon style={{marginLeft: '0.5rem', fontSize: '0.75rem'}} icon={faAngleDown}/>
                </Button>
            }>
                <DropdownItem>foo</DropdownItem>
                <DropdownItem>bar</DropdownItem>
            </Dropdown>
        </div>
    )
}`}
                >
                    <div className="flex flex-col items-center gap-20 py-20">
                        <Dropdown renderToggle={
                            <Button className={`bg-black text-white`} hoverEffect={false}>
                                Show dropdown
                                <FontAwesomeIcon className="ml-2 text-xs" icon={faAngleDown}/>
                            </Button>
                        }>
                            <DropdownItem>foo</DropdownItem>
                            <DropdownItem>bar</DropdownItem>
                        </Dropdown>


                        <Dropdown left renderToggle={
                            <Button className={`bg-black text-white`} hoverEffect={false}>
                                Show dropdown on the left
                                <FontAwesomeIcon className="ml-2 text-xs" icon={faAngleDown}/>
                            </Button>
                        }>
                            <DropdownItem>foo</DropdownItem>
                            <DropdownItem>bar</DropdownItem>
                        </Dropdown>

                        <Dropdown top renderToggle={
                            <Button className={`bg-black text-white`} hoverEffect={false}>
                                Show dropdown up top
                                <FontAwesomeIcon className="ml-2 text-xs" icon={faAngleDown}/>
                            </Button>
                        }>
                            <DropdownItem>foo</DropdownItem>
                            <DropdownItem>bar</DropdownItem>
                        </Dropdown>

                        <Dropdown top left renderToggle={
                            <Button className={`bg-black text-white`} hoverEffect={false}>
                                Show dropdown up top left
                                <FontAwesomeIcon className="ml-2 text-xs" icon={faAngleDown}/>
                            </Button>
                        }>
                            <DropdownItem>foo</DropdownItem>
                            <DropdownItem>bar</DropdownItem>
                        </Dropdown>
                    </div>
                </ExampleCodeSection>

                {/*TODO: custom dropdown item style, custom dropdown item hover class, onclose and onopen*/}


                <h3 className="text-lg font-semibold mt-8">Dropdown Props</h3>
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
                        <td><code>renderToggle</code></td>
                        <td><code>React.ReactNode</code></td>
                        <td><code></code></td>
                        <td></td>
                        <td>Element to render as the dropdown toggle.</td>
                    </tr>
                    <tr>
                        <td><code>top</code></td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                        <td></td>
                        <td>Display dropdown up top.</td>
                    </tr>
                    <tr>
                        <td><code>left</code></td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                        <td></td>
                        <td>Display dropdown on the left.</td>
                    </tr>
                    <tr>
                        <td><code>onOpen</code></td>
                        <td><code>function</code></td>
                        <td><code></code></td>
                        <td></td>
                        <td>Callback function when the dropdown is opened.</td>
                    </tr>
                    <tr>
                        <td><code>onClose</code></td>
                        <td><code>function</code></td>
                        <td><code></code></td>
                        <td></td>
                        <td>Callback function when the dropdown is closed.</td>
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


                <h3 className="text-lg font-semibold mt-8">DropdownItem Props</h3>
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
                        <td><code>hoverClass</code></td>
                        <td><code>string</code></td>
                        <td><code></code></td>
                        <td></td>
                        <td>A custom class to be applied on hover state.</td>
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