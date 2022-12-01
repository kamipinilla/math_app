export class Range {
  private min: number
  private max: number

  constructor(p: {
    min: number,
    max: number,
  }
  ) {
    this.min = p.min
    this.max = p.max
  }

  getRandomInt(): number {
    const range = this.max - this.min + 1
    const random = this.min + Math.floor(Math.random() * range)
    return random
  }

  getMin(): number {
    return this.min
  }

  getMax(): number {
    return this.max
  }
}