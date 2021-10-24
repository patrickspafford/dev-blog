import React from 'react'
import { IWithChild } from '@interfaces'

const HeaderContainer = ({ children }: IWithChild) => (
  <header className="w-full h-24 gradient dark:gradient-dark dark:border-b dark:border-white sticky shadow-lg flex items-stretch justify-between pl-2 pr-2 top-0 left-0 right-0 z-50">
    {children}
  </header>
)

export default HeaderContainer
