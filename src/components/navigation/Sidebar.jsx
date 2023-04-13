import {Link} from "react-router-dom";
import {SideDrawer} from "@deepsel/lake-ui"

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
                <Link to={`/checkbox`}>Checkbox</Link>
                <Link to={`/radio`}>Radio</Link>
                <Link to={`/select`}>Select</Link>
                <Link to={`/collapse`}>Collapse</Link>
                <Link to={`/switch`}>Switch</Link>
                <Link to={`/slider`}>Slider</Link>
                <Link to={`/skeleton`}>Skeleton</Link>
                <Link to={`/gradient-text`}>Gradient Text</Link>
                <Link to={`/dark-mode`}>Dark Mode</Link>
            </div>
        </SideDrawer>
    )
}