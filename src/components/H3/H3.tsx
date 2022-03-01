import React from 'react'
import { IText, IStyled } from '@interfaces'
import { useClassNames } from '@hooks'

interface IH3 extends IText, IStyled {}

const H3 = ({ children, className, style }: IH3) => {
  const classNames = useClassNames()
  return (
    <h3
      className={classNames(`text-base md:text-lg dark:text-white `, className)}
      style={style}
    >
      {children}
    </h3>
  )
}

export default H3
