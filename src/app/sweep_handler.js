import sweeper from "./sweeper.js"
import handleLoss from "./handle_loss.js"
import handleWin  from "./handle_win.js"

const sweepHandler = game => coordinate => event => {
  const [r,c] = coordinate
  const square = game.board.squares[r][c]

  if (square.isFlagged) return
  if (game.over) return

  if (square.type === "mine") {
    handleLoss(game, square)
  } else {
    sweeper(coordinate, game)
    if (game.remainingSweeps === 0) handleWin(game) 
  }

  game.board.render()
}

export default sweepHandler
