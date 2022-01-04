import React from 'react'
import { IWithTextStyled } from '@interfaces'
import { useClassNames } from '@hooks'

const H1 = ({ children, className, style }: IWithTextStyled) => {
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
