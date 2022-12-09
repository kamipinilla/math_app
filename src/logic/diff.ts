import { Operand } from './operand'
import { Range } from './range'
import { Scenario } from './scenario'
import { Skill } from './skill'
import { chooseRandom, scramble } from './utils'

const firstRange = new Range({
  min: 2,
  max: 10,
})
const secondRange = firstRange
const shouldScramble = false

export class Diff implements Skill {
  private getSecondNumber(first: number): number {
    const options: number[] = []
    for (let second = secondRange.getMin(); second <= secondRange.getMax(); second++) {
      if (Math.abs(first - second) <= 1) { continue }

      options.push(second)
    }

    return chooseRandom(options)
  }

  generateScenario(): Scenario {
    let first = firstRange.getRandomInt()
    let second = this.getSecondNumber(first)
    if (shouldScramble) {
      [first, second] = scramble(first, second)
    }
    const answer = Math.abs(first - second)

    return new Scenario({
      left: first,
      right: second,
      answer: answer,
      operand: Operand.Tilde,
    })
  }
}
