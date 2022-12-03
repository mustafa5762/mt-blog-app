import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function High({children}) {
  return (
    <div>
        <pre>
            <SyntaxHighlighter wrapLongLines={true} showLineNumbers={true} language="javascript" style={tomorrow}>
                {children}
            </SyntaxHighlighter>
        </pre>
    </div>
  )
}

export default High