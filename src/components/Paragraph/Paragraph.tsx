import React from 'react'
import { IWithTextStyled } from '@interfaces'
import { useClassNames } from '@hooks'

const Paragraph = ({ className, children }: IWithTextStyled) => {
  const classNames = useClassNames()
  return (
    <p
      className={classNames(
        `paragraph block max-w-paragraph leading-loose overflow-ellipsis dark:text-white`,
        className,
      )}
    >
      {children}
    </p>
  )
}

export default Paragraph
