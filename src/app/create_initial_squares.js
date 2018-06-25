
// game => coordinate => event => fnc
import firstSweepHandler from "./first_sweep_handler.js"
import InitialSquare from "./../components/game/components/board/components/initial_square"

function createInitialSquares(game,h,w) {
  const matrix = []

  for(let row_i=0; row_i<h; row_i++) {
    let row = []

    for(let col_i=0; col_i<w; col_i++) {
      const handler = firstSweepHandler(game)([row_i,col_i])
      row.push(new InitialSquare(handler))
    } 

    matrix.push(row)
  } 

  return matrix
}

export default createInitialSquares
