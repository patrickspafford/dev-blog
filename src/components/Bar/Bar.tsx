import { useClassNames } from '@hooks'
import { IStyled } from '@interfaces'
import React from 'react'

const Bar = ({ className }: IStyled) => {
  const classNames = useClassNames()
  return (
    <hr
      className={classNames(
        'h-px w-full bg-deepBlue my-4 dark:bg-white',
        className,
      )}
    />
  )
}

export default Bar
