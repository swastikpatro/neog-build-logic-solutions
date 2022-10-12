// Operators, Branching, Loops
// EASY
// 1
function addAll(arr) {
  return [...arr].reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  });
}

console.log(addAll([1, 2, 3, 4, 5]));
// */

// 2
const num = 9;

function isOdd(aNum) {
  return aNum % 2 === 1;
}

console.log(isOdd(num)); //true
// */

//

function maxNum(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return a;
  }
}
function minNum(a, b) {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  } else {
    return a;
  }
}

console.log(maxNum(129, 251)); // 251
console.log(minNum(129, 251)); // 129
// */

// 4
function findMin(numArr = []) {
  let min = Infinity;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < min) {
      min = numArr[i];
    }
  }
  return min;
}

function findMinSort(numArr = []) {
  const min = numArr.sort((a, b) => a - b)[0];
  return min;
}

console.log(findMin([35, 29, 46]));
console.log(findMinSort([35, 29, 46]));
// */

// 5
function findMax(numArr = []) {
  let max = -Infinity;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > max) {
      max = numArr[i];
    }
  }
  return max;
}

function findMaxSort(numArr = []) {
  const max = numArr.sort((a, b) => b - a)[0];
  return max;
}

console.log(findMax([35, 29, 46]));
console.log(findMaxSort([35, 29, 46]));
// */

// 6
const months = {
  Jan: 31,
  Feb: 28,
  Mar: 31,
  Apr: 30,
  May: 31,
  Jun: 30,
  Jul: 31,
  Aug: 31,
  Sep: 30,
  Oct: 31,
  Nov: 30,
  Dec: 31,
};

const input = 'february';

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1, word.length);
}

function calculateNumOfDays(monthName) {
  const loweredMonthName = capitalize(monthName.slice(0, 3).toLowerCase());
  return months[loweredMonthName] === 31;
}

console.log(calculateNumOfDays(input));
// */

// Intermediate

// 1
const myArr = [];
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    myArr[i - 1] = 'FizzBuzz';
  } else if (i % 3 === 0) {
    myArr[i - 1] = 'Fizz';
  } else if (i % 5 === 0) {
    myArr[i - 1] = 'Buzz';
  } else {
    myArr[i - 1] = i;
  }
}
console.log(myArr);

function createFizzBuzz() {
  const arr0to100 = Array.from({ length: 100 }, (v, i) => i + 1);
  const updatedArr0to100 = arr0to100.map((single) => {
    if (single % 5 === 0 && single % 3 === 0) {
      return 'FizzBuzz';
    } else if (single % 3 === 0) {
      return 'Fizz';
    } else if (single % 5 === 0) {
      return 'Buzz';
    } else {
      return single;
    }
  });

  return updatedArr0to100;
}

console.log(createFizzBuzz());
// */

// 2
let str = '';
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    str += '*';
  }
  str += '\n';
}

console.log(str);
// */

// 3
const tableOfInputNumber = 8;

for (let i = 1; i <= 12; i++) {
  console.log(`${tableOfInputNumber} x ${i} = ${tableOfInputNumber * i}`);
}
// */

// 4

const fiboArr = [0, 1];

for (let i = 2; i < 20; i++) {
  fiboArr[i] = fiboArr[i - 2] + fiboArr[i - 1];
}
console.log(fiboArr);

// */

// 5
const myNum = 5;

function calculateFact(num) {
  let acc = 1;
  for (let i = num; i > 1; i--) {
    acc = acc * i;
  }
  return acc;
}

console.log(calculateFact(myNum)); // 120
// */

// 6

const numberInput = 9;
let isPrime = true;

for (let i = 2; i < numberInput; i++) {
  if (numberInput % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${numberInput} is Prime`);
} else {
  console.log(`${numberInput} is not prime`);
}
// */

// 7

const dayInput = 'sat';
const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function isWeekDay(day) {
  const isDay = week.some((single) =>
    single.toLowerCase().includes(day.toLowerCase())
  );
  if (!isDay) {
    return 'Invalid';
  }
  const myWeekdays = [...week.slice(1, week.length - 1)].map((single) =>
    single.toLowerCase()
  );
  const isWeekday = myWeekdays.some((ele) => ele.startsWith(day));
  return isWeekday;
}

console.log(isWeekDay(dayInput)); // false;
// */
