import { distSkill, Game, multSkill, sumSkill } from '../logic'

export const game = new Game([
  multSkill,
  sumSkill,
  distSkill,
])