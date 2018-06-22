function nearbyMineCount(board,r,c) {
  let count = 0

  const increment = (r,c) => { 
    if ((board[r] !== undefined && board[r][c] !== undefined) && board[r][c].type === "mine") {
      count += 1
    }
  }

  increment(r-1,c)
  increment(r-1, c+1) 
  increment(r-1, c-1) 
  increment(r+1, c-1) 
  increment(r+1, c+1) 
  increment(r+1, c, ) 
  increment(r,   c-1) 
  increment(r,   c+1) 

  return count
}

export default nearbyMineCount
