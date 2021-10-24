import React from 'react'
import { IClickable } from '@interfaces'

const Hamburger = ({ onClick }: IClickable) => (
  <div className="mr-3 hover:opacity-50 cursor-pointer p-4" onClick={onClick}>
    <span className="block h-1 bg-white w-8 mb-2.5 rounded-full" />
    <span className="block h-1 bg-white w-8 rounded-full" />
  </div>
)

export default Hamburger
