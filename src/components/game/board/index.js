export default class Board {
  constructor(board) {
    this.squares = board 
    this.node    = document.createElement("div")
  }

  render() {
    const node = this.node
    node.innerHTML = ""
    this.squares.forEach(row => {
      let rowEl = document.createElement("div")
			rowEl.classList.add("row")

      row.forEach(square => {
        rowEl.appendChild(square.render())
      })

      node.appendChild(rowEl)
    })

    return node
  }
}
