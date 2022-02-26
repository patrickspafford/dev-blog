import React from 'react'
import { IStyled, IChildren } from '@interfaces'
import { useClassNames } from '@hooks'

interface ISpan extends IStyled, IChildren {}

const Span = ({ children, className }: ISpan) => {
  const classNames = useClassNames()
  return (
    <span
      className={classNames(
        `block font-sourceCode text-sm transition-all dark:text-white`,
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Span
