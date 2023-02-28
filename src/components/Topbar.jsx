import {TopBar, Button} from "@asynctech/lake-ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export default function (props) {
    return (
        <TopBar className={`w-screen`}>
            <Button hoverEffect={false} className={`p-2 bg-transparent text-black`}>
                <FontAwesomeIcon icon={faBars} onClick={() => props.setSidebarOpen(true)}/>
            </Button>
            <h1 className={`font-bold text-3xl ml-1`}>Lake UI</h1>
        </TopBar>
    )
}