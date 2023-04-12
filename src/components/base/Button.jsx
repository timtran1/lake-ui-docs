import './css/Button.css'

export default function (props) {
    const {onClick, children, className, hoverEffect, ...other} = props

    return (
        <button
            onClick={onClick}
            className={`lake-btn ${hoverEffect === false ? '' : 'hover-effect'} ${className}`}
            {...other}
        >
            {children}
        </button>
    )
}