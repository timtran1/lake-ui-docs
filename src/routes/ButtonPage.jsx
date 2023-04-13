import {Button,} from '@deepsel/lake-ui'
import ExampleCodeSection from "../components/common/ExampleCodeSection.jsx";
import TopBar from "../components/navigation/Topbar.jsx";
import Sidebar from "../components/navigation/Sidebar.jsx";
import {useState} from "react";
import Code from "../components/common/Code.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faHeart, faThumbsUp, faShare, faBookmark} from "@fortawesome/free-solid-svg-icons";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    function handleClick() {
        alert('Button clicked!');
    }

    return (
        <div>
            <TopBar setSidebarOpen={setSidebarOpen}/>
            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}/>

            <main className="mx-auto max-w-[800px] pt-10 pb-20 px-6">
                <h2 className="text-3xl font-bold mb-3">Button</h2>

                <h3 className="text-lg font-semibold">Usage</h3>
                <p className="mb-4">
                    To use the Button component, simply import it and add it to your JSX code.
                </p>

                <ExampleCodeSection classCode={`import Button from './components/Button';

function MyComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button onClick={handleClick} className="bg-black">
        Click Me
      </Button>
    </div>
  );
}
`}
                                    inlineCode={`import Button from './components/Button';

function MyComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button onClick={handleClick} style={{background: 'black'}}>
        Click Me
      </Button>
    </div>
  );
}
`}>
                    <div>
                        <Button onClick={handleClick} style={{background: 'black'}}>
                            Click Me
                        </Button>
                    </div>
                </ExampleCodeSection>

                <h3 className="text-lg font-semibold">Background Colors</h3>
                <p className="mb-4">
                    The Button component can be easily customized with CSS to change its background color.
                </p>

                <ExampleCodeSection classCode={`<Button className="bg-black">Black</Button>
<Button className="bg-white text-black">White</Button>
<Button className="bg-green-500">Green</Button>
<Button className="bg-orange-500">Orange</Button>
<Button className="bg-red-500">Red</Button>
<Button className="bg-blue-500">Blue (Default)</Button>
`}
                                    inlineCode={`<Button style={{background: 'black'}}>Black</Button>
<Button style={{background: 'white', color: 'black'}}>White</Button>
<Button style={{background: '#22c55e'}}>Green</Button>
<Button style={{background: '#f97316'}}>Orange</Button>
<Button style={{background: '#ef4444'}}>Red</Button>
<Button style={{background: '#3b82f6'}}>Blue (Default)</Button>
`}>
                    <Button className="bg-black mr-2">Black</Button>
                    <Button className="bg-white text-black mr-2">White</Button>
                    <Button className="bg-green-500 mr-2">Green</Button>
                    <Button className="bg-orange-500 mr-2">Orange</Button>
                    <Button className="bg-red-500 mr-2">Red</Button>
                    <Button className="bg-blue-500 mr-2">Blue (Default)</Button>
                </ExampleCodeSection>


                <h3 className="text-lg font-semibold mt-8">Shapes</h3>
                <p className="mb-4">
                    The Button component can also be customized with CSS to change its shape.
                </p>
                <ExampleCodeSection classCode={`<Button className="rounded-none mr-4">Sharp</Button>
<Button className="bg-blue-500 rounded-full h-12 w-12 mr-4"><small>Circle</small></Button>
<Button className="bg-green-500 mr-4">Rounded (Default)</Button>
<Button className="rounded-2xl bg-yellow-300 text-black mr-4">More rounded</Button>
`}
                                    inlineCode={`<Button style={{borderRadius: 0}}>Sharp</Button>
<Button style={{borderRadius: '50%', height: '3rem', width: '3rem'}}><small>Circle</small></Button>
<Button style={{background: '#22c55e'}}>Rounded (Default)</Button>
<Button style={{borderRadius: '1rem', background: '#fde047', color: 'black'}}>More rounded</Button>
`}>
                    <Button className="rounded-none mr-4">Sharp</Button>
                    <Button className="bg-blue-500 rounded-full h-12 w-12 mr-4"><small>Circle</small></Button>
                    <Button className="bg-green-500 mr-4">Rounded (Default)</Button>
                    <Button className="rounded-2xl bg-yellow-300 text-black mr-4">More rounded</Button>
                </ExampleCodeSection>


                <h3 className="text-lg font-semibold mt-8">Borders</h3>
                <p className="mb-4">
                    The Button component can also be bordered.
                </p>
                <ExampleCodeSection classCode={`<Button className="bg-white text-black mr-2 border border-black">Border</Button>
<Button className="bg-white text-black mr-2 border-2 border-black">Thick Border</Button>
<Button className="bg-white text-black mr-2 border-2 border-blue-500 text-blue-500">Thick Blue Border</Button>
`}
                                    inlineCode={`<Button style={{background: 'white', color: 'black', border: '1px solid black'}}>Border</Button>
<Button style={{background: 'white', color: 'black', border: '2px solid black'}}>Thick Border</Button>
<Button style={{background: 'white', color: 'black', border: '2px solid #3b82f6'}}>Thick Blue Border</Button>
`}>
                    <Button className="bg-white text-black mr-2 border border-black">Border</Button>
                    <Button className="bg-white text-black mr-2 border-2 border-black">Thick Border</Button>
                    <Button className="bg-white text-black mr-2 border-2 border-blue-500 text-blue-500">Thick Blue
                        Border</Button>
                </ExampleCodeSection>


                <h3 className="text-lg font-semibold mt-8">Icons</h3>
                <p className="mb-4">
                    The Button component can be easily customized to include any content including icons. Here's an
                    example using Font Awesome icons:
                </p>
                <ExampleCodeSection classCode={``}
                                    inlineCode={``}>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button className="text-red-500 bg-white rounded-lg px-3 py-2">
                            <FontAwesomeIcon icon={faHeart} className=""/>
                        </Button>

                        <Button className="bg-indigo-600 px-3 py-2">
                            <FontAwesomeIcon icon={faShare} className="mr-2"/>
                            Share
                        </Button>


                        <Button className="text-black bg-white rounded-none px-3 py-2">
                            Bookmark
                            <FontAwesomeIcon icon={faBookmark} className="ml-2 text-yellow-400"/>
                        </Button>
                    </div>
                </ExampleCodeSection>


                <h3 className="text-lg font-semibold mt-8">Props</h3>
                <p>Any prop can be passed to the component, including all <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"
                    className={`underline`}>attributes</a> of the regular HTML <Code>&lt;button&gt;</Code> component.
                </p>
                <table className={`w-full mt-2`}>
                    <thead className={`text-left`}>
                    <tr>
                        <th>Prop name</th>
                        <th>Type</th>
                        <th>Default value</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><code>hoverEffect</code></td>
                        <td><code>boolean</code></td>
                        <td><code>true</code></td>
                        <td></td>
                        <td>An optional flag to enable/disable hover effect. Default is true.</td>
                    </tr>
                    <tr>
                        <td><code>...other</code></td>
                        <td><code>any</code></td>
                        <td></td>
                        <td></td>
                        <td>Any additional props passed to the component will be spread here.</td>
                    </tr>
                    </tbody>
                </table>

            </main>
        </div>
    )
}