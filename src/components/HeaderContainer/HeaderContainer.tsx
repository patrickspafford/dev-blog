import React from 'react'
import { IWithChild } from '@interfaces'
import { useScrollProgress } from '@hooks'

const HeaderContainer = ({ children }: IWithChild) => {
  const progress = useScrollProgress()
  return (
    <header className="w-full h-24 gradient dark:gradient-dark dark:border-b dark:border-white sticky shadow-lg flex items-stretch justify-between pl-2 pr-2 top-0 left-0 right-0 z-50">
      {children}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white">
        <div
          className="bg-pink h-1 transition-width ease-linear duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  )
}

export default HeaderContainer
