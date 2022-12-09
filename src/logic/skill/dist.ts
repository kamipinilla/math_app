import { TildeOperand } from '../operand'
import { Order } from '../order'
import { Range } from '../range'
import { Scenario } from '../scenario'
import { chooseRandom } from '../random'
import { Skill } from '.'

export class Dist implements Skill {
  private firstRange: Range
  private secondRange: Range
  private order: Order

  constructor(p: {
    firstRange: Range,
    secondRange: Range,
    order: Order,
  }) {
    this.firstRange = p.firstRange
    this.secondRange = p.secondRange
    this.order = p.order
  }

  private getSecondNumber(first: number): number {
    const options: number[] = []
    for (let second = this.secondRange.getMin(); second <= this.secondRange.getMax(); second++) {
      if (Math.abs(first - second) <= 1) continue

      options.push(second)
    }

    return chooseRandom(options)
  }

  generateScenario(): Scenario {
    const first = this.firstRange.getRandomInt()
    const second = this.getSecondNumber(first)
    const answer = Math.abs(first - second)

    const [left, right] = this.order.getOrder(first, second)

    return new Scenario({
      left,
      right,
      answer,
      operand: new TildeOperand(),
    })
  }
}
