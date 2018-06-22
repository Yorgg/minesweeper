import Square from "./../square"

class SafeSquare extends Square {

  constructor(handler, n) {
    super()
    this.val = n
    this.classes = [`safe-square--${n}`]
    this.sweepHandler = handler
    this.type         = "safe"
    this.isSwept      = false
    this.isFlagged    = false
  }
}

export default SafeSquare
