import { Operand } from './operand'

export class Scenario {
  private left: number
  private right: number
  private operand: Operand
  private answer: number

  constructor(p: {
    left: number
    right: number
    operand: Operand
    answer: number
  }) {
    this.left = p.left
    this.right = p.right
    this.operand = p.operand
    this.answer = p.answer
  }

  getLeft(): number {
    return this.left
  }

  getRight(): number {
    return this.right
  }

  getOperand(): Operand {
    return this.operand
  }

  getAnswer(): number {
    return this.answer
  }
}