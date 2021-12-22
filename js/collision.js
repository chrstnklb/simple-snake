function checkTurnUpIsAllowed() {
  return getPlayerHeadAsInt() - GAME_SIZE >= 0;
}

function checkTurnRightIsAllowed() {
  return (getPlayerHeadAsInt() + 1) % GAME_SIZE !== 0;
}

function checkTurnDownIsAllowed() {
  return getPlayerHeadAsInt() < GAME_SIZE * GAME_SIZE - GAME_SIZE;
}

function checkTurnLeftIssAllowed() {
  return getPlayerHeadAsInt() % GAME_SIZE !== 0;
}

function foodIsNotReached() {
  return !foodTileIds.includes(getSnakeHeadTile());
}

function checkOwnBite() {
  if (
    isNotInitialSnake() &&
    snakeTileIds.slice(1).includes(getSnakeHeadTile())
  ) {
    deleteGameMap();
    gameOverReason = "You bite yourself.";
    showGameOver();
  }
}

function getSnakeHeadTile() {
  return snakeTileIds[0];
}

function setSnakeHeadTile(newTileId) {
  return (snakeTileIds[0] = newTileId);
}