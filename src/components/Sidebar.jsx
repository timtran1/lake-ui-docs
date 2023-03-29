import {Link} from "react-router-dom";
import {SideDrawer} from "@asynctech/lake-ui"

export default function (props) {
    return (
        <SideDrawer useOpen={props.useOpen} className={`py-3 px-4 text-lg`}>
            <h2 className={`text-xl font-bold mb-1`}>Components</h2>

            <div className={`flex flex-col`}>
                <Link to={`/button`}>Button</Link>
                <Link to={`/card`}>Card</Link>
                <Link to={`/input`}>Input</Link>
                <Link to={`/tabs`}>Tabs</Link>
                <Link to={`/toast`}>Toast</Link>
                <Link to={`/carousel`}>Carousel</Link>
                <Link to={`/dialog`}>Dialog</Link>
                <Link to={`/dropdown`}>Dropdown</Link>
                <Link to={`/navbars`}>Navigation Bars</Link>
            </div>

            <h2 className={`text-xl font-bold mt-5 mb-1`}>WIP</h2>

            <div className={`flex flex-col`}>
                <Link to={`/`}>Checkbox</Link>
                <Link to={`/`}>Radio</Link>
                <Link to={`/`}>Select</Link>
                <Link to={`/`}>Switch</Link>
                <Link to={`/`}>Slider</Link>
                <Link to={`/`}>Skeleton</Link>
                <Link to={`/`}>Collapse</Link>
                <Link to={`/`}>Gradient Text</Link>
                <Link to={`/`}>Dark Mode</Link>
            </div>
        </SideDrawer>
    )
}