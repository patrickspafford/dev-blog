import React from 'react'
import { IStyledWithChild } from '@interfaces'

const Span = ({ children, className }: IStyledWithChild) => (
  <span className={`block font-sourceCode ${className || ''}`}>{children}</span>
)

export default Span
