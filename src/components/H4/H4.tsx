import React from 'react'
import { IText, IStyled } from '@interfaces'
import { useClassNames } from '@hooks'

interface IH4 extends IText, IStyled {}

const H4 = ({ children, className, style }: IH4) => {
  const classNames = useClassNames()
  return (
    <h4
      className={classNames(
        `text-sm md:text-base font-semibold dark:text-white `,
        className,
      )}
      style={style}
    >
      {children}
    </h4>
  )
}

export default H4
