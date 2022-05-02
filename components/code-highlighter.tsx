import SyntaxHighlighter from "react-syntax-highlighter";
import darcula from 'react-syntax-highlighter/dist/cjs/styles/hljs/darcula';
import { PropsWithChildren } from "react";

type SimpleCodeHighlighterProps = {
  title?: string;
  language?: string;
};

export const SimpleCodeHighlighter = ({
                                        title,
                                        language = 'JSON',
                                        children,
                                      }: PropsWithChildren<SimpleCodeHighlighterProps>) => {
  return (
      <div className="code-highlighter">
        {title && <h3>{title}</h3>}
        <SyntaxHighlighter language={language} style={darcula}>
          {children}
        </SyntaxHighlighter>
      </div>
  );
};