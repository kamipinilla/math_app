import { TimesOperand } from '../operand'
import { Order } from '../order'
import { Range } from '../range'
import { Scenario } from '../scenario'
import { Skill } from '.'

export class Mult implements Skill {
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

  generateScenario(): Scenario {
    const first = this.firstRange.getRandomInt()
    const second = this.secondRange.getRandomInt()
    const answer = first * second

    const [left, right] = this.order.getOrder(first, second)

    return new Scenario({
      left,
      right,
      answer,
      operand: new TimesOperand(),
    })
  }
}
