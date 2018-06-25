import Square from "./../square"

class MineSquare extends Square {
  constructor(sweepHandler, flagHandler) {
    super()
    this.classes      = ["square--mine"]
    this.sweepHandler = sweepHandler
    this.flagHandler  = flagHandler
    this.type         = "mine"
    this.isSwept      = false
    this.isFlagged    = false
  }

}

export default MineSquare
