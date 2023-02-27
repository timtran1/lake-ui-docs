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
            <h2 className="text-4xl text-yellow-100 font-bold"><p>Hi {name}!</p></h2>
            
            <div className="flex flex-col">
                <label htmlFor="name" className="text-white mb-0.5">Please enter your name</label>
                <Input id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
            </div>
        </div>
    );
}`}
                >
                    <div className="flex flex-col">
                        <h2 className="text-4xl text-yellow-100 font-bold"><p>Hi {name}!</p></h2>
                        <div className="flex flex-col">
                            <label htmlFor="name" className={`text-white mb-0.5`}>Please enter your name</label>
                            <Input id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                    </div>
                </SimpleCodeSection>

                <h3 className="text-lg font-semibold mt-4">Example form</h3>
                <p className="mb-4">
                    Check out this checkout form:
                </p>

                <ExampleCodeSection
                    inlineCode={`<div style={{
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '32rem',
    color: '#fff',
    marginBottom: '1rem',
    marginTop: '1.5rem'
}}>

    <div style={{display: 'flex', marginBottom: '0.5rem'}}>
        <div style={{width: '50%'}}>
            <label htmlFor="first-name">First name</label>
            <Input id="first-name" style={{width: '100%'}} placeholder="First name"/>
        </div>
        <div style={{width: '50%', marginLeft: '0.5rem'}}>
            <label htmlFor="last-name">Last name</label>
            <Input id="last-name" style={{width: '100%'}} placeholder="Last name"/>
        </div>
    </div>


    <div style={{width: '100%', marginBottom: '0.5rem'}}>
        <label htmlFor="address">Address</label>
        <Input id="address" style={{width: '100%'}} placeholder="Address"/>
    </div>


    <div style={{display: 'flex', marginBottom: '0.5rem'}}>
        <div style={{width: '33.3%'}}>
            <label htmlFor="city">City</label>
            <Input id="city" style={{width: '100%'}} placeholder="City"/>
        </div>
        <div style={{width: '33.3%', marginLeft: '0.5rem'}}>
            <label htmlFor="state">State</label>
            <Input id="state" style={{width: '100%'}} placeholder="State"/>
        </div>
        <div style={{width: '33.3%', marginLeft: '0.5rem'}}>
            <label htmlFor="last-name">ZIP code</label>
            <Input id="zip" style={{width: '100%'}} placeholder="ZIP code"/>
        </div>
    </div>
</div>

<Card style={{
    maxWidth: '32rem',
    padding: '0.875rem',
    marginBottom: '1.5rem',
}}>
    <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '0.75rem',
        marginTop: '0.75rem'
    }}>
        <img src="/visa.png" style={{height: '3rem'}}/>
        <img src="/Mastercard-logo.svg" style={{height: '3rem', marginLeft: '1rem'}}
             className="h-12 ml-4"/>
        <img src="/American_Express_logo.svg" style={{height: '3rem', marginLeft: '1rem'}}/>
    </div>

    <div style={{width: '100%', marginBottom: '0.5rem'}}>
        <label htmlFor="card-name">Name on card</label>
        <Input id="card-name" style={{
            width: '100%',
            border: '1px solid #9ca3af',
            boxShadow: 'none'
        }} placeholder="Name on card"/>
    </div>

    <div style={{width: '100%', display: 'flex'}}>
        <div style={{width: '66.6%'}}>
            <label htmlFor="card">Card number</label>
            <Input id="card" style={{
                width: '100%',
                border: '1px solid #9ca3af',
                boxShadow: 'none'
            }} placeholder="xxxx xxxx xxxx xxxx" maxlength="16"/>
        </div>
        <div style={{width: '16.6%', marginLeft: '0.5rem'}}>
            <label htmlFor="expiry">Expiry</label>
            <Input id="expiry" style={{
                width: '100%',
                border: '1px solid #9ca3af',
                boxShadow: 'none'
            }} placeholder="MM/YY"/>
        </div>
        <div style={{width: '16.6%', marginLeft: '0.5rem'}}>
            <label htmlFor="cvv">CVV</label>
            <Input id="cvv" style={{
                width: '100%',
                border: '1px solid #9ca3af',
                boxShadow: 'none'
            }} placeholder="123" maxlength="3"/>
        </div>
    </div>
    <Button style={{
        width: '100%',
        marginTop: '1rem',
        backgroundColor: 'black'
    }}>
        Checkout
    </Button>
