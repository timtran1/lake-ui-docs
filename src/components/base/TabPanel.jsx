import {useEffect, useState, useRef} from "react";
import './css/TabPanel.css'
import usePrevious from "../../utilities/usePrevious.js";

export default function TabPanel(props) {
    const {index, currentTabIndex, className, children, ...other} = props
    const show = currentTabIndex === index
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

    // let translateX = currentTabIndex !== index ? 'translate-x-full' : ''
    // const absolute = currentTabIndex !== index ? 'absolute inset-0' : ''
    // const opacity = ''
    // const scale = ''
    //
    // useEffect(() => {
    //     if (currentTabIndex === index) { // this is now active panel
    //         translateX = 'translate-x-0'
    //     } else if (prevTabIndex === index) { // leaving away from this panel
    //         if (index < currentTabIndex) { // move to forward panels
    //             translateX = '-translate-x-full'
    //         } else if (index > currentTabIndex) { // move to backward panels
    //             translateX = 'translate-x-full'
    //         }
    //     }
    // }, [])

    return (
        <div className={`lake-tabpanel ${translateX} ${className}`} {...other}>
            {children}
        </div>
    )
}