import React from 'react'
import { useClassNames } from '@hooks'
import CodeEditor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism.css'

interface IEditor {
  padding: number
  children: string
  className: string
}

const Editor = ({ children, className, padding }: IEditor) => {
  const classNames = useClassNames()
  return (
    <CodeEditor
      value={children}
      disabled
      onValueChange={() => {}}
      padding={padding}
      highlight={(v) => highlight(v, languages.js)}
      className={classNames(
        'text-sm md:text-xl md:border-r border-nextjs min-w-lg dark:bg-white',
        className,
      )}
    />
  )
}

export default Editor
