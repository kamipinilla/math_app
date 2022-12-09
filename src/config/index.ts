import { Game } from '../logic/game'
import { Dist } from '../logic/skill/dist'
import { Mult } from '../logic/skill/mult'
import { Range } from '../logic/range'
import { Sum } from '../logic/skill/sum'
import { SortedAscOrder } from '../logic/order'

export const game = new Game([
  new Mult({
    firstRange: new Range({
      min: 2,
      max: 9,
    }),
    secondRange: new Range({
      min: 2,
      max: 9,
    }),
    order: new SortedAscOrder(),
  }),
  new Sum({
    firstRange: new Range({
      min: 2,
      max: 9,
    }),
    secondRange: new Range({
      min: 2,
      max: 9,
    }),
    order: new SortedAscOrder(),
  }),
  new Dist({
    firstRange: new Range({
      min: 2,
      max: 10,
    }),
    secondRange: new Range({
      min: 100,
      max: 1000,
    }),
    order: new SortedAscOrder(),
  }),
])