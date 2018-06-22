function createMineCoordinates(firstSweep, maxMines, height, width)  {
  const mines  = []  
  const [r,c]  = firstSweep

  const exclusionZone = [
    `${r},${c}`,
    `${r-1},${c}`,
    `${r-1},${c-1}`,
    `${r-1},${c+1}`,
    `${r+1},${c}`,
    `${r+1},${c+1}`,
    `${r+1},${c-1}`,
    `${r},${c+1}`,
    `${r},${c-1}`,
  ]

  const isValidCoordinate = coordinate => 
    !mines.includes(coordinate) && 
    !exclusionZone.includes(coordinate)

  while (mines.length < maxMines) {
    const mr = Math.floor(Math.random()*height)
    const mc = Math.floor(Math.random()*width)
    const coordinate = `${mr},${mc}`

    if (isValidCoordinate(coordinate)) {
      mines.push(coordinate)
    }
  }
  return mines
}

export default createMineCoordinates
