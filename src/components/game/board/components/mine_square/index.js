import Square from "./../square"

class MineSquare extends Square {
  constructor(handler) {
    super()
    this.classes      = ["square--mine"]
    this.sweepHandler = handler
    this.type         = "mine"
    this.isSwept      = false
    this.isFlagged    = false
  }

}

export default MineSquare
