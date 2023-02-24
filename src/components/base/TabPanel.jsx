import {useEffect, useState} from "react";
import usePrevious from "../../utilities/usePrevious.js";
import './css/TabPanel.css'


export default function TabPanel(props) {
    const {index, currentTabIndex, className, children, ...other} = props
    const [translateX, setTranslateX] = useState(currentTabIndex === index ? '' : 'translate-right')
    const prevTabIndex = usePrevious(currentTabIndex)

    useEffect(() => {
        if (currentTabIndex === index) { // this is now active panel
            setTranslateX('')
        }
        if (prevTabIndex === index) { // leaving away from this panel
            if (index < currentTabIndex) { // move to forward panels
                setTranslateX('translate-left')
            } else if (index > currentTabIndex) { // move to backward panels
                setTranslateX('translate-right')
            }
        }
    }, [currentTabIndex])

    return (
        <div className={`lake-tabpanel ${translateX} ${className}`} {...other}>
            {children}
        </div>
    )
}