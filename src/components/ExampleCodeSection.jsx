import {Tabs, TabPanel} from "@asynctech/lake-ui";
import HighlightedCodeBlock from "./HighlightedCodeBlock.jsx";
import {useState} from "react";

export default function (props) {
    const [tab, setTab] = useState(0)

    return (
        <Tabs useCurrentTabIndex={[tab, setTab]} tabs={['Example', 'Classes/Tailwind', 'Inline CSS']}>
            <TabPanel index={0} currentTabIndex={tab}>
                <div className="p-2 rounded-md flex justify-center items-center flex-wrap bg-gradient-to-r from-green-400 to-cyan-500 min-h-[200px]">
                    {props.children}
                </div>
            </TabPanel>
             {/*from-amber-300 to-orange-500*/}

            <TabPanel index={1} currentTabIndex={tab}>
                <HighlightedCodeBlock code={props.classCode}/>
            </TabPanel>

            <TabPanel index={2} currentTabIndex={tab}>
                <HighlightedCodeBlock code={props.inlineCode}/>
            </TabPanel>
        </Tabs>
    )
}