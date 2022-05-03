import SyntaxHighlighter from "react-syntax-highlighter";
import darcula from 'react-syntax-highlighter/dist/cjs/styles/hljs/darcula';

type SimpleCodeHighlighterProps = {
  title?: string;
  language?: string;
  code: string | string[];
};

export const SimpleCodeHighlighter = ({
                                        title,
                                        language = 'JSON',
                                        code
                                      }: SimpleCodeHighlighterProps) => {
  // @ts-ignore
  return (
      <div className="code-highlighter">
        {title && <h3>{title}</h3>}
        <SyntaxHighlighter language={language} style={darcula} wrapLines>
          {code}
        </SyntaxHighlighter>
      </div>
  );
};