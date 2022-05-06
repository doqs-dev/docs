import SyntaxHighlighter from "react-syntax-highlighter";
import React from "react";

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js'

// @ts-ignore
const theme = resolveConfig(tailwindConfig).theme

// @ts-ignore
const light_yellow = theme.colors.amber['200']; //"#e0c46c"
// @ts-ignore
const orange = theme.colors.amber['500']; //#cb7832


// base theme darcula - adjusted colors to match tailwind
const style: { [key: string]: React.CSSProperties } = {
  "hljs": {
    "display": "block",
    "overflowX": "auto",
    "padding": "0.5em",
    "background": theme.colors.gray[800], // #2b2b2b
    "color": theme.colors.gray[400], // #bababa
  },
  "hljs-strong": {
    "color": "#a8a8a2"
  },
  "hljs-emphasis": {
    "color": "#a8a8a2",
    "fontStyle": "italic"
  },
  "hljs-bullet": {
    "color": "#6896ba"
  },
  "hljs-quote": {
    "color": "#6896ba"
  },
  "hljs-link": {
    "color": "#6896ba"
  },
  "hljs-number": {
    "color": "#6896ba"
  },
  "hljs-regexp": {
    "color": "#6896ba"
  },
  "hljs-literal": {
    "color": "#6896ba"
  },
  "hljs-code": {
    "color": "#a6e22e"
  },
  "hljs-selector-class": {
    "color": "#a6e22e"
  },
  "hljs-keyword": {
    "color": orange
  },
  "hljs-selector-tag": {
    "color": orange
  },
  "hljs-section": {
    "color": orange
  },
  "hljs-attribute": {
    "color": orange
  },
  "hljs-name": {
    "color": orange
  },
  "hljs-variable": {
    "color": orange
  },
  "hljs-params": {
    "color": "#b9b9b9"
  },
  "hljs-string": {
    "color": theme.colors.lime['700']//"#6a8759"
  },
  "hljs-subst": {
    "color": light_yellow
  },
  "hljs-type": {
    "color": light_yellow
  },
  "hljs-built_in": {
    "color": light_yellow
  },
  "hljs-builtin-name": {
    "color": light_yellow
  },
  "hljs-symbol": {
    "color": light_yellow
  },
  "hljs-selector-id": {
    "color": light_yellow
  },
  "hljs-selector-attr": {
    "color": light_yellow
  },
  "hljs-selector-pseudo": {
    "color": light_yellow
  },
  "hljs-template-tag": {
    "color": light_yellow
  },
  "hljs-template-variable": {
    "color": light_yellow
  },
  "hljs-addition": {
    "color": light_yellow
  },
  "hljs-comment": {
    "color": "#7f7f7f"
  },
  "hljs-deletion": {
    "color": "#7f7f7f"
  },
  "hljs-meta": {
    "color": "#7f7f7f"
  }
};


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
        <SyntaxHighlighter language={language} style={style} wrapLines>
          {code}
        </SyntaxHighlighter>
      </div>
  );
};