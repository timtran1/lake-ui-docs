import './css/Switch.css';

export default function (props) {
    const {
        className,
        renderEnabled,
        renderDisabled,
        renderButton,
        onChange,
        checked,
        size,
        ...other
    } = props
    const sizeClass = size || 'medium'

    return (
        <div className={`lake-switch-wrap ${sizeClass} ${className}`} {...other}>
            <input type="checkbox" className={`lake-switch-input ${sizeClass}`} checked={checked} onChange={onChange}/>
            <div className={`lake-switch-button ${sizeClass}`}>{renderButton}</div>
            <div className={`lake-switch-bg`}></div>
            <div className={`lake-switch-text-off`}>{renderDisabled}</div>
            <div className={`lake-switch-text-on`}>{renderEnabled}</div>
        </div>
    );
}