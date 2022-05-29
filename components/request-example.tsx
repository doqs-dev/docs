import { SimpleCodeHighlighter } from "./code-highlighter";
import { baseUrl } from "./constants";
import { useCallback, useState } from "react";

type Props = {
  method: 'post' | 'get' | 'put' | 'delete',
  url: string;
  headers: object | null;
  file: { key: string, fileName: string, variable: string } | null;
  json: object | null;
}


type Language = 'Python' | 'cURL';
const LANGUAGES: Array<Language> = ['Python', 'cURL'];


export const RequestExample = (props: Props) => {

  const [value, setValue] = useState<Language>('Python')

  const handleChange = useCallback((val: Language) => {
    setValue(val);
  }, []);

  return (
      <div>
        <div className={'py-1.5 bg-gray-900 text-right'}>
          <select className={'appearance-none bg-transparent text-gray-200 px-2 mr-2 outline-none'} onChange={handleChange}>
            {LANGUAGES.map(lang => <option key={lang}
                                           value={lang}>{lang}</option>)}
          </select>
        </div>
        <div>
          <SimpleCodeHighlighter language="python"
                                 code={`
import requests
${props.file ? `${props.file.variable} = open('${props.file.fileName}', 'rb')` : ''}
resp = requests.post("${baseUrl}${props.url}",
    headers=${JSON.stringify(props.headers)},
    ${props.file || props.json ?
                                     (
                                         (props.file ? `files={"${props.file?.key}": (${props.file?.fileName}, ${props.file?.variable})},` : '') +
                                         (props.json ? `json=${JSON.stringify(props.json)},` : '')
                                     ) : ''
                                 }
)
`.trimStart()}
          />
        </div>
      </div>
  )

};