export interface ITypewriterChain {
  lines: {
    line: string
    delayAfter: number
  }[]
  delay: number
  className?: string
}
