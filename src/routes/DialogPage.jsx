import {
    Dialog,
    Button
} from '@asynctech/lake-ui'
// import Dialog from "../components/base/Dialog.jsx";
import Sidebar from "../components/Sidebar.jsx";
import TopBar from "../components/Topbar.jsx";
import {useState} from "react";
import SimpleCodeSection from "../components/SimpleCodeSection.jsx";
import ExampleCodeSection from "../components/ExampleCodeSection.jsx";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [dialogOpen2, setDialogOpen2] = useState(false)

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-[800px] pt-10 pb-20 px-6">
                <h2 className="text-3xl font-bold mb-3">Dialog</h2>

                <h3 className="text-lg font-semibold">Usage</h3>
                <p className="mb-4">
                    To use the Dialog component, import it and add it to your JSX code.
                </p>

                <ExampleCodeSection classCode={`import {Button, Dialog} from "@asynctech/lake-ui";
import {useState} from "react";

function MyComponent() {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <Dialog useOpen={[dialogOpen, setDialogOpen]} className="max-w-sm">
            <h3 className="font-bold text-lg">You opened a Dialog!</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button className="bg-black mt-2" onClick={() => setDialogOpen(false)}>Close</Button>
        </Dialog>
    )
}`} inlineCode={`import {Button, Dialog} from "@asynctech/lake-ui";
import {useState} from "react";

function MyComponent() {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <Dialog useOpen={[dialogOpen, setDialogOpen]} style={{maxWidth: '24rem'}}>
            <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
            }}>You opened a Dialog!</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button style={{
                backgroundColor: 'black',
                marginTop: '0.5rem',
            }} onClick={() => setDialogOpen(false)}>Close</Button>
        </Dialog>
    )
}`}>
                    <Button className="bg-black" onClick={() => setDialogOpen(true)}>
                        Open a dialog
                    </Button>
                    <Dialog useOpen={[dialogOpen, setDialogOpen]} className="max-w-sm">
                        <h3 className="font-bold text-lg">You opened a Dialog!</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Button className="bg-black mt-2" onClick={() => setDialogOpen(false)}>Close</Button>
                    </Dialog>
                </ExampleCodeSection>

                {/*custom styling: black gb, sharp edges*/}
                <h3 className="text-lg font-semibold mt-4">Custom Styling</h3>
                <ExampleCodeSection inlineCode={`import {Button, Dialog} from "@asynctech/lake-ui";
import {useState} from "react";

function MyComponent() {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <div>
            <Button style={{backgroundColor: 'black'}} onClick={() => setDialogOpen(true)}>
                Open a dialog
            </Button>
            <Dialog useOpen={[dialogOpen, setDialogOpen]} style={{
                maxWidth: '24rem',
                backgroundImage: 'linear-gradient(to right, #f97316, #fcd34d)',
                color: 'white',
                borderRadius: '0',
            }}>
                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                }}>You opened a Dialog!</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Button style={{
                    backgroundColor: 'white',
                    color: 'black',
                    marginTop: '0.5rem',
                }} onClick={() => setDialogOpen(false)}>Close</Button>
            </Dialog>
        </div>
    )
}`} classCode={`import {Button, Dialog} from "@asynctech/lake-ui";
import {useState} from "react";

function MyComponent() {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <div>
            <Button className="bg-black" onClick={() => setDialogOpen2(true)}>
                Open a dialog
            </Button>
            <Dialog useOpen={[dialogOpen, setDialogOpen]}
                    className="max-w-sm bg-gradient-to-r to-amber-300 from-orange-500 text-white rounded-none">
                <h3 className="font-bold text-lg">You opened a custom Dialog!</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Button className="bg-white text-black mt-2"
                        onClick={() => setDialogOpen(false)}>Close</Button>
            </Dialog>
        </div>
    )
}`}>
                    <Button className="bg-black" onClick={() => setDialogOpen2(true)}>
                        Open a dialog
                    </Button>
                    <Dialog useOpen={[dialogOpen2, setDialogOpen2]}
                            className="max-w-sm bg-gradient-to-r to-amber-300 from-orange-500 text-white rounded-none">
                        <h3 className="font-bold text-lg">You opened a custom Dialog!</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Button className="bg-white text-black mt-2"
                                onClick={() => setDialogOpen2(false)}>Close</Button>
                    </Dialog>
                </ExampleCodeSection>


                <h3 className="text-lg font-semibold mt-4">Disabling close button</h3>
                <p className="mb-4">
                    The close button can be disabled by setting the <code>disableCloseBtn</code> prop
                    to <code>true</code>.
                </p>

                <ExampleCodeSection classCode={`import {Button, Dialog} from "@asynctech/lake-ui";
import {useState} from "react";

function MyComponent() {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <Dialog disableCloseBtn useOpen={[dialogOpen, setDialogOpen]} className="max-w-sm">
            <h3 className="font-bold text-lg">You opened a Dialog!</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button className="bg-black mt-2" onClick={() => setDialogOpen(false)}>Close</Button>
        </Dialog>
    )
}`} inlineCode={`import {Button, Dialog} from "@asynctech/lake-ui";
import {useState} from "react";

function MyComponent() {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <Dialog disableCloseBtn useOpen={[dialogOpen, setDialogOpen]} style={{maxWidth: '24rem'}}>
            <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
            }}>You opened a Dialog!</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button style={{
                backgroundColor: 'black',
                marginTop: '0.5rem',
            }} onClick={() => setDialogOpen(false)}>Close</Button>
        </Dialog>
    )
}`}>
                    <Button className="bg-black" onClick={() => setDialogOpen(true)}>
                        Open a dialog
                    </Button>
                    <Dialog disableCloseBtn useOpen={[dialogOpen, setDialogOpen]} className="max-w-sm">
                        <h3 className="font-bold text-lg">You opened a Dialog!</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Button className="bg-black mt-2" onClick={() => setDialogOpen(false)}>Close</Button>
                    </Dialog>
                </ExampleCodeSection>

                <h3 className="text-lg font-semibold mt-8">Props</h3>
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
                        <td><code>useOpen</code></td>
                        <td><code>array</code></td>
                        <td><code></code></td>
                        <td>React <code>useState</code> hook array for the open state of the Dialog.</td>
                    </tr>
                    <tr>
                        <td><code>disableCloseBtn</code></td>
                        <td><code>boolean</code></td>
                        <td><code>false</code></td>
                        <td>Whether to hide the close button.</td>
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
    );
}