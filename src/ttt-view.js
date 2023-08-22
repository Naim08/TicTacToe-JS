
class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.el.addEventListener("click",this.handleClick.bind(this));
  }

  // setup html view of board, 3X3 tictactoe board
  setupBoard() {
    let ul = document.createElement("ul");
    ul.classList.add("grid");

    for (let i = 0; i < 9; i++) {
      let li = document.createElement("li");
      li.classList.add("square");
      li.setAttribute("data-pos", [Math.floor(i / 3), i % 3]);
      ul.appendChild(li);
    }

    this.el.appendChild(ul);
  }

  handleClick(e) {
    // console.log(e.target);
    const li_ele = e.target;
    if (li_ele.classList.contains("square")){
      const data_pos = li_ele.dataset.pos.split(",").map(parseFloat);
      console.log(data_pos);
      this.game.playMove(data_pos);
    

    }
  }

  makeMove(square) {}

  handleGameOver() {}
}

export default View;
