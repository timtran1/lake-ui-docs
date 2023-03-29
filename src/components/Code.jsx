export default function (props) {
    return <code className={`bg-gray-100 rounded p-1 ${props.className}`}>{props.children}</code>
}