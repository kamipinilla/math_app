export function choose<T>(nums: T[]): T {
  if (nums.length === 0) { throw Error() }

  const randomIndex = Math.floor(Math.random() * nums.length)
  return nums[randomIndex]
}

export function scramble(first: number, second: number): [number, number] {
  if (Math.random() < 0.5) {
    [first, second] = [second, first]
  }

  return [first, second]
}