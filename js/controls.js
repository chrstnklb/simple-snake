let direction;

document.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 38:
      direction = "up";
      break;
    case 39:
      direction = "right";
      break;
    case 40:
      direction = "down";
      break;
    case 37:
      direction = "left";
      break;
  }
  refreshUiByIntervall();
});