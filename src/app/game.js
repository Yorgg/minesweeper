import "./styles.scss"
import Board from "./../components/game/board"
import createInitialSquares from "./create_initial_squares.js"

class Game {
  constructor(settings={}) {
    this.sweptSquares = 0
    this.over = false
    this.settings = { 
      ...{
        width:  20, 
        height: 20, 
        mines:  39,
      }, 
      ...settings 
    }

    const squares = createInitialSquares(
      this,
      this.settings.height, 
      this.settings.width
    )

    this.node = document.createElement("div")
    this.node.style.width  = this.settings.width*26
    this.node.style.height = this.settings.height*26

    this.board = new Board(squares)
  }

  render() {
    const body = document.getElementsByTagName("body")[0]
    body.innerHTML = ""
    this.node.appendChild(this.board.render())
    body.appendChild(this.node)
  }
}

export default Game
