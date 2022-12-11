export function chooseRandom<T>(items: T[]): T {
  if (items.length === 0) throw Error()

  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

export function chooseUsingDay<T>(items: T[]): T {
  if (items.length === 0) throw Error()

  const daysPerSkill = 3
  const currDay = new Date().getDate()
  const randomIndex = Math.floor((currDay % (daysPerSkill * items.length)) / daysPerSkill)
  return items[randomIndex]
}