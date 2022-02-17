// { title, TitleIcon, children, accentColor, views, articles }
export interface ICard {
  title: string
  TitleIcon: any
  children: string
  accentColor: string
  views?: number
  articles?: number
  loading: boolean
}
