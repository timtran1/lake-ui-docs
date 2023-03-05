import {Button,} from '@asynctech/lake-ui'
import ExampleCodeSection from "../components/ExampleCodeSection.jsx";
import TopBar from "../components/Topbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {useState} from "react";
import Card from "../components/base/Card.jsx";

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
                        <Card className="w-[300px] p-4 border-none">
                            <h3 className="text-4xl">A simple card</h3>
                            <div>Lorem ipsum dolor sit amet consectetur adipiscing elit.
                            </div>
                            <Button className="bg-black mt-2">Do something</Button>
                        </Card>

                        <Card className="w-[350px] p-0 border-none mt-8">
                            <h3 className="text-4xl p-3">Moraine</h3>
                            <img src="/moraine_rsz.jpg" alt="" className="w-full"/>
                            <div className="p-3">Moraine Lake is a glacially fed lake in Banff National Park. The lake,
                                being glacially fed, does not reach its crest until middle to late June. When it is
                                full, it reflects a distinctive shade of azure blue.
                            </div>
                        </Card>

                        <Card className="w-[350px] p-0 border-none mt-8">
                            <img src="/blausee_rsz.jpg" alt="" className="w-full rounded-t"/>
                            <h3 className="text-4xl px-3 pt-3">Blausee</h3>
                            <div className="p-3">Blausee is a lake located near the Kander river. The lake has an
                                elevation of 887 metres (2,910 ft) and an area of 0.64 hectares (1.6 acres).
                            </div>
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