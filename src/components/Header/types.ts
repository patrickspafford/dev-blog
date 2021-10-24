import { IGroupedMarkdownPosts } from '@interfaces'

export interface IHeader {
  pageTitle: string
  pages: IGroupedMarkdownPosts
}

export interface IHeaderVersion {
  pages: IGroupedMarkdownPosts
}
