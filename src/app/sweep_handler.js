import Board from "./../components/game/board"
import updateSweptState from "./update_swept_state.js"

const sweepHandler = game => coordinate => event => {
  const [r,c] = coordinate

  // game over man, game over.
  if (game.over) return
  if (game.board.squares[r][c].type == "mine") {
    game.board.squares.forEach(r => { 
      r.forEach(square => {
        if (square.type === "mine") 
          square.isSwept = true
      })
    })

    game.board.squares[r][c].classes.push("square-is-exploded")
    game.board.render()
    game.over = true
    return
  }

  updateSweptState([r,c], game.board.squares)
  game.board.render()
}

export default sweepHandler
