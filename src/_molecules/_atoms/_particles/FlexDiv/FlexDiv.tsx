import React, { forwardRef } from 'react'
import { IStyledWithChild } from '@/interfaces'
const FlexDiv = forwardRef(({ children, className }: IStyledWithChild, ref) => (
  <div className={`flex items-center ${className || ''}`} ref={ref}>
    {children}
  </div>
))

export default FlexDiv
