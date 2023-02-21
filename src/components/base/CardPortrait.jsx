import './css/CardLandscape.css'

export default function CardLandscape(props) {
    const {src, alt} = props

    return (
        <div
            className="vr-card-wrap hover:translate-y-1 hover:shadow-none text-white bg-black w-[200px] h-[300px] cursor-pointer rounded-[20px] z-10 transition-all duration-200">
            {src ?
                <div
                    className="img-wrap h-[200px] rounded-t-[20px] flex justify-center items-center transition-all duration-200 overflow-hidden">
                    <img src={src} alt={alt} className="rounded-t-[20px] transition-all duration-200"/>
                </div>
                :
                null
            }
            <div className="p-3">
                {props.children}
            </div>
        </div>
    )
}