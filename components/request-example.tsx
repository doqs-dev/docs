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
    setValue(val.currentTarget.value as Language);
  };

  const codeMap: { [key: string]: string } = {
    Python: `
import requests
${props.file ? `${props.file.variable} = open('${props.file.fileName}', 'rb')` : ''}
resp = requests.post("${baseUrl}${props.url}",
    headers=${JSON.stringify(props.headers)},
    ${
        (
            (props.file ? `files={"${props.file?.key}": (${props.file?.fileName}, ${props.file?.variable})},` : '') +
            (props.json ? `json=${JSON.stringify(props.json)},` : '')
        )
    }
)
`.trimStart(),
    // CURL
    cURL: `curl --request ${props.method} \\
--url "${baseUrl}${props.url}" \\
${Object.entries(props.headers).map(val => `-H "${val[0]}: ${val[1]}"`).join(' \\ \n')} \\
${
        (props.json ? `-d '${JSON.stringify(props.json)}'` : '') +
        (props.file ? `-F "${props.file.key}=@${props.file.fileName}"` : '')
    }
`
  }

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(codeMap[value]);
  }, [value, codeMap]);

  return (
      <div>
        <div className={'py-1.5 bg-gray-900 flex'}>
          <select className={'appearance-none bg-transparent text-gray-200 px-2 mr-2 outline-none'}
                  onChange={handleChange}>
            {LANGUAGES.map(lang => <option key={lang}
                                           value={lang}>{lang}</option>)}
          </select>
          <button className={'text-white'} title={'Copy to clipboard'} onClick={copyToClipboard}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-auto w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"/>
              <path
                  d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"/>
            </svg>
          </button>
        </div>
        <div>
          {value && (<SimpleCodeHighlighter language={value.toString().toLowerCase()} code={codeMap[value]}/>)}
        </div>
      </div>
  )

};
