import { Operand } from '../operand'
import { SortedAscOrder } from '../order'
import { Range } from '../range'
import { NumberGenerator, NumberGeneratorOutput } from './numberGenerator'
import { Skill } from './skill'

export class MultNumberGenerator implements NumberGenerator {
  private firstRange: Range
  private secondRange: Range

  constructor(p: {
    firstRange: Range,
    secondRange: Range,
  }) {
    this.firstRange = p.firstRange
    this.secondRange = p.secondRange
  }

  getNumbers(): NumberGeneratorOutput{
    const first = this.firstRange.getRandomInt()
    const second = this.secondRange.getRandomInt()
    const answer = first * second

    return {
      first,
      second,
      answer,
    }
  }
}

export const multSkill = new Skill({
  generator: new MultNumberGenerator({
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
  operand: Operand.Times,
})