import './css/Tabs.css'
import usePrevious from "../../utilities/usePrevious.js";
import React, {useEffect, useState} from "react";

function Tab(props) {
    const {index, tab} = props
    const [currentTabIndex, setCurrentTabIndex] = props.useCurrentTabIndex
    const [translateX, setTranslateX] = useState(currentTabIndex === index ? '' : 'translate-left')
    const prevTabIndex = usePrevious(currentTabIndex)

    useEffect(() => {
        if (currentTabIndex === index) { // this is now active panel
            setTranslateX('')
        }
        if (prevTabIndex === index) { // leaving away from this panel
            if (index < currentTabIndex) { // move to forward panels
                console.log('forward', {index, currentTabIndex, prevTabIndex})
                setTranslateX('translate-right')
            } else if (index > currentTabIndex) { // move to backward panels
                console.log('backward', {index, currentTabIndex, prevTabIndex})
                setTranslateX('translate-left')
            }
        }
    }, [currentTabIndex])

    return (
        <div className={`lake-tab ${currentTabIndex === index ? 'active' : ''}`}
             onClick={() => setCurrentTabIndex(index)}>
            <div className={`lake-tab-bg ${translateX}`}></div>
            <div className={`lake-tab-content`}>{tab}</div>
        </div>
    )
}


export default function Tabs(props) {
    const {tabs, tabless, children, className, useCurrentTabIndex, ...other} = props
    // const [currentTabIndex, setCurrentTabIndex] = props.useCurrentTabIndex

    return (
        <div className="lake-tabs-wrap">
            {!tabless &&
                <div className={`lake-tabs-bg ${className}`} {...other}>
                    {tabs.map((tab, index) =>
                        <Tab
                            key={index}
                            index={index}
                            tab={tab}
                            useCurrentTabIndex={useCurrentTabIndex}
                        />
                    )}
                </div>
            }

            <div className="lake-tabs-children">
                {children}
            </div>
        </div>
    )
}