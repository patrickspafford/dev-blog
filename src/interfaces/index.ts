import { ReactNode } from 'react'

export interface IWithChild {
  children: ReactNode
}

export interface IWithText {
  children: string
}

export interface IClickable {
  onClick: () => void
}

export interface IWithTextStyled extends IWithText {
  className?: string
}

export interface IStyledWithChild extends IWithChild {
  className?: string
}

export interface IMarkdownPostFrontMatter {
  category: string
  featured: boolean
  title: string
  date: string
}

export interface IGroupedMarkdownPosts {
  [k: string]: IMarkdownPostFrontMatter[]
}
