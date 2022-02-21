import React from 'react'
import { IChildren, IStyled } from '@interfaces'
import { useClassNames } from '@hooks'

interface IH2 extends IStyled, IChildren {}

const H2 = ({ children, className, style }: IH2) => {
  const classNames = useClassNames()
  return (
    <h2
      className={classNames(`text-lg md:text-xl dark:text-white `, className)}
      style={style}
    >
      {children}
    </h2>
  )
}

export default H2