</Card>`}
                    classCode={`<div className="flex flex-col max-w-lg text-white mb-4 mt-6">

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
</Card>`}>
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

                <ExampleCodeSection
                    inlineCode={`<div style={{
    maxWidth: '32rem',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem'
}}>
    <div style={{display: 'flex'}}>
        <Input style={{marginBottom: '0.5rem'}} placeholder="Normal input"/>
        <Input style={{
            marginBottom: '0.5rem',
            marginLeft: '0.5rem',
            border: '1px solid #9ca3af'
        }} placeholder="Input with border"/>
    </div>
    <div>
        <Input style={{
            marginBottom: '0.5rem',
            width: '100px',
        }} placeholder="Short input"/>
        <Input style={{
            marginBottom: '0.5rem',
            marginLeft: '0.5rem',
            width: '250px',
        }} placeholder="Long input"/>
    </div>

    <div style={{marginBottom: '0.5rem'}}>
        <Input style={{width: '100%'}} placeholder="Full width input"/>
    </div>

    <div style={{display: 'flex'}}>
        <Input style={{
            marginBottom: '0.5rem',
            width: '50%',
            borderRadius: '9999px'
        }} placeholder="Rounded input"/>
        <Input style={{
            marginBottom: '0.5rem',
            marginLeft: '0.5rem',
            width: '50%',
            borderRadius: 0
        }} placeholder="Square input"/>
    </div>

    <div style={{display: 'flex'}}>
        <Input style={{
            marginBottom: '0.5rem',
            width: '33.3%',
            background: 'black',
            color: 'white'
        }} placeholder="Black background"/>
        <Input style={{
            marginBottom: '0.5rem',
            marginLeft: '0.5rem',
            width: '33.3%',
            background: '#fde047'
        }} placeholder="Yellow background"/>
        <Input style={{
            marginBottom: '0.5rem',
            marginLeft: '0.5rem',
            width: '33.3%',
            background: '#e5e7eb'
        }} placeholder="Gray background"/>
    </div>

    <div style={{
        display: 'flex',
        flexDirection: 'column'
    }}>
        <Input style={{
            marginBottom: '0.5rem',
            height: '1.75rem',
            fontSize: '0.875rem'
        }} className="h-7 mb-2 text-sm" placeholder="Small"/>
        <Input style={{marginBottom: '0.5rem'}} placeholder="Normal"/>
        <Input style={{
            marginBottom: '0.5rem',
            fontSize: '1.875rem'
        }} className="h-18 text-3xl" placeholder="Large"/>
    </div>
</div>`}
                    classCode={`<div className="max-w-lg py-6">
    <div className="flex space-x-2">
        <Input className="mb-2" placeholder="Normal input"/>
        <Input className="border border-gray-400 mb-2" placeholder="Input with border"/>
    </div>
    <div>
        <Input className="w-[100px] mr-2 mb-2" placeholder="Short input"/>
        <Input className="w-[250px] mb-2" placeholder="Long input"/>
    </div>
    <div className="mb-2">
        <Input className="w-full" placeholder="Full width input"/>
    </div>

    <div className="flex space-x-2">
        <Input className="w-1/2 rounded-full mb-2" placeholder="Rounded input"/>
        <Input className="w-1/2 rounded-none mb-2" placeholder="Square input"/>
    </div>

    <div className="flex space-x-2">
        <Input className="w-1/3 bg-black text-white mb-2" placeholder="Black background"/>
        <Input className="w-1/3 bg-yellow-300 mb-2" placeholder="Yellow background"/>
        <Input className="w-1/3 bg-gray-200 mb-2" placeholder="Gray background"/>
    </div>

    <div className="flex flex-col">
        <Input className="h-7 mb-2 text-sm" placeholder="Small"/>
        <Input className="mb-2" placeholder="Normal"/>
        <Input className="h-18 text-3xl" placeholder="Large"/>
    </div>
</div>`}>
                    <div className="max-w-lg py-6">
                        <div className="flex space-x-2">
                            <Input className="mb-2" placeholder="Normal input"/>
                            <Input className="border border-gray-400 mb-2" placeholder="Input with border"/>
                        </div>
                        <div>
                            <Input className="w-[100px] mr-2 mb-2" placeholder="Short input"/>
                            <Input className="w-[250px] mb-2" placeholder="Long input"/>
                        </div>
                        <div className="mb-2">
                            <Input className="w-full" placeholder="Full width input"/>
                        </div>

                        <div className="flex space-x-2">
                            <Input className="w-1/2 rounded-full mb-2" placeholder="Rounded input"/>
                            <Input className="w-1/2 rounded-none mb-2" placeholder="Square input"/>
                        </div>

                        <div className="flex space-x-2">
                            <Input className="w-1/3 bg-black text-white mb-2" placeholder="Black background"/>
                            <Input className="w-1/3 bg-yellow-300 mb-2" placeholder="Yellow background"/>
                            <Input className="w-1/3 bg-gray-200 mb-2" placeholder="Gray background"/>
                        </div>

                        <div className="flex flex-col">
                            <Input className="h-7 mb-2 text-sm" placeholder="Small"/>
                            <Input className="mb-2" placeholder="Normal"/>
                            <Input className="h-18 text-3xl" placeholder="Large"/>
                        </div>
                    </div>
                </ExampleCodeSection>

                {/*enable focus effect*/}

                {/*validation with error mesg*/}


                <h3 className="text-lg font-semibold mt-8">Props</h3>
                <p>Any prop can be passed to the componnent, including all <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"
                    className={`underline`}>attributes</a> of the regular HTML <code
                    className={`bg-gray-200 rounded p-1`}>&lt;input&gt;</code> component.</p>
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
                        <td><code>focusEffect</code></td>
                        <td><code>boolean</code></td>
                        <td><code>true</code></td>
                        <td>An optional flag to enable/disable focus effect. Default is true.</td>
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