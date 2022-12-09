export type NumberGeneratorOutput = {
  first: number
  second: number
  answer: number
}

export interface NumberGenerator {
  getNumbers(): NumberGeneratorOutput
}