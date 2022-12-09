export class Operand {
  static readonly Times = new this('x')
  static readonly Plus = new this('+')
  static readonly Tilde = new this('~')

  private constructor(
    private str: string
  ) {}

  getString(): string {
    return this.str
  }
}
