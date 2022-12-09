export interface Order {
  getOrder(first: number, second: number): [number, number]
}

export class KeepOrder implements Order {
  getOrder(first: number, second: number): [number, number] {
    return [first, second]
  }
}

export class RandomOrder implements Order {
  getOrder(first: number, second: number): [number, number] {
    if (Math.random() < 0.5) {
      [first, second] = [second, first]
    }

    return [first, second]
  }
}

export class SortedAscOrder implements Order {
  getOrder(first: number, second: number): [number, number] {
    return [first, second].sort((a, b) => a - b) as [number, number]
  }
}

export class SortedDescOrder implements Order {
  getOrder(first: number, second: number): [number, number] {
    return [first, second].sort((a, b) => b - a) as [number, number]
  }
}