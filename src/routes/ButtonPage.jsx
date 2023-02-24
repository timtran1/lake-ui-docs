import Button from "../components/base/Button.jsx";
import ExampleCodeSection from "../components/ExampleCodeSection.jsx";


export default function () {
    return (
        <main className="mx-auto max-w-5xl pt-10 pb-20  px-10">
            <h2 className="text-3xl font-bold mb-3">Buttons</h2>

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
            <ExampleCodeSection classCode={`<Button className="rounded-none bg-black mr-4">Sharp</Button>
<Button className="rounded-none bg-red-400 h-14 w-14 mr-4"><small>Square</small></Button>
<Button className="rounded-full h-12 w-12 mr-4"><small>Circle</small></Button>
<Button className="bg-green-500 mr-4">Rounded (Default)</Button>
<Button className="rounded-2xl bg-yellow-300 text-black mr-4">More rounded</Button>
`}
                                inlineCode={`<Button style={{borderRadius: 0, background: 'black'}}>Sharp</Button>
<Button style={{borderRadius: 0, background: '#f87171', height: '3.5rem', width: '3.5rem'}}><small>Square</small></Button>
<Button style={{borderRadius: '50%', height: '3rem', width: '3rem'}}><small>Circle</small></Button>
<Button style={{background: '#22c55e'}}>Rounded (Default)</Button>
<Button style={{borderRadius: '1rem', background: '#fde047', color: 'black'}}>More rounded</Button>
`}>
                <Button className="rounded-none bg-black mr-4">Sharp</Button>
                <Button className="rounded-none bg-red-400 h-14 w-14 mr-4"><small>Square</small></Button>
                <Button className="rounded-full h-12 w-12 mr-4"><small>Circle</small></Button>
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
                <Button className="bg-white text-black mr-2 border-2 border-blue-500 text-blue-500">Thick Blue Border</Button>
            </ExampleCodeSection>


            <h3 className="text-lg font-semibold mt-8">Glassy and Transparent</h3>
            <p className="mb-4">The Button component can be given a glassy or transparent effect.</p>
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
                <Button className="bg-transparent text-black mr-2">Transparent</Button>
                <Button className="bg-white/30 text-black backdrop-blur-sm mr-2">White</Button>
                <Button className="bg-green-500/50 backdrop-blur-sm mr-2">Green</Button>
                <Button className="bg-orange-500 mr-2">Orange</Button>
                <Button className="bg-red-500 mr-2">Red</Button>
                <Button className="bg-blue-500/50 backdrop-blur-sm mr-2">Blue (Default)</Button>
            </ExampleCodeSection>

            <h3 className="text-lg font-semibold mt-8">Icons</h3>
            <p className="mb-4">The Button component can be easily customized to include Font Awesome icons. Here's an
                example:</p>
            <div className="flex justify-center space-x-4">
                <Button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <i className="fa fa-search"></i> <span className="ml-2">Search</span>
                </Button>
            </div>
        </main>

    )
}