import {Link} from "react-router-dom";

export default function (){
    return (
        <div className={`min-w-[200px] border-r border-black`}>
            <h2>Components</h2>

            <Link to={`buttons`}>Buttons</Link>
        </div>
    )
}