import { IMarkdownPostFrontMatter, IChildren } from '@interfaces'

export interface ILayout extends IChildren {
  pageTitle: string
  description?: string | undefined
  imageLink?: string
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
