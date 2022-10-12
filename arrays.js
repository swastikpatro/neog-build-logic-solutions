//  Arrays
// Easy
/* 1 */

function sumOfElements(arr = []) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumOfElements([10, 4, 5, 2, 5, 6, 9])); // 41

/* 2 */

function calculateAverage(arr = []) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return (sum / arr.length).toFixed(4);
}

console.log(calculateAverage([10, 4, 5, 2, 5, 6, 9])); // 5.8571

/* 3 */

function giveMaximumAndMinimum(arr = []) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return `Max is ${max} and min is ${min}`;
}
console.log(giveMaximumAndMinimum([10, 4, 5, 2, 5, 6, 9])); // Max is 10 and min is 2

/* 4 */

function sortArr(aArr = []) {
  for (let i = 0; i < aArr.length; i++) {
    for (let j = 0; j < aArr.length; j++) {
      if (aArr[i] > aArr[i + 1]) {
        [aArr[i], aArr[i + 1]] = [aArr[i + 1], aArr[i]];
      }
    }
  }

  return aArr;
}

function giveMedian(arr) {
  const myArr = sortArr(arr);
  // console.log(myArr);
  // console.log(myArr[Math.trunc(myArr.length / 2)]);
  // console.log(myArr[Math.trunc(myArr.length / 2) + 1]);
  if (myArr.length % 2) {
    // odd
    return myArr[(myArr.length + 1) / 2 - 1];
  } else {
    // even
    return (
      (myArr[Math.trunc(myArr.length / 2)] +
        myArr[Math.trunc(myArr.length / 2) + 1]) /
      2
    );
  }
}

console.log(giveMedian([3, 5, 2, 9, 4, 10, 15])); // 4
console.log(giveMedian([3, 5, 2, 9, 4, 10])); // 6.5

function giveMode(arr = []) {
  const countTable = arr.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});
  const maxCount = Math.max(...Object.values(countTable));
  const filterMode = Object.entries(countTable).filter(
    (single) => single[1] === maxCount
  );
  const modesStr = filterMode.map((single) => `'${single[0]}'`).join(', ');

  return filterMode.length > 1
    ? `Numbers ${modesStr} are modes.`
    : `Number ${modesStr} is the mode.`;
}

console.log(giveMode([3, 5, 2, 9, 4, 12, 3, 15, 5, 5, 3, 3, 5, 9, 9, 9])); // Numbers '3', '5', '9' are modes.
console.log(giveMode([3, 5, 2, 9, 4, 12, 3, 15, 5, 5, 5, 9, 9])); // Number '5' is the mode.

/* 5 */

function findSumOfAllElements(arr = []) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function sumOfBoth(arr1, arr2) {
  return findSumOfAllElements([
    findSumOfAllElements(arr1),
    findSumOfAllElements(arr2),
  ]);
}

console.log(sumOfBoth([3, 5, 2, 9, 4], [6, 2, 8, 1, 3])); // 43

/* 6 */

function isLetter(letter) {
  const code = letter.charCodeAt(0);
  return code > 96 && code < 123;
}

function numberOfConsonantsAndVowels(aStr) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let vowelCount = 0;
  let consonantCount = 0;
  let extrasCount = 0;
  aStr = aStr.toLowerCase();
  for (let i = 0; i < aStr.length; i++) {
    if (vowels[aStr[i]]) {
      vowelCount++;
    } else if (isLetter(aStr[i])) {
      consonantCount++;
    } else {
      // console.log(`'${aStr[i]}'`);
      extrasCount++;
    }
  }
  console.log(extrasCount);
  return `In the string, total vowels are ${vowelCount} & total consonants are ${consonantCount}.`;
}

console.log(numberOfConsonantsAndVowels('Hello this is swastik patro.')); //In the string, total vowels are 8 & total consonants are 15.

/* 7 */

function shiftRightBy(arr = [], shiftCount) {
  const myNewArr = new Array(arr.length).fill(0);
  if (shiftCount > arr.length) {
    shiftCount = shiftCount % arr.length;
  }

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i], i)
    if (!arr[i + shiftCount]) {
      myNewArr[i + shiftCount - arr.length] = arr[i];
      continue;
    }
    myNewArr[i + shiftCount] = arr[i];
  }
  return myNewArr;
}

console.log(shiftRightBy([10, 12, 31, 14, 55, 9, 6], 3)); // [ 55, 9, 6, 10, 12, 31, 14 ]
console.log(shiftRightBy([10, 12, 31, 14, 55, 9, 6], 10)); // [ 55, 9, 6, 10, 12, 31, 14 ]
console.log(shiftRightBy([10, 12, 31, 14, 55, 9, 6], 1)); // [ 6, 10, 12, 31, 14, 55, 9 ]

// Advanced
/* 1 */

function matrixAddn(matrixOne, matrixTwo) {
  const outputMatrix = new Array(matrixOne.length);

  for (let k = 0; k < matrixOne[0].length; k++) {
    outputMatrix[k] = new Array(matrixOne[0].length).fill(0);
  }

  for (let i = 0; i < outputMatrix.length; i++) {
    for (let j = 0; j < outputMatrix[i].length; j++) {
      outputMatrix[i][j] = matrixOne[i][j] + matrixTwo[i][j];
    }
  }
  return outputMatrix;
}

console.log(
  matrixAddn(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [10, 11, 12],
      [13, 14, 15],
      [16, 17, 18],
    ]
  )
);

// [ [ 11, 13, 15 ], [ 17, 19, 21 ], [ 23, 25, 27 ] ]

console.log(
  matrixAddn(
    [
      [1, 2],
      [4, 5],
    ],
    [
      [10, 11],
      [13, 14],
    ]
  )
);

// [ [ 11, 13 ], [ 17, 19 ] ]

/* 2 */

function giveTranspose(matrix) {
  const matrixClone = [...structuredClone(matrix)];

  for (let i = 0; i < matrixClone.length; i++) {
    for (let j = i; j < matrixClone[i].length; j++) {
      [matrixClone[i][j], matrixClone[j][i]] = [
        matrixClone[j][i],
        matrixClone[i][j],
      ];
    }
  }

  return matrixClone;
}

console.log(
  giveTranspose([
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 9, 12],
    [13, 14, 15, 16],
  ])
);

// [
//   [1, 4, 7, 13],
//   [2, 5, 8, 14],
//   [3, 6, 9, 15],
//   [10, 11, 12, 16],
// ];

console.log(
  giveTranspose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
// ];

console.log(
  giveTranspose([
    [1, 2],
    [4, 5],
  ])
);

// [
//   [1, 4],
//   [2, 5],
// ];

/* 3 */

function identityMatrix(n) {
  const identityMatrix = new Array(n);

  for (let i = 0; i < n; i++) {
    identityMatrix[i] = new Array(n).fill(0);
    identityMatrix[i][i] = 1;
  }

  return identityMatrix;
}

console.log(identityMatrix(5));
// [
//   [1, 0, 0, 0, 0],
//   [0, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1],
// ];

console.log(identityMatrix(2));
// [
//   [1, 0],
//   [0, 1],
// ];
