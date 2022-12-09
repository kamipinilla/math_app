import { Scenario } from '../scenario'

export interface Skill {
  generateScenario(): Scenario
}