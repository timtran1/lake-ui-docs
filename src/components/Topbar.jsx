import {TopBar, Button} from "@asynctech/lake-ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


export default function (props) {
    return (
        <TopBar className={`w-screen flex justify-between`}>
            <div className={`flex`}>
                <Button hoverEffect={false} className={`p-2 pr-4 bg-transparent text-black`}>
                    <FontAwesomeIcon icon={faBars} onClick={() => props.setSidebarOpen(true)}/>
                </Button>
                <Link to={`/`} className={`flex items-center`}>
                    <img src="/logo.png" className={`h-8 rounded shadow`}/>
                    <h1 className={`font-bold text-2xl ml-2`}>Lake UI</h1>
                </Link>
            </div>

            <div className={`pr-3 flex`}>
                <a href="https://github.com/timtran1/lake-ui" target="_blank" className={`block`}>
                    <div className={`flex items-center p-2`}>
                        <img className={`h-5 mr-1.5`} src="/github.png"/>
                        <div className={``}>GitHub</div>
                    </div>
                </a>

                <a href="https://github.com/timtran1/lake-ui-docs" target="_blank" className={`block`}>
                    <div className={`flex items-center p-2`}>
                        <img className={`h-5 mr-1.5`} src="/github.png"/>
                        <div className={``}>Docs GitHub</div>
                    </div>
                </a>
            </div>
        </TopBar>
    )
}