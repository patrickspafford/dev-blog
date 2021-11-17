import { ITypewriterChain } from './types'
import React, { useState } from 'react'
import { Typewriter } from 'react-typewriting-effect'
import { wait } from '@utils'
import 'react-typewriting-effect/dist/index.css'

const TypewriterChain = ({ lines, delay, className }: ITypewriterChain) => {
  const [currIdx, setCurrIdx] = useState(0)

  const handleOnCompleteLine = async () => {
    await wait(lines[currIdx].delayAfter)
    setCurrIdx((currIdx + 1) % lines.length)
  }

  return (
    <>
      {lines.map((item) => {
        if (item.line === lines[currIdx].line) {
          return (
            <Typewriter
              className={`block font-sourceCode text-black ${className ?? ''}`}
              onComplete={() => handleOnCompleteLine()}
              delay={delay}
              key={lines[currIdx].line}
              stopBlinkinOnComplete
              cursorClassName="bg-white"
              string={lines[currIdx].line}
            />
          )
        }
        return null
      })}
    </>
  )
}

export default TypewriterChain
