import Input from "./components/base/Input.jsx";
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
}