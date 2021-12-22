const UI_REFRESH_TIME = 400;
let refreshRateIsInitiated = false;
let gameOverReason = "I do not know :-) <- If you see this, it is a bug";

function setUiRefreshRate() {
  if (!refreshRateIsInitiated) {
    setInterval(refreshUiByIntervall, UI_REFRESH_TIME);
    refreshRateIsInitiated = true;
  }
}

function refreshUiByIntervall() {
  switch (direction) {
    case "up":
      turnUp();
      break;
    case "right":
      turnRight();
      break;
    case "down":
      turnDown();
      break;
    case "left":
      turnLeft();
      break;
  }
  checkOwnBite();
  refreshUi();
}

function refreshUi() {
  deleteGameMap();
  if (!gameOver) {
    showGameMap();
    calculateSnakeFields();
    setShowableSnakeTiles();
    setShowableSnakeHeadTile();
    setShowableFoodTile();
  } else {
    showGameOver();
  }
}

function showGameMap() {
  let body = document.getElementsByTagName("body")[0];
  let tileMap = document.createElement("div");
  tileMap.setAttribute("id", "tileMap");
  let tile;

  tileMap.setAttribute("class", "grid-container");

  for (let i = 0; i < GAME_SIZE * GAME_SIZE; i++) {
    tile = document.createElement("div");
    tile.setAttribute("id", String(i));
    tile.setAttribute("class", "tile");
    tileMap.appendChild(tile);
  }
  body.appendChild(tileMap);
}

function placeSnakeInGameMap() {
  setSnakeHeadTile(generateRandomTileId());
  setShowableSnakeHeadTile();
  setSnakeDirection();
  setShowableSnakeTiles(snakeTileIds);
}

function setSnakeDirection() {
  // 00 01 02 03 04 05
  // 06 07 08 09 10 11
  // 12 13 14 15 16 17
  // 18 19 20 21 22 23
  // 24 25 26 27 28 29
  // 30 31 32 33 34 35
}

function placeFoodInGameMap() {
  foodTileIds = generateRandomTileId();
  setShowableFoodTile(foodTileIds);
}

function showGameOver() {
  let message =
    "\nGAME OVER!" +
    "\nBecause: " +
    gameOverReason +
    "\nYou gained: " +
    snakeTileIds.length +
    " Point(s)";

  if (alert(message)) {
    /* Nothing*/
  } else {
    window.location.reload();
  }
  snakeTileIds = null;
}

function deleteGameMap() {
  document.getElementById("tileMap").remove();
}

function setShowableSnakeTiles() {
  let bodyStartIndex = 1;
  for (let i = bodyStartIndex; i < snakeTileIds.length; i++) {
    addAttributeToTile("snakeBodyTile", snakeTileIds[i]);
  }
}

function setShowableSnakeHeadTile() {
  addAttributeToTile("snakeHeadTile", getSnakeHeadTile());
}

function setShowableFoodTile() {
  addAttributeToTile("foodTile", foodTileIds);
}

function addAttributeToTile(newClassValue, tileId) {
  let tile = document.getElementById(tileId);
  let actualClassAttribute = tile.getAttribute("class");

  tile.setAttribute("class", actualClassAttribute + " " + newClassValue);
}
