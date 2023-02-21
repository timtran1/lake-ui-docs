import {useEffect, useState} from "react";
import Button from "./Button.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import './css/Toast.css'

export default function (props) {
    const {timeOut, useOpen, children, className, ...other} = props
    const [open, setOpen] = useOpen || [null, null]
    const [timeOutId, setTimeOutId] = useState(0)

    useEffect(() => {
        if (open) setTimeOutId(setTimeout(close, timeOut || 3000))
        return () => clearTimeout(timeOutId)
    }, [open])

    function close() {
        setOpen(false)
        clearTimeout(timeOutId)
    }

    return (
        <div
            className={`lake-toast ${open ? 'open' : ''} ${className}`}
            {...other}
        >
            <div className={`lake-toast-content`}>
                {children}
            </div>

            <Button
                onClick={close}
                style={{
                    background: 'transparent',
                    borderRadius: `50%`,
                    padding: '0.5em',
                }}
            >
                <FontAwesomeIcon icon={faXmark}/>
            < /Button>
        </div>
    )
}