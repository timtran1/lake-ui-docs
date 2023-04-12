import './css/TopBar.css'

export default function (props) {
    const {children, className, ...other} = props

    return (
        <header
            className={`lake-top-bar ${className}`}
            {...other}
        >
            {children}
        </header>
    )
}