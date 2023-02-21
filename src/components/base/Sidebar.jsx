import {useEffect, useState} from "react";
import './css/Sidebar.css'

export default function (props) {
    const {useOpen, children, className, ...other} = props
    const [open, setOpen] = useOpen ? useOpen : [null, null]
    const [visibility, setVisibility] = useState(open ? 'open' : '')

    useEffect(() => {
        if (open) setVisibility('open')
        else setTimeout(() => setVisibility(''), 150)
    }, [open])

    return (
        <div className={`lake-sidebar-wrap ${visibility}`}>
            <div className={`lake-sidebar-bg `} onClick={() => setOpen(false)}/>

            <aside
                className={`lake-sidebar-content ${open ? 'open' : ''} ${className}`}
                {...other}
            >
                {children}
            </aside>
        </div>
    )
}