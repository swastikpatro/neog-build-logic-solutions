// Functions
// Easy

// 1

function raisedTo(a, b) {
  if (b === 0 && a) {
    return 1;
  }
  return a ** b;
}

console.log(raisedTo(2, 5));
console.log(raisedTo(15, 0));
// */

// 2

const lengthOfHexagon = 10;

function calculateAreaHexa(len) {
  if (len <= 0) {
    return 'Invalid';
  }
  return (3 * Math.sqrt(3) * len ** 2 * 0.5).toFixed(2);
}

console.log(calculateAreaHexa(lengthOfHexagon));
// */

// 3

function countWords(sentence) {
  const arrOfWords = sentence.split(' ');
  return arrOfWords.length;
}

console.log(countWords('We are neoGrammers')); // 3
// */

// 4
function getMax(...num) {
  console.log(num);
  return Math.max(...num);
}

console.log(getMax(1, 2, 100, 4, 5));
// */

// 5
function getMin(...num) {
  console.log(num);
  return Math.min(...num);
}

console.log(getMin(1, 2, 100, 4, 5));
// */

// 6

function referenceAngle(singleAngle) {
  return singleAngle % 360 === 0 ? singleAngle : singleAngle % 360;
}

function isTriangle(allAnglesArr) {
  const sumOfAllAngles = allAnglesArr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  });

  return sumOfAllAngles === 180;
}

function checkScalene(anglesArr) {
  return [...new Set(anglesArr)].length === anglesArr.length;
}
function checkEquilateral(anglesArr) {
  return [...new Set(anglesArr)].length === 1;
}

function checkIsoceles(anglesArr) {
  return [...new Set(anglesArr)].length === anglesArr.length - 1;
}

function typeOfTriangle(...angles) {
  const allAngles = angles.map((singleAngle) => referenceAngle(singleAngle));
  if (!isTriangle(allAngles)) {
    return 'Not a triangle';
  }

  const isScalene = checkScalene(allAngles);
  const isEquilateral = checkEquilateral(allAngles);
  const isIsoceles = checkIsoceles(allAngles);

  if (isScalene) {
    return 'Scalene Triangle';
  } else if (isEquilateral) {
    return 'Equilateral Triangle';
  } else if (isIsoceles) {
    return 'Isoceles Triangle';
  }
}

console.log(typeOfTriangle(60, 420, 60));
// */

// Intermediate

// 1

function giveLength(arr = []) {
  return arr.length;
}

console.log(giveLength([5, 6, 7, 8, 2, 4, 1]));
console.log(giveLength([1, 5, 3, 7, 8]));
// */

// 2

function indexOf(arr = [], num) {
  let myIndex;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === num) {
      myIndex = j;
      break;
    }
  }

  return myIndex;
}

console.log(indexOf([1, 6, 3, 5, 8, 9], 3)); // 2
// */

//
function deleteAndPut(array, indexOfCurr, newEle) {
  array.splice(indexOfCurr, 1, newEle);
}

function replace(arr = [], oldNum, newNum) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oldNum) {
      deleteAndPut(arr, i, newNum);
    }
  }

  return arr;
}

function replace2(arr = [], old, newEle) {
  const strOfArr = arr.join(' ').replaceAll(old, newEle);
  return strOfArr.split(' ').map((single) => Number(single));
}

console.log(replace([1, 5, 3, 5, 6, 8], 5, 10)); // [1,10,3,10,6,8]
console.log(replace2([1, 5, 3, 5, 6, 8], 5, 10)); // [1,10,3,10,6,8]
// */

// 4

function mergeArray(arr1 = [], arr2 = []) {
  // const mergedArr = [...arr1, ...arr2];
  // const mergedArr = arr1.concat(arr2);
  const mergedArr = [...arr1];
  for (let i = 0; i < arr2.length; i++) {
    mergedArr.push(arr2[i]);
  }
  return mergedArr;
}

console.log(mergeArray([1, 3, 5], [2, 4, 6])); // [1, 3, 5, 2, 4, 6]
// */

// 5

function charAt(str, i) {
  return str[i];
}

console.log(charAt('neoGcamp', 4));
// */

// 6

function createDate(givenDate) {
  return {
    myDate: givenDate,
    time: new Date(
      ...givenDate
        .split('/')
        .map((single) => Number(single))
        .reverse()
    ).getTime(),
  };
}

function checkNearest(dateObj1, dateObj2) {
  if (dateObj1.time > dateObj2.time) {
    return dateObj2;
  } else {
    return dateObj1;
  }
}

function minDate(date1, date2) {
  const myDate1 = createDate(date1);
  const myDate2 = createDate(date2);

  if (myDate1.time === myDate2.time) {
    return 'Both the dates are same';
  }
  const earlyDate = checkNearest(myDate1, myDate2).myDate;
  return earlyDate;
}

console.log(minDate('02/01/2021', '02/01/2022')); //02/01/2021
// */

// Advanced

// 1

function getDistanceAwayStr(letter, distance) {
  return String.fromCharCode(letter.charCodeAt(0) + distance);
}

function encodeString(str, distanceDigit) {
  const arrUpdated = str
    .split('')
    .map((singleDigit) => getDistanceAwayStr(singleDigit, distanceDigit));

  return arrUpdated.join('');
}

console.log(encodeString('neogcamp', 2));
// */

// 2

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1, word.length);
}

function toSentenceCase(sentence) {
  const arrUpdatedCapitals = sentence
    .split(' ')
    .map((singleWord) => capitalize(singleWord));
  return arrUpdatedCapitals.join(' ');
}

console.log(toSentenceCase('we are neoGrammers')); // 'We Are NeoGrammers'
// */

// 3

function sortArray(arr = []) {
  const sortedArray = arr.sort((a, b) => a - b);
  return sortedArray;
}

function sortArray2(arr = []) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log(sortArray2([100, 83, 32, 9, 45, 61]));
console.log(sortArray2([10, 83, 32, 9, 45, 0]));
console.log(sortArray([100, 83, 32, 9, 45, 61]));
// */

// 4

String.prototype.splitReverseJoin = function (char) {
  return this.split(char).reverse().join(char);
};

function reverseCharactersOfWord(word) {
  const charArr = word.splitReverseJoin('').splitReverseJoin(' ');
  return charArr;
}

function reverseCharactersOfWord2(sentence) {
  const sent = sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''));
  return sent.join(' ');
}

console.log(reverseCharactersOfWord2('we are neoGrammers'));
console.log(reverseCharactersOfWord('we are neoGrammers'));
// */
