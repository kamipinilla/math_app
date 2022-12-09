import { Scenario } from '../scenario'

export interface Skill {
  generateScenario(): Scenario
}

export { Mult } from './mult'
export { Sum } from './sum'
export { Dist } from './dist'