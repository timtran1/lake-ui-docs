export default function CardLandscape(props) {
    const {src, alt} = props

    return (
        <div
            className="shadow-sm rounded-md flex h-[150px] border border-gray-200 border-solid overflow-hidden transition-all duration-300 hover:translate-y-0.5 hover:shadow-none">
            {src ?
                <img className="rounded-tl-md rounded-bl-md h-full" src={src} alt={alt}/>
                :
                null
            }
            <div className="flex flex-col p-2 grow">
                {props.children}
            </div>
        </div>
    )
}