// Initializing a 3D Array :-  
// Example code :-

// Create an empty 3D array
/*
let array3D = [
  [[1, 1, 1],[2, 2, 2]],
  [[3, 3, 3],[4, 4, 4]]
];
console.log(array3D);
*/

//Initializing a 3D Array
/*
let layers = 3;
let rows = 3;
let cols = 3;
let array3D = new Array(layers);

for (let i = 0; i < layers; i++) {
  array3D[i] = new Array(rows);
  for (let j = 0; j < rows; j++) {
    array3D[i][j] = new Array(cols).fill(0);
  }
}
console.log(array3D);
*/

//(or)
/*
let layers = 3;
let rows = 3;
let cols = 3;
let array3D = [];

for (let i = 0; i < layers; i++) {
  array3D[i] = [];
  for (let j = 0; j < rows; j++) {
    array3D[i][j] = [];
    for (let k = 0; k < cols; k++) {
      array3D[i][j][k] = 0;
    }
  }
}
console.log(array3D);
*/

// Accessing elements in 3D Array
let arr3D = [
  [[1, 2, 3],
  [4, 5, 6]],
  [[7, 8, 9],
  [10, 11, 12]]
];
let element = arr3D[1][0][2]; // layer-1 , row-0 , col-2
console.log(element); // 9

// (or) Modifying Elements in 3D Array
arr3D[0][1][2] = 99; // change value
console.log(arr3D[0][1][2]);
console.log(arr3D);

// (or) Iterating Over a 3D Array (Triple Loop)
for (let i = 0; i < arr3D.length; i++) {
  for (let j = 0; j < arr3D[i].length; j++) {
    for (let k = 0; k < arr3D[i][j].length; k++) {
      console.log(arr3D[i][j][k]);
    }
  }
}


