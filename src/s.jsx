<div className="py-6">
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
</div>