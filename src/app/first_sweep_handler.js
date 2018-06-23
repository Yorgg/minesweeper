import { compose } from "ramda"
import sweepHandler from "./sweep_handler.js"
import flagHandler from "./flag_handler.js"
import nearbyMineCount from "./../utilities/nearby_mine_count.js"
import MineSquare from "./../components/game/board/components/mine_square"
import SafeSquare from "./../components/game/board/components/safe_square"
import createMineCoordinates from "./../utilities/create_mine_coordinates.js"

const firstSweepHandler = game => coordinate => event => {

  const addMines = board => {
    const mineCoordinates = createMineCoordinates(
      coordinate,
      game.settings.mines,
      game.settings.height,
      game.settings.width
    )

    mineCoordinates.forEach( coordinate => {
      const [r,c] = coordinate.split(",").map(i => +i)
      board[r][c] = new MineSquare(
        sweepHandler(game)([r,c]),
        flagHandler(game)([r,c]),
      )
    })

    return board
  }

  const addSafeSquares = board => {
    for(let r = 0; r < board.length; r++) {
      for(let c = 0; c < board[0].length; c++) {
         if (board[r][c].type !== "mine") {
           board[r][c] = new SafeSquare(
             sweepHandler(game)([r,c]),
             flagHandler(game)([r,c]),
             nearbyMineCount(board,r,c)
           )
         }
      }
    }
  }

  // update board
  compose(
    addSafeSquares,
    addMines,
  )(game.board.squares)
  
  // call the normal sweep handler
  sweepHandler(game)(coordinate)()
}

export default firstSweepHandler
