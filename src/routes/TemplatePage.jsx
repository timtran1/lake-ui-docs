import TopBar from "../components/Topbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {useState} from "react";

export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-[800px] pt-10 pb-20 px-6">
                <h2 className="text-3xl font-bold mb-3">Tabs</h2>

                <h3 className="text-lg font-semibold">Usage</h3>
                <p className="mb-4">
                    To use the tabs, import the Tabs and TabPanel component and add them to your JSX code.
                </p>








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