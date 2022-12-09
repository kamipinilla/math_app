import { Range } from '../range'
import { chooseRandom } from '../random'
import { NumberGenerator, NumberGeneratorOutput } from './numberGenerator'
import { Skill } from './skill'
import { SortedAscOrder } from '../order'
import { Operand } from '../operand'

export class SumNumberGenerator implements NumberGenerator {
  private firstRange: Range
  private secondRange: Range

  constructor(p: {
    firstRange: Range,
    secondRange: Range,
  }) {
    this.firstRange = p.firstRange
    this.secondRange = p.secondRange
  }

  private getSecondNumber(first: number): number {
    const options: number[] = []
    for (let second = this.secondRange.getMin(); second <= this.secondRange.getMax(); second++) {
      if (second === first) continue

      options.push(second)
    }

    return chooseRandom(options)
  }

  getNumbers(): NumberGeneratorOutput {
    const first = this.firstRange.getRandomInt()
    const second = this.getSecondNumber(first)
    const answer = first + second

    return {
      first,
      second,
      answer,
    }
  }
}

export const sumSkill = new Skill({
  generator: new SumNumberGenerator({
    firstRange: new Range({
      min: 2,
      max: 9,
    }),
    secondRange: new Range({
      min: 2,
      max: 9,
    }),
  }),
  order: new SortedAscOrder(),
  operand: Operand.Plus,
})