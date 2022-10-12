// Numbers

// 1

function giveSum(a = 0, b = 0) {
  return a + b;
}

const input1 = 15;
const input2 = 12;
console.log(giveSum(input1, input2));
// */

// 2

function calculateSI(p, r, t) {
  return (p * r * t) / 100;
}

console.log(calculateSI(100, 6, 2));
// */

// 3

function calculateKE(m, v) {
  return 0.5 * m * v ** 2;
}

console.log(calculateKE(1000, 25)); // 312500
// */

// 4

function toCelsius(fahrenValue) {
  return (((fahrenValue - 32) * 5) / 9).toFixed(4);
}

console.log(toCelsius(56)); // 13.3333
// */

// 5

function areaOfSquare(a) {
  return a ** 2;
}
function perimeterOfSquare(a) {
  return a * 4;
}
function surfaceAreaOfSquare(a) {
  return 6 * areaOfSquare(a);
}
function volumeOfCube(a) {
  return a ** 3;
}

const side = 10;

console.log(areaOfSquare(side));
console.log(perimeterOfSquare(side));
console.log(surfaceAreaOfSquare(side));
console.log(volumeOfCube(side));
// */

// 6

function calculateProfitOrLoss(cp = 0, sp = 0) {
  if (cp <= 0 || sp <= 0) {
    return 'Invalid';
  }

  if (sp > cp) {
    // profit
    return `${sp - cp} Profit`;
  } else if (sp === cp) {
    // nothing
    return 'No Profit, no Loss.';
  } else {
    // loss
    return `${cp - sp} Loss`;
  }
}

const CP = 20;
const SP = 10;

console.log(calculateProfitOrLoss(CP, SP)); // 10 Loss
// */

// 7

function calcualateSumTill(num) {
  let sum = 0;
  for (let i = 1; i < num + 1; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(calcualateSumTill(100)); // 5050
// */

// 8

function logOutOddInDesc(n) {
  const oddNumsArr = [];
  let loopCount = 0;
  for (let i = 1; loopCount !== n; i += 2) {
    loopCount++;
    oddNumsArr.push(i);
  }
  for (let j = oddNumsArr.length - 1; j >= 0; j--) {
    console.log(oddNumsArr[j]);
  }
}

logOutOddInDesc(4);
// */

// 9

function sumOfStr(aStr) {
  const haslettersInStr = aStr
    .split('')
    .some((single) => isNaN(Number(single)));
  if (haslettersInStr) {
    return 'Invalid';
  }

  return aStr.split('').reduce((acc, curr) => {
    acc = acc + Number(curr);
    return acc;
  }, 0);
}

console.log(sumOfStr('1234'));
console.log(sumOfStr('1a234'));
// */

// 10

function reverseNum(num) {
  num = `${num}`.split('');
  for (let i = 0; i < num.length / 2; i++) {
    [num[i], num[num.length - 1 - i]] = [num[num.length - 1 - i], num[i]];
  }

  return Number(num.join(''));
}

console.log(reverseNum(32243));
// */

// 11

function rotateCyclically(num, rotations) {
  num = `${num}`;
  const toShowArr = new Array(num.length).fill(0);
  if (rotations > toShowArr.length) {
    rotations = rotations % toShowArr.length;
  }

  const numArr = num.split('');
  // console.log(numArr);

  for (let i = 0; i < numArr.length; i++) {
    if (!numArr[i - rotations]) {
      // console.log(numArr[i]);
      toShowArr[toShowArr.length - rotations + i] = numArr[i];
    } else {
      toShowArr[i - rotations] = numArr[i];
    }
  }
  return Number(toShowArr.join(''));
}

console.log(rotateCyclically(123456, 5)); //612345
console.log(rotateCyclically(123456, 11)); //612345
// */

// 12

function decimalToBinary(num) {
  let binaryNum = [];
  for (let i = num; Math.round(i) > 0; i = Math.trunc(i) / 2) {
    binaryNum.push(Math.floor(i % 2));
  }

  for (let j = binaryNum.length - 1; binaryNum[j] === 0; j++) {
    binaryNum.pop();
  }

  binaryNum = Number(binaryNum.reverse().join(''));
  return binaryNum;
}

console.log(decimalToBinary(155)); // 10011011
function convertSingleNumtoDeci(digit, myIndex) {
  return Number(digit) * 8 ** myIndex;
}

function sumAllVals(arr = []) {
  return arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0);
}

function octalToDecimal(num) {
  const numArr = `${num}`.split('');
  const allDecimalCodes = [];
  for (let i = 0; i < numArr.length; i++) {
    // console.log(numArr.length - i - 1);
    allDecimalCodes.push(
      convertSingleNumtoDeci(numArr[i], numArr.length - i - 1)
    );
  }

  return sumAllVals(allDecimalCodes);
}

console.log(octalToDecimal(2754)); // 1516
// */
