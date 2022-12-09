export interface Operand {
  getString(): string
}

export class TimesOperand implements Operand {
  getString(): string {
    return 'x'
  }
}

export class PlusOperand implements Operand {
  getString(): string {
    return '+'
  }
}

export class TildeOperand implements Operand {
  getString(): string {
    return '~'
  }
}