function turnUp() {
  if (checkTurnUpIsAllowed()) {
    snakeTileIds.unshift(String(getPlayerHeadAsInt() - GAME_SIZE));
  } else {
    setGameOverReasonBecauseOfDirection();
  }
}

function turnRight() {
  if (checkTurnRightIsAllowed()) {
    snakeTileIds.unshift(String(getPlayerHeadAsInt() + 1));
  } else {
    setGameOverReasonBecauseOfDirection();
  }
}

function turnDown() {
  if (checkTurnDownIsAllowed()) {
    snakeTileIds.unshift(String(getPlayerHeadAsInt() + GAME_SIZE));
  } else {
    setGameOverReasonBecauseOfDirection();
  }
}

function turnLeft() {
  if (checkTurnLeftIssAllowed()) {
    snakeTileIds.unshift(String(getPlayerHeadAsInt() - 1));
  } else {
    setGameOverReasonBecauseOfDirection();
  }
}

function setGameOverReasonBecauseOfDirection() {
  gameOverReason = "You left the game area. Stupid!";
  gameOver = true;
}
