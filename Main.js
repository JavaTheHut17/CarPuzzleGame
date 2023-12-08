//Cars
let A, B, C, D, E, F, G, H, I, J, K, X;
//Trucks
let O, P, Q, R;
//Bricks
let bricks;

//Letters Array
let CarsTrucksArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "X",
  "O",
  "P",
  "Q",
  "R",
];
let CarsTrucksArraytoString;
let test;

//Board
let RH = [];
//Solutions
let RHsol = [];
let RHsolString;
//Input
let RH1 = [];

//Button
let button;
//Nums                                                To Change Game increment nums1 num2
let num1 = 1;
let num2 = 2;

//Problems output
let inputString = RH1.toString();
let outputArray = [];

//Solutions output
let currentChar;
let movementCommands;

//preload
function preload() {
  RH = loadStrings("node_modules/p5/lib/rh-1.txt");
  RHsol = loadStrings("node_modules/p5/lib/rh_sol-1.txt");
}

function setup() {
  new Canvas(1000, 1000);

  console.log(num1, num2);

  //Board
  board();

  //Cars & Trucks
  A = new Group();
  //A = new Sprite();
  A.w = 50;
  A.h = 50;
  A.layer = 2;
  //A.rotation = 90;
  A.collider = "none";
  A.tile = "A";
  A.colour = "Green";

  B = new Group();
  //B = new Sprite();
  B.w = 50;
  B.h = 50;
  B.layer = 2;
  B.rotation = 0;
  B.collider = "none";
  B.tile = "B";
  B.colour = "Blue";

  C = new Group();
  //C = new Sprite();
  C.w = 50;
  C.h = 50;
  C.layer = 2;
  //C.rotation = 90;
  C.collider = "none";
  C.tile = "C";
  C.colour = "Purple";

  D = new Group();
  //C = new Sprite();
  D.w = 50;
  D.h = 50;
  D.layer = 2;
  D.rotation = 90;
  D.collider = "none";
  D.tile = "D";
  D.colour = "vilot";

  E = new Group();
  //C = new Sprite();
  E.w = 50;
  E.h = 50;
  E.layer = 2;
  E.rotation = 90;
  E.collider = "none";
  E.tile = "E";
  E.colour = "Aqua";

  F = new Group();
  //C = new Sprite();
  F.w = 50;
  F.h = 50;
  F.layer = 2;
  F.rotation = 90;
  F.collider = "none";
  F.tile = "F";
  F.colour = "blue";

  G = new Group();
  //C = new Sprite();
  G.w = 50;
  G.h = 50;
  G.layer = 2;
  G.rotation = 90;
  G.collider = "none";
  G.tile = "G";
  G.colour = "Orange";

  H = new Group();
  //C = new Sprite();
  H.w = 50;
  H.h = 50;
  H.layer = 2;
  // H.rotation = 90;
  H.collider = "none";
  H.tile = "H";
  H.colour = "Orange";

  I = new Group();
  //C = new Sprite();
  I.w = 50;
  I.h = 50;
  I.layer = 2;
  // H.rotation = 90;
  I.collider = "none";
  I.tile = "I";
  I.colour = "Orange";

  J = new Group();
  //C = new Sprite();
  J.w = 50;
  J.h = 50;
  J.layer = 2;
  // H.rotation = 90;
  J.collider = "none";
  J.tile = "J";
  J.colour = "Orange";

  K = new Group();
  //C = new Sprite();
  K.w = 50;
  K.h = 50;
  K.layer = 2;
  // H.rotation = 90;
  K.collider = "none";
  K.tile = "K";
  K.colour = "Orange";

  O = new Group();
  //O = new Sprite();
  O.w = 50;
  O.h = 50;
  O.layer = 2;
  //O.rotation = 0;
  O.collider = "none";
  O.tile = "O";
  O.colour = "black";

  R = new Group();
  // R = new Sprite();
  R.w = 50;
  R.h = 50;
  R.layer = 2;
  R.rotation = 90;
  R.collider = "none";
  R.tile = "R";
  R.colour = "Black";

  P = new Group();
  // P = new Sprite();
  P.w = 50;
  P.h = 50;
  P.layer = 2;
  P.rotation = 0;
  P.collider = "none";
  P.tile = "P";
  P.colour = "Yellow";

  Q = new Group();
  // Q = new Sprite();
  Q.w = 50;
  Q.h = 50;
  Q.layer = 2;
  Q.rotation = 0;
  Q.collider = "none";
  Q.tile = "Q";
  Q.colour = "Pink";

  X = new Group();
  // X = new Sprite();
  X.w = 50;
  X.h = 50;
  X.layer = 2;
  X.rotation = 90;
  X.collider = "none";
  X.tile = "X";
  X.colour = "Red";

  //String selection from array (Problems)
  RH1 = RH.slice(num1, num2);
  inputString = RH1.toString();
  console.log(RH1);
  for (let i = 0; i < inputString.length; i += 6) {
    outputArray.push(inputString.slice(i, i + 6));
  }

  //String selection from array (Solutions)
  RHsolString = RHsol.slice(num1, num2);

  movementCommands = RHsolString;

  console.log(RHsolString);

  //backing tiles
  gameBoard = new Tiles(outputArray, 350, 350, A.w, A.h + 1);
}

