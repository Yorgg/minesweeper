export default class Square { 
  render() {
    const el = document.createElement("div")
    let classes
     
    if (this.isSwept) {
      classes = ["square", ...this.classes]
      el.onclick  = null

    } else {
      classes = ["square", "square--not-swept"]

      // leftclick
      el.onclick = this.sweepHandler

      // rightclick
      el.addEventListener("contextmenu", event => {
        console.log(event)
        if (event.which === 3) { 
          this.flagHandler(event)
          return false
        }
         
      }, false)
    }
    
    // add base classes
    classes.forEach(c => el.classList.add(c))

    // add flag class
    if (this.isFlagged) {
      el.classList.add("square--flagged")
    }

    return el
  }
}
