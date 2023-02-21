import {useEffect} from "react";

export default function TabPanel(props) {
    const {currentTabIndex, prevTabIndex, index} = props

    let translateX = currentTabIndex !== index ? 'translate-x-full' : ''
    const absolute = currentTabIndex !== index ? 'absolute inset-0' : ''

    useEffect(() => {
        if (currentTabIndex === index) { // this is now active panel
            translateX = 'translate-x-0'
        } else if (prevTabIndex === index) { // leaving away from this panel
            if (index < currentTabIndex) { // move to forward panels
                translateX = '-translate-x-full'
            } else if (index > currentTabIndex) { // move to backward panels
                translateX = 'translate-x-full'
            }
        }
    }, [])

    return (
        <div
            className={`w-screen h-screen fixed top-0 left-0 flex justify-center items-center transition-opacity duration-500 ${opacity}`}
        >
            <div className=" bg-black opacity-25 fixed inset-0"/>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center" onClick={() => setOpen(false)}>
                    <div
                        className={`p-3 bg-white rounded-md transition-all duration-300 ${scale}`}
                        onClick={e => e.stopPropagation()}
                    >
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}