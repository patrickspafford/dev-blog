import { IMarkdownPostFrontMatter, IWithChild } from '@interfaces'

export interface ILayout extends IWithChild {
  pageTitle: string
}

export interface LayoutNode {
  frontmatter: IMarkdownPostFrontMatter
  slug: string
}

export interface IUseLayoutStaticQuery {
  allMdx: {
    nodes: LayoutNode[]
  }
}
