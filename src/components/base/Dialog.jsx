import {useEffect, useState} from "react";
import './css/Dialog.css'

export default function (props) {
    const {className, children, useOpen, ...others} = props
    const [open, setOpen] = useOpen || [null, null]
    const [display, setDisplay] = useState(open ? 'show' : 'hide')

    useEffect(() => {
        if (open) setDisplay('flex')
        else setTimeout(() => setDisplay('hidden'), 150)
    }, [open])

    return (
        <div className={`lake-dialog-wrap ${open ? 'open' : ''} ${display}`}>
            <div className="lake-dialog-bg"/>

            <div className="lake-dialog-content-wrap">
                <div className="lake-dialog-content-flex-container" onClick={() => setOpen(false)}>
                    <div
                        className={`lake-dialog-content ${open ? 'open' : ''} ${className}`}
                        onClick={e => e.stopPropagation()}
                        {...others}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}