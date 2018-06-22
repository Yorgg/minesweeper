const updateSweptState = (coordinate, squares) => {
  const cache = []

  const recurse = (r,c) => {
    const coordinate = `${r},${c}`
    // out of bounds 
    if (squares[r] === undefined || squares[r][c] === undefined) {
      return
    }

    // return if already in cache
    if (cache.includes(coordinate)) {
      return
    }
    
    // update cache - to avoid infinite recursion
    cache.push(coordinate)

    const square = squares[r][c]

    // update visibility!
    square.isSwept = true

    // remove click handler
    // 

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

  recurse(...coordinate)
}

export default updateSweptState
