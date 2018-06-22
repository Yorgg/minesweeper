// import  from './handlers'
import Game from "./game.js"

// Initialize game and print to dom
export const initialize = () => {
  const game = new Game()
  game.render()
}



