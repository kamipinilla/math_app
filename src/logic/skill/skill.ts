import { Operand } from '../operand'
import { KeepOrder, Order } from '../order'
import { Scenario } from '../scenario'
import { NumberGenerator } from './numberGenerator'

export class Skill {
  private operand: Operand
  private generator: NumberGenerator
  private order: Order

  constructor(p: {
    operand: Operand,
    generator: NumberGenerator
    order?: Order,
  }) {
    this.operand = p.operand
    this.generator = p.generator
    this.order = p.order ?? new KeepOrder()
  }

  generateScenario(): Scenario {
    const {first, second, answer} = this.generator.getNumbers()
    const [left, right] = this.order.getOrder(first, second)

    return new Scenario({
      left,
      right,
      answer,
      operand: this.operand,
    })
  }
}
