const wait = (duration: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), duration)
  })

export default { wait }
