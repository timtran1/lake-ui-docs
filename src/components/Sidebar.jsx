import {Link} from "react-router-dom";
import {Sidebar} from "@asynctech/lake-ui"

export default function (props) {
    return (
        <Sidebar useOpen={props.useOpen} className={`py-3 px-4 text-lg`}>
            <h2 className={`text-xl font-bold mb-1`}>Components</h2>

            <div className={`flex flex-col`}>
                <Link to={`/button`}>Button</Link>
                <Link to={`/card`}>Cards</Link>
                <Link to={`/input`}>Input</Link>
                <Link to={`/tabs`}>Tabs</Link>
                <Link to={`/toast`}>Toast</Link>
            </div>

            <h2 className={`text-xl font-bold mt-5 mb-1`}>WIP</h2>

            <div className={`flex flex-col`}>
                <Link to={`/`}>Dropdown</Link>
                <Link to={`/`}>Toast</Link>
                <Link to={`/`}>Dialog</Link>
                <Link to={`/`}>SideDrawer</Link>
                <Link to={`/`}>Topbar</Link>
                <Link to={`/`}>Checkbox</Link>
                <Link to={`/`}>Radio</Link>
                <Link to={`/`}>Select</Link>
                <Link to={`/`}>Switch</Link>
                <Link to={`/`}>Slider</Link>
                <Link to={`/`}>Table</Link>
                <Link to={`/`}>Skeleton</Link>
                <Link to={`/`}>Collapse</Link>
                <Link to={`/`}>Table</Link>
                <Link to={`/`}>Gradient Text</Link>
                <Link to={`/`}>Dark Mode</Link>
            </div>
        </Sidebar>
    )
}