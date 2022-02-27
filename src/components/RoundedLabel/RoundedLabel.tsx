import { useClassNames } from '@hooks'
import { IChildren, IStyled } from '@interfaces'
import React from 'react'
import Paragraph from '../Paragraph'

interface IRoundedLabel extends IChildren, IStyled {}

const RoundedLabel = ({ children, className }: IRoundedLabel) => {
  const classNames = useClassNames()
  return (
    <Paragraph
      className={classNames(
        'inline-block text-gray-500 border-nextjs dark:border-gray-500 border-0 sm:border rounded-sm sm:rounded-full px-1.5 sm:px-3 py-1.5 overflow-ellipsis whitespace-nowrap',
        className,
      )}
    >
      {children}
    </Paragraph>
  )
}

export default RoundedLabel
