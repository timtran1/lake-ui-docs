import {
    Tabs,
    TabPanel,
} from "@asynctech/lake-ui";
import ExampleCodeSection from "../components/ExampleCodeSection.jsx";
import TopBar from "../components/Topbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {useState} from "react";
import SimpleCodeSection from "../components/SimpleCodeSection.jsx";
// import Tabs from "../components/base/Tabs.jsx";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-[800px] pt-10 pb-20 px-6">
                <h2 className="text-3xl font-bold mb-3">Tabs</h2>

                <h3 className="text-lg font-semibold">Usage</h3>
                <p className="mb-4">
                    To use the tabs, import the Tabs and TabPanel component and add them to your JSX code.
                </p>

                <SimpleCodeSection code={`<Tabs
    useCurrentTabIndex={[tabIndex, setTabIndex]}
    tabs={['Tab 0', 'Tab 1', 'Tab 2']}
>
    <TabPanel index={0} currentTabIndex={tabIndex}>
        Tab 0 content here
    </TabPanel>
    <TabPanel index={1} currentTabIndex={tabIndex}>
        Tab 1 content here
    </TabPanel>
    <TabPanel index={2} currentTabIndex={tabIndex}>
        Tab 2 content here
    </TabPanel>
</Tabs>`}>
                    <Tabs
                        useCurrentTabIndex={[tabIndex, setTabIndex]}
                        tabs={['Tab 0', 'Tab 1', 'Tab 2']}
                    >
                        <TabPanel index={0} currentTabIndex={tabIndex}>
                            Tab 0 content here
                        </TabPanel>
                        <TabPanel index={1} currentTabIndex={tabIndex}>
                            Tab 1 content here
                        </TabPanel>
                        <TabPanel index={2} currentTabIndex={tabIndex}>
                            Tab 2 content here
                        </TabPanel>
                    </Tabs>
                </SimpleCodeSection>

                <h3 className="text-lg font-semibold">Styling tabs</h3>
                <p className="mb-4">
                    The Tabs and TabPanel components can be easily customized with classes and inline CSS.
                </p>

                <ExampleCodeSection inlineCode={`<div className="py-6">
    <h4 className="text-white font-bold text-xl my-2">Tabs with custom background color</h4>
    <Tabs
        style={{backgroundColor: '#60a5fa'}}
        useCurrentTabIndex={[tabIndex, setTabIndex]}
        tabs={['Tab 0', 'Tab 1', 'Tab 2']}
    >
        <TabPanel index={0} currentTabIndex={tabIndex}>
            Tab 0 content here
        </TabPanel>
        <TabPanel index={1} currentTabIndex={tabIndex}>
            Tab 1 content here
        </TabPanel>
        <TabPanel index={2} currentTabIndex={tabIndex}>
            Tab 2 content here
        </TabPanel>
    </Tabs>

    <h4 className="text-white font-bold text-xl mb-2 mt-8">Glassy tabs</h4>
    <Tabs
        style={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(4px)',
            marginBottom: '0.25rem',
        }}
        useCurrentTabIndex={[tabIndex, setTabIndex]}
        tabs={['Tab 0', 'Tab 1', 'Tab 2']}
    >
        <TabPanel style={{
            backgroundColor: 'white',
            padding: '1.25rem',
            borderRadius: '0.375rem',
        }} index={0} currentTabIndex={tabIndex}>
            Tab 0 content here
        </TabPanel>
        <TabPanel style={{
            backgroundColor: 'white',
            padding: '1.25rem',
            borderRadius: '0.375rem',
        }} index={1} currentTabIndex={tabIndex}>
            Tab 1 content here
        </TabPanel>
        <TabPanel style={{
            backgroundColor: 'white',
            padding: '1.25rem',
            borderRadius: '0.375rem',
        }} index={2} currentTabIndex={tabIndex}>
            Tab 2 content here
        </TabPanel>
    </Tabs>

    <h4 className="text-white font-bold text-xl mb-2 mt-12">Tabs with custom TabPanel style</h4>
    <Tabs
        style={{marginBottom: '0.25rem'}}
        useCurrentTabIndex={[tabIndex, setTabIndex]}
        tabs={['Tab 0', 'Tab 1', 'Tab 2']}
    >
        <TabPanel style={{
            color: 'white',
            backgroundColor: '#4f46e5',
            padding: '1.25rem',
            borderRadius: '0.375rem',
        }} index={0} currentTabIndex={tabIndex}>
            Tab 0 content here
        </TabPanel>
        <TabPanel style={{
            color: 'white',
            backgroundColor: '#4f46e5',
            padding: '1.25rem',
            borderRadius: '0.375rem',
        }} index={1} currentTabIndex={tabIndex}>
            Tab 1 content here
        </TabPanel>
        <TabPanel style={{
            color: 'white',
            backgroundColor: '#4f46e5',
            padding: '1.25rem',
            borderRadius: '0.375rem',
        }} index={2} currentTabIndex={tabIndex}>
            Tab 2 content here
        </TabPanel>
    </Tabs>
</div>`}
                                    classCode={`<div className="py-6">
    <h4 className="text-white font-bold text-xl my-2">Tabs with custom background color</h4>
    <Tabs
        className="bg-blue-400"
        useCurrentTabIndex={[tabIndex, setTabIndex]}
        tabs={['Tab 0', 'Tab 1', 'Tab 2']}
    >
        <TabPanel index={0} currentTabIndex={tabIndex}>
            Tab 0 content here
        </TabPanel>
        <TabPanel index={1} currentTabIndex={tabIndex}>
            Tab 1 content here
        </TabPanel>
        <TabPanel index={2} currentTabIndex={tabIndex}>
            Tab 2 content here
        </TabPanel>
    </Tabs>

    <h4 className="text-white font-bold text-xl mb-2 mt-8">Glassy tabs</h4>
    <Tabs
        className="backdrop-blur-sm bg-white/30 mb-1"
        useCurrentTabIndex={[tabIndex, setTabIndex]}
        tabs={['Tab 0', 'Tab 1', 'Tab 2']}
    >
        <TabPanel className="bg-white p-5 rounded-md" index={0} currentTabIndex={tabIndex}>
            Tab 0 content here
        </TabPanel>
        <TabPanel className="bg-white p-5 rounded-md" index={1} currentTabIndex={tabIndex}>
            Tab 1 content here
        </TabPanel>
        <TabPanel className="bg-white p-5 rounded-md" index={2} currentTabIndex={tabIndex}>
            Tab 2 content here
        </TabPanel>
    </Tabs>

    <h4 className="text-white font-bold text-xl mb-2 mt-12">Tabs with custom TabPanel style</h4>
    <Tabs
        className="mb-1"
        useCurrentTabIndex={[tabIndex, setTabIndex]}
        tabs={['Tab 0', 'Tab 1', 'Tab 2']}
    >
        <TabPanel className="bg-indigo-600 text-white rounded-b-md p-5" index={0}
                  currentTabIndex={tabIndex}>
            Tab 0 content here
        </TabPanel>
        <TabPanel className="bg-indigo-600 text-white rounded-b-md p-5" index={1}
                  currentTabIndex={tabIndex}>
            Tab 1 content here
        </TabPanel>
        <TabPanel className="bg-indigo-600 text-white rounded-b-md p-5" index={2}
                  currentTabIndex={tabIndex}>
            Tab 2 content here
        </TabPanel>
    </Tabs>
</div>`}>
                    <div className="py-6">
                        <h4 className="text-white font-bold text-xl my-2">Tabs with custom background color</h4>
                        <Tabs
                            className="bg-blue-400"
                            useCurrentTabIndex={[tabIndex, setTabIndex]}
                            tabs={['Tab 0', 'Tab 1', 'Tab 2']}
                        >
                            <TabPanel index={0} currentTabIndex={tabIndex}>
                                Tab 0 content here
                            </TabPanel>
                            <TabPanel index={1} currentTabIndex={tabIndex}>
                                Tab 1 content here
                            </TabPanel>
                            <TabPanel index={2} currentTabIndex={tabIndex}>
                                Tab 2 content here
                            </TabPanel>
                        </Tabs>

                        <h4 className="text-white font-bold text-xl mb-2 mt-8">Glassy tabs</h4>
                        <Tabs
                            className="backdrop-blur-sm bg-white/30 mb-1"
                            useCurrentTabIndex={[tabIndex, setTabIndex]}
                            tabs={['Tab 0', 'Tab 1', 'Tab 2']}
                        >
                            <TabPanel className="bg-white p-5 rounded-md" index={0} currentTabIndex={tabIndex}>
                                Tab 0 content here
                            </TabPanel>
                            <TabPanel className="bg-white p-5 rounded-md" index={1} currentTabIndex={tabIndex}>
                                Tab 1 content here
                            </TabPanel>
                            <TabPanel className="bg-white p-5 rounded-md" index={2} currentTabIndex={tabIndex}>
                                Tab 2 content here
                            </TabPanel>
                        </Tabs>

                        <h4 className="text-white font-bold text-xl mb-2 mt-12">Tabs with custom TabPanel style</h4>
                        <Tabs
                            className="mb-1"
                            useCurrentTabIndex={[tabIndex, setTabIndex]}
                            tabs={['Tab 0', 'Tab 1', 'Tab 2']}
                        >
                            <TabPanel className="bg-indigo-600 text-white rounded-b-md p-5" index={0}
                                      currentTabIndex={tabIndex}>
                                Tab 0 content here
                            </TabPanel>
                            <TabPanel className="bg-indigo-600 text-white rounded-b-md p-5" index={1}
                                      currentTabIndex={tabIndex}>
                                Tab 1 content here
                            </TabPanel>
                            <TabPanel className="bg-indigo-600 text-white rounded-b-md p-5" index={2}
                                      currentTabIndex={tabIndex}>
                                Tab 2 content here
                            </TabPanel>
                        </Tabs>
                    </div>
                </ExampleCodeSection>

            </main>
        </div>
    )
}