import { Operand } from './operand'
import { Range } from './range'
import { Scenario } from './scenario'
import { Skill } from './skill'
import { chooseRandom, scramble } from './utils'

const firstRange = new Range({
  min: 2,
  max: 9,
})
const secondRange = firstRange
const shouldScramble = false

export class Sum implements Skill {
  private getSecondNumber(first: number): number {
    const options: number[] = []
    for (let second = secondRange.getMin(); second <= secondRange.getMax(); second++) {
      if (second === first) { continue }

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
    const answer = first + second

    return new Scenario({
      left: first,
      right: second,
      answer: answer,
      operand: Operand.Plus,
    })
  }
}
