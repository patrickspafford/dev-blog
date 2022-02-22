import { useClassNames } from '@hooks'
import { IChildren, IStyled } from '@interfaces'
import React from 'react'

interface IRoundedLabelGroup extends IChildren, IStyled {
  loading: boolean
}

const RoundedLabelGroup = ({
  children,
  className,
  loading = false,
}: IRoundedLabelGroup) => {
  const classNames = useClassNames()
  return (
    <div
      className={classNames(
        'flex items-center justify-start gap-1 xs:gap-2 sm:gap-4 opacity-0 duration-300 transition-opacity',
        !loading && 'opacity-100',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default RoundedLabelGroup
