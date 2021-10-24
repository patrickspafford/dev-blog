import React from 'react'
import { IWithTextStyled } from '@interfaces'

const H1 = ({ children, className }: IWithTextStyled) => (
  <h1 className={`text-3xl dark:text-white ${className}`}>{children}</h1>
)

export default H1
