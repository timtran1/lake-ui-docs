import ExampleCodeSection from "../components/ExampleCodeSection.jsx";
import SimpleCodeSection from "../components/SimpleCodeSection.jsx";
import Input from "../components/base/Input.jsx";
import {useState} from "react";
import Sidebar from "../components/Sidebar.jsx";
import TopBar from "../components/Topbar.jsx";
import Button from "../components/base/Button.jsx";
import Card from "../components/base/Card.jsx";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [name, setName] = useState(``)

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-[800px] pt-10 pb-20 px-6">
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
            <h2 className="text-xl font-bold"><p>Hi {name}!</p></h2>
            
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
                        <h2 className="text-xl font-bold"><p>Hi {name}!</p></h2>
                        <div className="flex flex-col">
                            <label htmlFor="name" className={`text-white mb-0.5`}>Please input your name</label>
                            <Input id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                    </div>
                </SimpleCodeSection>

                <h3 className="text-lg font-semibold mt-4">Example form</h3>
                <p className="mb-4">
                    Check out this checkout form:
                </p>

                <ExampleCodeSection>
                    <div className="flex flex-col max-w-lg text-white mb-4 mt-6">

                        <div className="flex space-x-2 mb-2">
                            <div className="w-1/2">
                                <label htmlFor="first-name">First name</label>
                                <Input id="first-name" className="w-full" placeholder="First name"/>
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="last-name">Last name</label>
                                <Input id="last-name" className="w-full" placeholder="Last name"/>
                            </div>
                        </div>


                        <div className="w-full mb-2">
                            <label htmlFor="address">Address</label>
                            <Input id="address" className="w-full" placeholder="Address"/>
                        </div>


                        <div className="flex space-x-2 mb-2">
                            <div className="w-1/3">
                                <label htmlFor="city">City</label>
                                <Input id="city" className="w-full" placeholder="City"/>
                            </div>
                            <div className="w-1/3">
                                <label htmlFor="state">State</label>
                                <Input id="state" className="w-full" placeholder="State"/>
                            </div>
                            <div className="w-1/3">
                                <label htmlFor="last-name">ZIP code</label>
                                <Input id="zip" className="w-full" placeholder="ZIP code"/>
                            </div>
                        </div>
                    </div>

                    <Card className="max-w-lg p-3.5 mb-6">
                        <div className="w-full flex my-3 justify-center">
                            <img src="/visa.png" className="h-12"/>
                            <img src="/Mastercard-logo.svg" className="h-12 ml-4"/>
                            <img src="/American_Express_logo.svg" className="h-12 ml-4"/>
                        </div>

                        <div className="w-full mb-2">
                            <label htmlFor="card-name">Name on card</label>
                            <Input id="card-name" className="w-full border border-gray-400 shadow-none"
                                   placeholder="Name on card"/>
                        </div>

                        <div className="w-full flex space-x-2">
                            <div className="w-full md:w-2/3">
                                <label htmlFor="card">Card number</label>
                                <Input id="card" className="w-full border border-gray-400 shadow-none"
                                       placeholder="xxxx xxxx xxxx xxxx" maxlength="16"/>
                            </div>
                            <div className="w-full md:w-1/6">
                                <label htmlFor="expiry">Expiry</label>
                                <Input id="expiry" className="w-full border border-gray-400 shadow-none"
                                       placeholder="MM/YY"/>
                            </div>
                            <div className="w-full md:w-1/6">
                                <label htmlFor="cvv">CVV</label>
                                <Input id="cvv" className="w-full border border-gray-400 shadow-none" type="password"
                                       placeholder="123" maxlength="3"/>
                            </div>
                        </div>
                        <Button className="w-full mt-4 bg-black">Checkout</Button>
                    </Card>
                </ExampleCodeSection>


                <h3 className="text-lg font-semibold mt-4">Styling</h3>
                <p className="mb-4">
                    The Input component can be easily customized with CSS.
                </p>

                <ExampleCodeSection>
                    <div className={`block`}>
                        <div>
                            <Input className="border border-gray-400 mr-2 mb-2" placeholder="Input with border"/>
                            <Input className="rounded-none mb-2" placeholder="Square input"/>
                        </div>
                        <div>
                            <Input className="w-[100px] mr-2 mb-2" placeholder="Short input"/>
                            <Input className="w-[250px] mb-2" placeholder="Long input"/>
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