import { ReactNode } from 'react'

export interface IWithChild {
  children: ReactNode
}

export interface IStyledWithChild extends IWithChild {
  className?: string
}
