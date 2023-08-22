class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.el.addEventListener("click", this.handleClick.bind(this));
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
    let square = e.target;
    if (square.classList.contains("square")) {
      this.makeMove(square);
    }
  }

  makeMove(square) {
    if (square.classList.contains("square")) {
      const data_pos = square.dataset.pos.split(",").map(parseFloat);
      console.log(data_pos);
      const mark = this.game.currentPlayer;
      this.game.playMove(data_pos);
      square.innerHTML = mark;
      square.classList.add(mark);
      this.handleGameOver();
    }
  }

  handleGameOver() {
    if(this.game.isOver()){
      //add new 
      const p = document.createElement("h2");
      if (this.game.winner()){
        p.innerHTML = `"You win ${this.game.winner()}!"`;
        const squares = document.querySelectorAll("." + this.game.winner());

        squares.forEach(el=> el.classList.add("winner"));
        console.log(squares);
        // squares.classList.add("winner");
      }else{
        p.innerHTML = "Tie"
        const squares = document.querySelectorAll(".square");
        squares.forEach(el => el.classList.add("tie"));
        
      }
      this.el.appendChild(p);
    }

  }
}

export default View;
