import React from 'react'
import { IText, IStyled } from '@interfaces'
import { useClassNames } from '@hooks'

interface IParagraph extends IText, IStyled {}

const Paragraph = ({ className, children }: IParagraph) => {
  const classNames = useClassNames()
  return (
    <p
      className={classNames(
        `paragraph block max-w-paragraph text-xs sm:text-sm md:text-base leading-loose overflow-ellipsis dark:text-white`,
        className,
      )}
    >
      {children}
    </p>
  )
}

export default Paragraph
