const updateSweptState = (coordinate, game) => {

  const squares = game.board.squares

  const recurse = (r,c) => {
    // out of bounds 
    if (squares[r] === undefined || squares[r][c] === undefined) {
      return 
    }

    const square = squares[r][c]

    // return if already swept
    if (square.isSwept) {
      return
    }

    square.isSwept   = true
    square.isFlagged = false
    game.remainingSweeps -= 1

    if (square.val > 0) {
      return 
    } else {
      recurse(r,c-1) 
      recurse(r,c+1) 
      recurse(r+1,c) 
      recurse(r+1,c-1)  
      recurse(r+1,c+1) 
      recurse(r-1,c) 
      recurse(r-1,c-1) 
      recurse(r-1,c+1) 
    }
  }

  return recurse(...coordinate)
}

export default updateSweptState
