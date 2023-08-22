import "./ttt.css";
import Game from "./ttt_node/game";
import View from "./ttt-view";

document.addEventListener("DOMContentLoaded", () => {
  // Your code here

  const game = new Game();
  const el = document.querySelector(".ttt");
  const view = new View(game, el);
  window.view = view;
});
