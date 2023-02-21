import './css/Input.css'

export default function (props) {
    const {className, value, onChange, ...other} = props

    return (
        <input
            className={`lake-input focus:scale-105 ${className}`}
            value={value}
            onChange={onChange}
            {...other}
        />
    )
}