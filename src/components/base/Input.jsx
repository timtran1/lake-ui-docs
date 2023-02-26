import './css/Input.css'

export default function (props) {
    const {className, focusEffect, value, onChange, ...other} = props

    return (
        <input
            className={`lake-input ${focusEffect === false ? '' : 'focus-effect'}  ${className}`}
            value={value}
            onChange={onChange}
            {...other}
        />
    )
}