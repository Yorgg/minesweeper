import "./styles.scss"
import Game from "./../components/game"

export const initialize = () => {
  const containerNode = document.getElementsByTagName("body")[0]
  const game = new Game(containerNode)
  game.render()
}



