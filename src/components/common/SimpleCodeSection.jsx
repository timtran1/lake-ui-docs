import {Tabs, TabPanel} from "@asynctech/lake-ui";
import HighlightedCodeBlock from "./HighlightedCodeBlock.jsx";
import {useState} from "react";

export default function (props) {
    const [tab, setTab] = useState(0)

    return (
        <Tabs useCurrentTabIndex={[tab, setTab]} tabs={['Example', 'Code']}>
            <TabPanel index={0} currentTabIndex={tab}>
                <div className="rounded-md flex justify-center py-8 items-center flex-wrap bg-gradient-to-r from-green-400 to-cyan-500 min-h-[200px]">
                    {props.children}
                </div>
            </TabPanel>

            <TabPanel index={1} currentTabIndex={tab}>
                <HighlightedCodeBlock code={props.code}/>
            </TabPanel>
        </Tabs>
    )
}