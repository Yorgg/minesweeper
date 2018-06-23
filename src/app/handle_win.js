const handleWin = game => {
  game.over = true
  game.board.squares.forEach(r => { 
    r.forEach(s => { 
      if (s.type === "mine") {
        s.isFlagged = true
      }
    })
  })
}

export default handleWin
