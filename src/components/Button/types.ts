import { IWithTextStyled } from '@interfaces'
import { ReactNode } from 'react'

export interface IButton extends IWithTextStyled {
  rightIcon?: ReactNode
  href: string
}
