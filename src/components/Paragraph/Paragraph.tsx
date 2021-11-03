import React from 'react'
import { IWithTextStyled } from '@interfaces'

const Paragraph = ({ className, children }: IWithTextStyled) => (
  <p
    className={`block max-w-paragraph pb-4 pt-0 leading-loose overflow-ellipsis dark:text-white ${className}`}
  >
    {children}
  </p>
)

export default Paragraph
