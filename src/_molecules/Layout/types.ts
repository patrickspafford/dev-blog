import { IWithChild } from '@/interfaces'

export interface ILayout extends IWithChild {
  pageTitle: string
}

export interface LayoutNode {
  path: string
}

export interface IUseLayoutQuery {
  allSitePage: {
    nodes: LayoutNode[]
  }
}
