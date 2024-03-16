import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const CodeSnippet = ({ code, language }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
    <div className="app-code">
        <pre>
            <code className={`language-${language}`}>{code}</code>
        </pre>
    </div>
    );
}

export default CodeSnippet;