import { IMarkdownPostFrontMatter, IWithChild } from '@interfaces'

export interface ILayout extends IWithChild {
  pageTitle: string
}

export interface LayoutNode {
  frontmatter: IMarkdownPostFrontMatter
}

export interface IUseLayoutStaticQuery {
  allMdx: {
    nodes: LayoutNode[]
  }
}
