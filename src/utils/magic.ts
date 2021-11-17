export const wait = (duration: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), duration)
  })

interface IGroupedByKey<T> {
  [k: string]: T
}

export const groupArrayByKey = <T>(arr: T[], key: string): IGroupedByKey<T> => {
  const resultingObject: IGroupedByKey<T> = {}
  arr.forEach((item) => {
    resultingObject[item[key]] = item
  })
  return resultingObject
}
