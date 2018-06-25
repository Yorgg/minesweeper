import Square from "./../square"

class SafeSquare extends Square {
  constructor(sweepHandler, flagHandler, n) {
    super()
    this.val = n
    this.classes = [`safe-square--${n}`]
    this.sweepHandler = sweepHandler
    this.flagHandler  = flagHandler
    this.type         = "safe"
    this.isSwept      = false
    this.isFlagged    = false
  }
}

export default SafeSquare
