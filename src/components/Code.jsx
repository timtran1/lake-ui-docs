export default function (props) {
    return <code className={`bg-gray-200 rounded p-1.5 ${props.className}`}>{props.children}</code>
}