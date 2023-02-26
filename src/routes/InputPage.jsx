import Button from "../components/base/Button.jsx";
import ExampleCodeSection from "../components/ExampleCodeSection.jsx";
import Input from "../components/base/Input.jsx";
import TopBar from "../components/base/TopBar.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import Sidebar from "../components/base/Sidebar.jsx";


export default function () {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div>
            <TopBar className={`w-screen`}>
                <Button hoverEffect={false} className={`p-2 bg-transparent text-black`}>
                    <FontAwesomeIcon icon={faBars} onClick={() => setSidebarOpen(true)}/>
                </Button>
                <h1 className={`font-bold text-3xl ml-1`}>Lake UI</h1>
            </TopBar>

            <Sidebar useOpen={[sidebarOpen, setSidebarOpen]}>
                d
            </Sidebar>

            <main className="mx-auto max-w-5xl pt-10 pb-20  px-10">
                <h2 className="text-3xl font-bold mb-3">Inputs</h2>

                <h3 className="text-lg font-semibold">Usage</h3>
                <p className="mb-4">
                    To use the Button component, import it and add it to your JSX code.
                </p>

                <ExampleCodeSection classCode={`import Input from './components/Input';

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
                        <Input type="text"/>
                    </div>
                </ExampleCodeSection>


                {/*styling*/}
            border color, border radius, shadow (no border), bg color

                {/*data binding*/}

                {/*enable focus effect*/}

                {/*validation with error mesg*/}



                <h3 className="text-lg font-semibold mt-8">Props</h3>
                <p>Any prop can be passed to the componnent, including all <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"
                    className={`underline`}>attributes</a> of the regular HTML <code
                    className={`bg-gray-200 rounded p-1`}>&lt;button&gt;</code> component.</p>
                <table className={`w-full mt-2`}>
                    <thead className={`text-left`}>
                    <tr>
                        <th>Prop name</th>
                        <th>Type</th>
                        <th>Default value</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><code>hoverEffect</code></td>
                        <td><code>boolean</code></td>
                        <td><code>true</code></td>
                        <td>An optional flag to enable/disable hover effect. Default is true.</td>
                    </tr>
                    <tr>
                        <td><code>...other</code></td>
                        <td><code>any</code></td>
                        <td></td>
                        <td>Any additional props passed to the component will be spread here.</td>
                    </tr>
                    </tbody>
                </table>

            </main>
        </div>
    )
}