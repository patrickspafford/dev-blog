import React from 'react'
import { IStyledWithChild } from '@interfaces'
import { useClassNames } from '@hooks'

const Span = ({ children, className }: IStyledWithChild) => {
  const classNames = useClassNames()
  return (
    <span
      className={classNames(
        `block font-sourceCode text-sm transition-all`,
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Span
