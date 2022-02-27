import React, { useState } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import darkTheme from 'prism-react-renderer/themes/nightOwl'
import { useClassNames } from '@hooks'
import { useClipboard } from 'use-clipboard-copy'
import { useRecoilValue } from 'recoil'
import { darkModeAtom } from '@state'

interface ICodeBlock {
  children: any
  className?: any
  containerClassName?: string
  language?: Language
}
export default ({ children, className, containerClassName }: ICodeBlock) => {
  const language = className.replace(/language-/, '')
  const [hovering, setHovering] = useState(false)
  const clipboard = useClipboard()
  const [hasCopied, setHasCopied] = useState(false)
  const classNames = useClassNames()

  return (
    <div
      className={classNames('my-4 shadow-md relative', containerClassName)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <span
        className={classNames(
          'absolute top-1 right-3 text-gray-500 text-xs opacity-0 border border-gray-300 rounded-full p-1 px-2 cursor-pointer',
          hovering && 'opacity-100',
        )}
        onClick={() => {
          clipboard.copy(children.toString())
          setHasCopied(true)
        }}
      >
        {hasCopied ? 'Copied ✅' : 'Copy'}
      </span>
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: '20px' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => {
                  return (
                    <span
                      key={key}
                      {...getTokenProps({ token, key })}
                      style={{ textShadow: 'none' }}
                    />
                  )
                })}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
