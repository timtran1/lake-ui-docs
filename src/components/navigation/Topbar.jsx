import {TopBar, Button} from "@deepsel/lake-ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


export default function (props) {
    return (
        <TopBar className={`w-screen flex justify-between`}>
            <div className={`flex`}>
                <Button hoverEffect={false} className={`p-2 pr-4 bg-transparent text-black`} onClick={() => props.setSidebarOpen(true)}>
                    <FontAwesomeIcon icon={faBars}/>
                </Button>
                <Link to={`/`} className={`flex items-center`}>
                    <img src="/logo.png" className={`h-8 rounded shadow`}/>
                    <h1 className={`font-bold text-2xl ml-2`}>Lake UI</h1>
                </Link>
            </div>

            <div className={`pr-3 flex`}>
                <a href="https://github.com/timtran1/lake-ui" target="_blank" className={`block`}>
                    <img className={`h-5 mr-1.5`} src="/github.png"/>
                </a>
            </div>
        </TopBar>
    )
}