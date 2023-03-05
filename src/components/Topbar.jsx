import {TopBar, Button} from "@asynctech/lake-ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


export default function (props) {
    return (
        <TopBar className={`w-screen`}>
            <Button hoverEffect={false} className={`p-2 pr-4 bg-transparent text-black`}>
                <FontAwesomeIcon icon={faBars} onClick={() => props.setSidebarOpen(true)}/>
            </Button>
            <Link to={`/`} className={`flex items-center`}>
                <img src="/logo.png" className={`h-8 rounded shadow`}/>
                <h1 className={`font-bold text-2xl ml-2`}>Lake UI</h1>
            </Link>
        </TopBar>
    )
}