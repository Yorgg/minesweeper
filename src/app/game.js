import "./styles.scss"
import Board from "./../components/game/board"
import createInitialSquares from "./create_initial_squares.js"

class Game {
  constructor(settings={}) {
    this.sweptSquares = 0
    this.over = false
    this.settings = { 
      ...{
        width:  9, 
        height: 9, 
        mines:  9,
      }, 
      ...settings 
    }

    const height = this.settings.height
    const width  = this.settings.width

    if (this.settings.mines >= height*width) {
      throw "error: too many mines"
    }
   

    this.remainingSweeps = width*height-this.settings.mines

    const squares = createInitialSquares(
      this,
      height,
      width
    )

    this.board = new Board(squares)
    this.node = document.createElement("div")
    this.node.style.width  = width*26
    this.node.style.height = height*26
  }

  render() {
    const body = document.getElementsByTagName("body")[0]
    body.innerHTML = ""
    this.node.appendChild(this.board.render())
    body.appendChild(this.node)
  }
}

export default Game
