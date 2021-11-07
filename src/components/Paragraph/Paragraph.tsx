import React from 'react'
import { IWithTextStyled } from '@interfaces'

const Paragraph = ({ className, children }: IWithTextStyled) => (
  <p
    className={`paragraph block max-w-paragraph leading-loose overflow-ellipsis dark:text-white ${className}`}
  >
    {children}
  </p>
)

export default Paragraph
