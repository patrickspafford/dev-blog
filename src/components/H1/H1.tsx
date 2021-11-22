import React from 'react'
import { IWithTextStyled } from '@interfaces'
import { useClassNames } from '@hooks'

const H1 = ({ children, className }: IWithTextStyled) => {
  const classNames = useClassNames()
  return (
    <h1
      className={classNames(`text-xl md:text-3xl dark:text-white `, className)}
    >
      {children}
    </h1>
  )
}

export default H1
