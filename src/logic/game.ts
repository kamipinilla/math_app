import { Scenario } from './scenario'
import { Skill } from './skill'
import { chooseUsingDay } from './random'

export class Game {
  constructor(
    private skills: Skill[],
  ) {}

  getScenario(): Scenario {
    const skill = chooseUsingDay(this.skills)
    const scenario = skill.generateScenario()
    return scenario
  }
}