const colors = ["#FFFFFF", "#FF0000", "#00FF00", "#0000FF"];
var colorIdx = 0;

const instructions = document.querySelector("#instructions");

function toggleInstructions() {
  console.log("toggleInstructions");
  instructions.hidden = ! instructions.hidden;
};

function changeBackground(direction) {
  if (direction == "left") {
    colorIdx--;
    if (colorIdx < 0) {
      colorIdx = colors.length - 1;
    }
  } else if (direction == "right") {
    console.log("right");
    colorIdx = colorIdx + 1;
    if (colorIdx >= colors.length) {
      colorIdx = 0;
    }
  }
  console.log("colorIdx: ", colorIdx);
  document.body.bgColor = colors[colorIdx];
  console.log(document.body);
}

document.body.addEventListener("keydown", (evt) => {
  console.log("Got event: ", evt);
  if (evt.key == "h") {
    toggleInstructions();
  } else if (evt.key == "ArrowLeft") {
    changeBackground("left");
  } else if (evt.key == "ArrowRight") {
    changeBackground("right");
  }
});
