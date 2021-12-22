function isNotInitialSnake() {
  return snakeTileIds.length !== 1;
}

function calculateSnakeFields() {
  if (foodIsNotReached()) {
    if (isNotInitialSnake()) {
      snakeTileIds.pop();
    }
  } else {
    placeFoodInGameMap();
  }
}
