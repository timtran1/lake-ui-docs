import Button from "../components/base/Button.jsx";
import Tabs from "../components/base/Tabs.jsx";
import TabPanel from "../components/base/TabPanel.jsx";
import {useState} from "react";

export default function () {
    const [tab, setTab] = useState(0)

    return (
        <main className="mx-auto max-w-5xl pt-10 pb-20  px-10">
            <h2 className="text-3xl font-bold text-center mb-8">Examples</h2>

            <h3 className="text-lg font-semibold">Background Colors</h3>
            <p className="mb-4">The Button component can be easily customized with CSS to change its background color.
                Here are some examples:</p>

            <Tabs useCurrentTabIndex={[tab, setTab]} tabs={['Example', 'Code', 'cvcv']}>
                <TabPanel index={0} currentTabIndex={tab}>
                    <div className="flex justify-center space-x-4">
                        <Button className="lake-btn bg-red-500">Red Button</Button>
                        <Button className="lake-btn bg-green-500">Green Button</Button>
                        <Button className="lake-btn bg-blue-500">Blue Button</Button>
                        <Button className="lake-btn bg-yellow-500">Yellow Button</Button>
                        <Button className="lake-btn bg-indigo-500">Indigo Button</Button>
                    </div>
                </TabPanel>

                <TabPanel index={1} currentTabIndex={tab}>
                    ggg
                    cvxv
                </TabPanel>


                <TabPanel index={2} currentTabIndex={tab}>
                    ertetete
                    aaaaaaaa
                </TabPanel>
            </Tabs>


            <h3 className="text-lg font-semibold mt-8">Shapes</h3>
            <p className="mb-4">The Button component can also be customized with CSS to change its shape. Here are some
                examples:</p>
            <div className="flex justify-center space-x-4">
                <Button className="lake-btn rounded-full">Rounded Button</Button>
                <Button className="lake-btn rounded-md">Square Button</Button>
                <Button className="lake-btn rounded-full border-2 border-gray-400 p-2">Circle Button</Button>
            </div>

            <h3 className="text-lg font-semibold mt-8">Transparency</h3>
            <p className="mb-4">The Button component can be made transparent with CSS. Here's an example:</p>
            <div className="flex justify-center space-x-4">
                <Button className="lake-btn bg-transparent border border-white text-white">Transparent Button</Button>
            </div>

            <h3 className="text-lg font-semibold mt-8">Glassy</h3>
            <p className="mb-4">The Button component can be given a glassy effect with CSS. Here's an example:</p>
            <div className="flex justify-center space-x-4">
                <Button
                    className="lake-btn bg-white text-black rounded-full px-6 py-2 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">Glassy
                    Button</Button>
            </div>

            <h3 className="text-lg font-semibold mt-8">Icons</h3>
            <p className="mb-4">The Button component can be easily customized to include Font Awesome icons. Here's an
                example:</p>
            <div className="flex justify-center space-x-4">
                <Button
                    className="lake-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <i className="fa fa-search"></i> <span className="ml-2">Search</span>
                </Button>
            </div>
        </main>

    )
}