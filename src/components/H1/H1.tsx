import React from 'react'
import { IText, IStyled } from '@interfaces'
import { useClassNames } from '@hooks'

interface IH1 extends IText, IStyled {}

const H1 = ({ children, className, style }: IH1) => {
  const classNames = useClassNames()
  return (
    <h1
      className={classNames(`text-xl md:text-2xl dark:text-white `, className)}
      style={style}
    >
      {children}
    </h1>
  )
}

export default H1
