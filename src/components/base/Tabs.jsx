export default function Tabs(props) {
    const {tabs, tabless, children, className, ...other} = props
    const [currentTabIndex, setCurrentTabIndex] = props.useCurrentTabIndex

    return (
        <div className="flex flex-col overflow-hidden">
            {!tabless &&
                <div className="flex items-stretch py-1.5 pl-1.5 bg-gray-100 rounded-md ">
                    {tabs.map((tab, index) =>
                        <div
                            key={index}
                            className={`px-2 py-1.5 rounded-md min-w-[100px] mr-1 cursor-pointer ${currentTabIndex === index ? 'bg-white drop-shadow-md' : 'bg-gray-100 hover:bg-gray-200'}`}
                            onClick={() => setCurrentTabIndex(index)}
                        >
                            {tab}
                        </div>)}
                </div>
            }

            <div className="relative min-h-[50px]">
                {children}
            </div>
        </div>
    )
}