function Movelogic() {
  //iterate through loop
  for (let i = 0; i < movementCommands.length; i++) {
    currentChar = movementCommands[i];
  }

  movementCommands = RHsolString.toString();
  //CarsTrucksArraytoString = CarsTrucksArray.toString();

  //Move Logic
  for (let i = 0; i < movementCommands.length; i++) {
    for (let j = 0; j < CarsTrucksArray.length; j++) {
      let usedChars = [];
      //R1
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "R" &&
        currentChar[i + 2] == 1
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        async function move2() {
          await testvar.move(50, "Right");
        }
        move2();
      }

      //R2
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "R" &&
        currentChar[i + 2] == 2
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        testvar.move(100, "Right");
      }
      //R3
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "R" &&
        currentChar[i + 2] == 3
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        testvar.move(150, "Right");
      } //R5
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "R" &&
        currentChar[i + 2] == 5
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        async function move2() {
          await delay(1100);
          await testvar.move(250, "Right");
        }
        move2();
      }
      //R6
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "R" &&
        currentChar[i + 2] == 6
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        async function move2() {
          await delay(1100);
          await testvar.move(300, "Right");
        }
        move2();
      }
      //Left
      //L1
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "L" &&
        currentChar[i + 2] == 1
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        testvar.move(50, "Left");
      }
      //L2
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "L" &&
        currentChar[i + 2] == 2
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        testvar.move(100, "Left");
      }

      //L3
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "L" &&
        currentChar[i + 2] == 3
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        testvar.move(150, "Left");
      }
      //Up
      //U1
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "U" &&
        currentChar[i + 2] == 1
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        testvar.move(50, "up");
      }
      //U2
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "U" &&
        currentChar[i + 2] == 2
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        testvar.move(100, "up");
      }
      //U3
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "U" &&
        currentChar[i + 2] == 3
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        testvar.move(150, "up");
      }
      //D1
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "D" &&
        currentChar[i + 2] == 1
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        testvar.move(50, "down");
      }
      //D2
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "D" &&
        currentChar[i + 2] == 2
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        testvar.move(102, "down");
      }
      //D3
      if (
        CarsTrucksArray[j] != usedChars[i] &&
        currentChar[i] == CarsTrucksArray[j] &&
        currentChar[i + 1] == "D" &&
        currentChar[i + 2] == 3
      ) {
        const test = CarsTrucksArray[j];
        let testvar = eval(test);
        usedChars.push(CarsTrucksArray[j]);
        testvar.move(153, "down");
      }
    }
  }
}

//Inc Number func
function IncNums() {
  num1++;
  num2++;
  redraw(1);
}

function draw() {
  background("gray");

  button = createButton("Next Game");
  button.position(200, 200);
  button.mousePressed(IncNums);

  button = createButton("Solve");
  button.position(400, 200);
  button.size(80);
  button.mousePressed(Movelogic);

  // strokeWeight(1);
  // stroke(255, 0, 0);
  // textSize(20);
  // text(mouseX + " X " + mouseY + " Y ", 20, 20);
}

function board() {
  //Board and base tiles
  bricks = new Group();
  bricks.h = 50;
  bricks.w = 50;
  bricks.tile = "=";
  bricks.layer = 1;
  bricks.colour = "white";
  bricks.collider = "static";

  RHBoard1 = new Tiles(
    ["======", "======", "======", "======", "======", "======"],
    350,
    350,
    bricks.h,
    bricks.w + 1
  );
}
