import { Operand } from './operand'
import { Range } from './range'
import { Scenario } from './scenario'
import { Skill } from './skill'
import { scramble } from './utils'

const firstRange = new Range({
  min: 2,
  max: 9,
})
const secondRange = firstRange
const shouldScramble = false

export class Mult implements Skill {
  generateScenario(): Scenario {
    let first = firstRange.getRandomInt()
    let second = secondRange.getRandomInt()
    if (shouldScramble) {
      [first, second] = scramble(first, second)
    }
    const answer = first * second

    return new Scenario({
      left: first,
      right: second,
      answer: answer,
      operand: Operand.Times,
    })
  }
}
