import Square from "./../square"

class InitialSquare extends Square {

  constructor(handler) {
    super()
    this.classes      = ["initial-square"]
    this.sweepHandler = handler
    this.type         = "initial"
    this.isSwept      = false
    this.isFlagged    = false
  }

}

export default InitialSquare

