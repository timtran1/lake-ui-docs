import {Link} from "react-router-dom";
import {Sidebar} from "@asynctech/lake-ui"
import Card from "../components/base/Card.jsx";

export default function (props) {
    return (
        <Sidebar useOpen={props.useOpen} className={`p-3`}>
            <h2 className={`text-xl font-bold mb-2`}>Components</h2>

            <div className={`flex flex-col`}>
                <Link to={`/button`}>Button</Link>
                <Link to={`/card`}>Cards</Link>
                <Link to={`/input`}>Input</Link>
                <Link to={`/tabs`}>Tabs</Link>
            </div>
        </Sidebar>
    )
}