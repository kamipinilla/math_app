import { Scenario } from './scenario'
import { Skill } from './skill'
import { chooseUsingDay } from './utils'

export class Logic {
  constructor(
    private skills: Skill[],
  ) {}

  getScenario(): Scenario {
    const skill = chooseUsingDay(this.skills)
    const scenario = skill.generateScenario()
    return scenario
  }
}