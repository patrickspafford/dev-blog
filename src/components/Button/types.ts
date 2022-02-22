import { IText, IStyled } from '@interfaces'
import { ReactNode } from 'react'

export interface IButton extends IText, IStyled {
  rightIcon?: ReactNode
  href: string
  showRightIcon?: boolean
}
