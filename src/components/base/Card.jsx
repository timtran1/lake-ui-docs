import './css/Card.css'

export default function (props) {
    const {children, className, hoverEffect,...other} = props

    return (
        <div className={`lake-card ${hoverEffect === false ? '' : 'hover-effect'} ${className}`} {...other}>
            {children}
        </div>
    )
}