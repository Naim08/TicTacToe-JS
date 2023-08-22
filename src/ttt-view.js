class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
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

  handleClick(e) {}

  makeMove(square) {}

  handleGameOver() {}
}

export default View;
