import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import oceanicNext from "prism-react-renderer/themes/oceanicNext";
import "./codeBlock.scss";

type CodeBlockProps = {
  codeBlock: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ codeBlock }) => (
  <div data-testid='code-block'>
    <Highlight
      {...defaultProps}
      code={codeBlock.trim()}
      language='jsx'
      theme={oceanicNext}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} code-example`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </div>
);

export default CodeBlock;
