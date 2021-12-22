const GAME_SIZE = 16;

let gameOver = false;
let snakeTileIds = [];
let foodTileIds = [];

function initSnakeGame() {
  showGameMap();
  placeSnakeInGameMap();
  placeFoodInGameMap();
  setUiRefreshRate();
}