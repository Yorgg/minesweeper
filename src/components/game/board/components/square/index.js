export default class Square { 
  render() {
    const el = document.createElement("div")
    let classes
     
    if (this.isSwept) {
      classes = ["square", ...this.classes]
      el.onclick  = null
    } else {
      classes = ["square", "square--not-swept"]
      el.onclick  = this.sweepHandler
    }
    
    // add classes
    classes.forEach(c => el.classList.add(c))

    return el
  }
}
