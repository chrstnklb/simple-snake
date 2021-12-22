function generateRandomTileId() {
  return String(Math.floor(Math.random() * (GAME_SIZE * GAME_SIZE - 1)));
}

function getPlayerHeadAsInt() {
  return parseInt(getSnakeHeadTile());
}
