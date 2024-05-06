import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeBlockProps = {
  codestring: string;
};

function CodeBlock({ codestring }: CodeBlockProps): JSX.Element {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={dracula}
      customStyle={{ borderRadius: '10px', height: '100%', margin: 0, padding: '1rem', fontSize: '14px'}}
      showLineNumbers={true}
    >
      {codestring}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
