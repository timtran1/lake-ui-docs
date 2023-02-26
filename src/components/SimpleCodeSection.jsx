import Tabs from "./base/Tabs.jsx";
import TabPanel from "./base/TabPanel.jsx";
import Code from "./Code.jsx";
import {useState} from "react";

export default function (props) {
    const [tab, setTab] = useState(0)

    return (
        <Tabs useCurrentTabIndex={[tab, setTab]} tabs={['Example', 'Code']}>
            <TabPanel index={0} currentTabIndex={tab}>
                <div className="rounded-md flex justify-center items-center flex-wrap bg-gradient-to-r from-green-400 to-cyan-500 min-h-[200px]">
                    {props.children}
                </div>
            </TabPanel>

            <TabPanel index={1} currentTabIndex={tab}>
                <Code code={props.code}/>
            </TabPanel>
        </Tabs>
    )
}