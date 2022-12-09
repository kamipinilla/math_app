import { Dist, Game, Mult, Range, SortedAscOrder, Sum } from '../logic'

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
      min: 2,
      max: 10,
    }),
    order: new SortedAscOrder(),
  }),
])