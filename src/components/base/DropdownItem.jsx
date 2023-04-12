import './css/DropdownItem.css'

export default function (props) {
    const {hoverClass, children, className, ...other} = props

    return (
        <div
            className={`lake-dropdown-item ${hoverClass ? hoverClass : 'hover'} ${className}`}
            {...other}
        >
            {children}
        </div>
    )
}