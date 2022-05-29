import { SimpleCodeHighlighter } from "./code-highlighter";
import { baseUrl } from "./constants";

type Props = {
  method: 'post' | 'get' | 'put' | 'delete',
  url: string;
  headers: object | null;
  file: { key: string, fileName: string, variable: string } | null;
  json: object | null;
}

export const RequestExample = (props: Props) => {

  return (
      <>
        <SimpleCodeHighlighter language="python"
                               code={`
import requests
${props.file ? `${props.file.variable} = open('${props.file.fileName}', 'rb')` : ''}
resp = requests.post("${baseUrl}${props.url}",
    headers=${JSON.stringify(props.headers)},
    ${props.file ? `files={"${props.file?.key}": (${props.file?.fileName}, ${props.file?.variable})},` : ''} ${props.json ? `\njson=${JSON.stringify(props.json)}` : ''} 
)
`.trim()}
        />
      </>
  )

};