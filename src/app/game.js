import "./styles.scss"
import Board from "./../components/game/board"
import TopMenu from "./../components/game/top_menu"
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

    this.topMenu = new TopMenu(settings => (new Game(settings)).render())
    this.board = new Board(squares)
    this.node  = document.createElement("div")
  }

  render() {
    const body = document.getElementsByTagName("body")[0]
    body.innerHTML = ""

    this.node.style.width  = this.settings.width*26
    this.node.style.height = this.settings.height*26

    this.node.appendChild(this.topMenu.render())
    this.node.appendChild(this.board.render())
    body.appendChild(this.node)
  }
}

export default Game
