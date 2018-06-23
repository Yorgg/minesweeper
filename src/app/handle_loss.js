const handleLoss = (game, clickedSquare) => {
  game.over = true

  // reveal all mines
  game.board.squares.forEach(r => { 
    r.forEach(s => { 
      if (s.type === "mine") {
        s.isSwept = true
      }
    })
  })

  // make background red, for exploded mine
  clickedSquare.classes.push("square-is-exploded")
}

export default handleLoss
