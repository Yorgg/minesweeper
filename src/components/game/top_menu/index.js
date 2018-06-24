class TopMenu {

  constructor(onclick) {
    this.onclick = onclick
    this.games = [
      [ "easy",   {width: 9,  height: 9,  mines: 9}],
      [ "medium", {width: 19, height: 19, mines: 39}],
      [ "hard",    {width: 29, height: 89, mines: 199}],
    ]
  }

  render() {
    const el = document.createElement("div")
    el.classList.add("top-menu")

    const newGameSpan = (type, settings) => {
      const span = document.createElement("span") 
      span.innerHTML = type
      span.onclick = event => this.onclick(settings)
      return span
    }

    this.games.forEach(g => 
      el.append(
        newGameSpan(g[0], g[1])
      )
    )
    
    return el
  }
}

export default TopMenu
