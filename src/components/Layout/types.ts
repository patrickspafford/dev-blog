import { IMdxFrontmatter, IChildren } from '@interfaces'

export interface ILayout extends IChildren {
  pageTitle: string
  description?: string | undefined
  imageLink?: string
}

export interface LayoutNode {
  frontmatter: IMdxFrontmatter
  slug: string
}

export interface IUseLayoutStaticQuery {
  blogPosts: {
    nodes: LayoutNode[]
  }
  other: {
    nodes: LayoutNode[]
  }
}
