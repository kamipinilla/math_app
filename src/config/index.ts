import { Game } from '../logic/game'
import { distSkill } from '../logic/skill/dist'
import { multSkill } from '../logic/skill/mult'
import { sumSkill } from '../logic/skill/sum'

export const game = new Game([
  multSkill,
  sumSkill,
  distSkill,
])