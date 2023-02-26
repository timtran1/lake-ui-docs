import {Link} from "react-router-dom";
import Sidebar from "./base/Sidebar.jsx";

export default function (props) {
    return (
        <Sidebar useOpen={props.useOpen} className={`p-3`}>
            <h2 className={`text-xl font-bold mb-2`}>Components</h2>

            <div className={`flex flex-col`}>
                <Link to={`/button`}>Button</Link>
                <Link to={`/input`}>Input</Link>
            </div>
        </Sidebar>
    )
}