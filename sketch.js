let cols = 3;
let rows = 3;
let w = 133.3;
let cells = [];
let playerTurn = true;

function setup() {
  createCanvas(400, 400);
  drawGrid();
}

function draw() {
  for (let cell of cells) {
    cell.show();
  }
  somebodyWon();
  takeActionAI();
}

function drawGrid() {
  background(255);
  stroke(0);
  noFill();
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      cells.push(new Cell(x, y, w, null));
    }
  }
}

function mousePressed() {
  if (playerTurn) { 
    for (let c = 0; c < cells.length; c++) {
      cell = cells[c];
      if (cell.shape == null) {
        if (mouseX <= cell.x*cell.w + cell.w && mouseX >= cell.x*cell.w) {
          if (mouseY <= cell.y*cell.w + cell.w && mouseY >= cell.y*cell.w) {
            if (playerTurn) {
              cell.shape = true;
              playerTurn = !playerTurn;
            }
          }
        }
      }
    }
  }
}
function somebodyWon() {
  /*
  0  1  2     012, 345, 678, 036, 147, 258, 048, 246
  3  4  5
  6  7  8
  */
  let n = 0;
  for (let cell of cells) {
    if (cell.shape != null) {
      n++;
    }
  }
  if (
(cells[0].shape == cells[1].shape && cells[1].shape != null && cells[1].shape == cells[2].shape) || (cells[3].shape == cells[4].shape && cells[4].shape != null && cells[4].shape == cells[5].shape) ||         (cells[6].shape == cells[7].shape && cells[7].shape != null && cells[7].shape == cells[8].shape) || (cells[0].shape == cells[3].shape && cells[3].shape != null && cells[3].shape == cells[6].shape) ||         (cells[1].shape == cells[4].shape && cells[4].shape != null && cells[4].shape == cells[7].shape) || (cells[2].shape == cells[5].shape && cells[5].shape != null && cells[5].shape == cells[8].shape) ||         (cells[0].shape == cells[4].shape && cells[4].shape != null && cells[4].shape == cells[8].shape) || (cells[2].shape == cells[4].shape && cells[4].shape != null && cells[4].shape == cells[6].shape)) {
    if (!playerTurn) {
      console.log("Win!");
      noLoop();
      }else {
      console.log("Lose!");
      noLoop();
    }    
  }else if (n == cells.length) {
    console.log("Draw!");
    noLoop();
  }
}
function takeActionAI() {
  if (!playerTurn) {
    let choices = [];
    for (let cell of cells) {
      if (cell.shape == null) {
        choices.push(cell);
      }
    }
    if (choices.length > 0) {
      let chosen = random(choices);
      chosen.shape = false;
      playerTurn = !playerTurn
    }
  }
}
