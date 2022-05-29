import { SimpleCodeHighlighter } from "./code-highlighter";
import { baseUrl } from "./constants";
import { useCallback, useState, SyntheticEvent } from "react";

type Props = {
  method: 'post' | 'get' | 'put' | 'delete',
  url: string;
  headers: object;
  file: { key: string, fileName: string, variable: string } | null;
  json: object | null;
}


type Language = 'Python' | 'cURL';
const LANGUAGES: Array<Language> = ['Python', 'cURL'];


export const RequestExample = (props: Props) => {

  const [value, setValue] = useState<Language>('Python')

  const handleChange = (val: SyntheticEvent<HTMLSelectElement>) => {
    console.debug('handleChange', val);
    setValue(val.currentTarget.value as Language);
  };

  const codeMap: { [key: string]: string } = {
    Python: `
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
`.trimStart(),
    cURL: `curl --request ${props.method} \\
--url "${baseUrl}${props.url}" \\
${ Object.entries(props.headers).map(val =>  `-H "${val[0]}: ${val[1]}"` ).join(' \\ \n') } \\
${props.json? `-d '${JSON.stringify(props.json)}'` : ''}
`}

  console.log(codeMap[value], value);
  return (
      <div>
        <div className={'py-1.5 bg-gray-900 text-right'}>
          <select className={'appearance-none bg-transparent text-gray-200 px-2 mr-2 outline-none'}
                  onChange={handleChange}>
            {LANGUAGES.map(lang => <option key={lang}
                                           value={lang}>{lang}</option>)}
          </select>
        </div>
        <div>
          {value && (<SimpleCodeHighlighter language={value.toString().toLowerCase()} code={codeMap[value]}/>)}
        </div>
      </div>
  )

};

/* curl --request POST \
  --url https://api.doqs.dev/v1/templates/%7Bid%7D/fill \
  --header 'Content-Type: application/json' \
  --header 'x-api-key: your-api-key' \
  --data '{
	"data": {}
}'
*
*
* */