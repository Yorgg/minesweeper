import createInitialSquares from "./../../app/create_initial_squares.js"
import Board from "./components/board"
import TopMenu from "./components/top_menu"

class Game {
  constructor(container, settings={}) {
    this.sweptSquares = 0
    this.over = false
    this.settings = { 
      ...{width: 9, height: 9, mines: 9}, 
      ...settings 
    }

    const height = this.settings.height
    const width  = this.settings.width

    if (this.settings.mines >= height*width) {
      throw "error: too many mines"
    }

    this.remainingSweeps = width*height - this.settings.mines

    const squares = createInitialSquares(this, height, width)

    this.topMenu = new TopMenu(settings => (new Game(container, settings)).render())
    this.board   = new Board(squares)

    this.containerNode = container  
    this.node = document.createElement("div")
  }

  render() {
    this.containerNode.innerHTML = ""

    this.node.appendChild(this.topMenu.render())
    this.node.appendChild(this.board.render())

    this.containerNode.appendChild(this.node)
  }
}

export default Game
