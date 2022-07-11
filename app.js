//PSEUDOCODE: array of random values.
//sorted version of that array

let arraySize = 40;
let min = 1;
let max = 300;

let array = [arraySize];
let sortedArray = [arraySize];

generateArray();

function generateArray() {
    for (let i = 0; i < arraySize; i++) {
        array[i] = generateArrayValue(min, max);

        if (array[i] == array [i - 1]) {
          array[i] = generateArrayValue(max,min);
        }
    }
}

function generateArrayValue() {
  return Math.floor(Math.random() * (max - min) + min);
}

function bubbleSort() {
  sortedArray = Array.from(array)
  for (let i = 0; i < arraySize; i++) {
    for (let j = 0; j < arraySize - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }
  return sortedArray;
}

bubbleSort()


function selectionSort() {
  sortedArray = Array.from(array)
  for (let i = 0; i < arraySize; i++) {
    let lowest = i;
    for (let j = i + 1; j < arraySize; j++) {
      if (sortedArray[j] < sortedArray[lowest]) {
        lowest = j;
      }
    }
    if(i !==lowest) {
      let temp = sortedArray[i];
      sortedArray[i] = sortedArray[lowest];
      sortedArray[lowest] = temp;
    }
  }
  
  return sortedArray;
}

selectionSort();

function insertionSort() {
  sortedArray = Array.from(array)
  for (let i = 1; i < arraySize; i++) {
    let currentValue = sortedArray[i];
    let j;
    for (j = i - 1; j >= 0 && sortedArray[j] > currentValue; j--) {
      sortedArray[j + 1] = sortedArray[j]
    }
    sortedArray[j + 1] = currentValue
  }
  return sortedArray
}

insertionSort();



