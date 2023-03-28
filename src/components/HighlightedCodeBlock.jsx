import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {coldarkDark} from "react-syntax-highlighter/dist/cjs/styles/prism/index.js";

export default function (props) {
    return (
        <SyntaxHighlighter language="jsx" style={coldarkDark} className={`rounded-md`}>
            {props.code}
        </SyntaxHighlighter>
    );
}