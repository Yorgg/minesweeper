const flagHandler = game => coordinate => event => {
  event.preventDefault()
  const [r,c] = coordinate
  const square = game.board.squares[r][c]
  square.isFlagged = !square.isFlagged
  game.board.render()
}

export default flagHandler
