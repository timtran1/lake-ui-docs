import {useState, useRef, useEffect} from "react";
import './css/Dropdown.css'

export default function (props) {
    const [menuOpen, setMenuOpen] = useState(false)
    const {renderToggle, onOpen, onClose, children, ...other} = props
    const ref = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                close()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [ref])

    function toggle() {
        if (!menuOpen) open()
        else close()
    }

    function close() {
        setMenuOpen(false)
        if (onClose) onClose()
    }

    function open() {
        setMenuOpen(true)
        if (onOpen) onOpen()
    }

    return (
        <div className={`lake-dropdown-wrap`} ref={ref}>
            <div onClick={toggle}>
                {renderToggle}
            </div>

            <div
                // todo: replace right-0 with dynamic postion based on viewport
                className={`lake-dropdown-content ${menuOpen ? 'open' : ''}`}
                {...other}
            >
                {children}
            </div>
        </div>
    )
}