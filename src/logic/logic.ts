import { Scenario } from './scenario'
import { Skill } from './skill'
import { choose } from './utils'

export class Logic {
  constructor(
    private skills: Skill[],
  ) {}

  getScenario(): Scenario {
    const skill = choose(this.skills)
    const scenario = skill.generateScenario()
    return scenario
  }
}