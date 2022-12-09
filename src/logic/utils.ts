export function chooseRandom<T>(items: T[]): T {
  if (items.length === 0) throw Error()

  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

export function chooseUsingDay<T>(items: T[]): T {
  if (items.length === 0) throw Error()

  const currDay = new Date().getDate()
  const randomIndex = currDay % items.length
  return items[randomIndex]
}

export function scramble(first: number, second: number): [number, number] {
  if (Math.random() < 0.5) {
    [first, second] = [second, first]
  }

  return [first, second]
}