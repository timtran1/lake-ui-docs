<div className="max-w-lg py-6">
    <div className="flex space-x-2">
        <Input className="mb-2" placeholder="Normal input"/>
        <Input className="border border-gray-400 mb-2" placeholder="Input with border"/>
    </div>
    <div>
        <Input className="w-[100px] mr-2 mb-2" placeholder="Short input"/>
        <Input className="w-[250px] mb-2" placeholder="Long input"/>
    </div>
    <div className="mb-2">
        <Input className="w-full" placeholder="Full width input"/>
    </div>

    <div className="flex space-x-2">
        <Input className="w-1/2 rounded-full mb-2" placeholder="Rounded input"/>
        <Input className="w-1/2 rounded-none mb-2" placeholder="Square input"/>
    </div>

    <div className="flex space-x-2">
        <Input className="w-1/3 bg-black text-white mb-2" placeholder="Black background"/>
        <Input className="w-1/3 bg-yellow-300 mb-2" placeholder="Yellow background"/>
        <Input className="w-1/3 bg-gray-200 mb-2" placeholder="Gray background"/>
    </div>

    <div className="flex flex-col">
        <Input className="h-7 mb-2 text-sm" placeholder="Small"/>
        <Input className="mb-2" placeholder="Normal"/>
        <Input className="h-18 text-3xl" placeholder="Large"/>
    </div>
</div>