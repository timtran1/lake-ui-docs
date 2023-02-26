import ExampleCodeSection from "../components/ExampleCodeSection.jsx";
import SimpleCodeSection from "../components/SimpleCodeSection.jsx";
import Input from "../components/base/Input.jsx";
import {useState} from "react";
import Sidebar from "../components/Sidebar.jsx";
import TopBar from "../components/Topbar.jsx";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [name, setName] = useState(``)

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-5xl pt-10 pb-20  px-10">
                <h2 className="text-3xl font-bold mb-3">Inputs</h2>

                <h3 className="text-lg font-semibold">Usage</h3>
                <p className="mb-4">
                    To use the Input component, import it and add it to your JSX code.
                </p>

                <SimpleCodeSection code={`import Input from "./components/base/Input.jsx";
import {useState} from "react";

function MyComponent() {
    const [name, setName] = useState('')


    return (
        <div className="flex flex-col">
            <h2 className="text-xl font-bold text-yellow-300"><p>Hi {name}!</p></h2>
            
            {/*input group*/}
            <div className="flex flex-col">
                <label htmlFor="name" className="text-white mb-0.5">Please input your name</label>
                <Input id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
            </div>
        </div>
    );
}`}
                >
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold text-yellow-300"><p>Hi {name}!</p></h2>
                        <div className="flex flex-col">
                            <label htmlFor="name" className={`text-white mb-0.5`}>Please input your name</label>
                            <Input id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                    </div>
                </SimpleCodeSection>


                <h3 className="text-lg font-semibold">Styling</h3>
                <p className="mb-4">
                    The Input component can be easily customized with CSS.
                </p>

                <ExampleCodeSection>
                    <div className={`block`}>
                        <div className="mb-2">
                            <Input className="border border-gray-400 mr-2" placeholder="Input with border"/>
                            <Input className="rounded-none" placeholder="Square input"/>
                        </div>
                        <div className="mb-2">
                            <Input className="w-[100px] mr-2" placeholder="Short input"/>
                            <Input className="w-[300px]" placeholder="Long input"/>
                        </div>
                        <div className="mb-2">
                            <Input className="w-full" placeholder="Full width input"/>
                        </div>
                    </div>
                </ExampleCodeSection>

                {/*styling*/}
                border color, border radius, bg color, sizes

                {/*data binding*/}

                {/*enable focus effect*/}

                {/*validation with error mesg*/}


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