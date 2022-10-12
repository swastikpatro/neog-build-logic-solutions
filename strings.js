// Strings

// Easy

// 1

function convertToUppercase(aStr) {
  return aStr
    .split('')
    .map((single) => single.toUpperCase())
    .join('');
}

console.log(
  convertToUppercase('Hello this Is Swastik Patro. I am 22 years old!')
);
// */

// 2

function appendStr(str1, str2) {
  return `${str2}${str1}`;
}

const msg1 = 'Good';
const msg2 = 'Morning';

console.log(appendStr(msg1, msg2)); //MorningGood
// */

// 3

function countChars(aStr) {
  let count = 0;
  for (let i = 0; i < aStr.length; i++) {
    if (aStr[i] === ' ') continue;
    count++;
  }
  return count;
}

console.log(countChars('Hello this Is Swastik Patro. I am 22 years old!')); //38
// */

// 4

const strToNum = (aStr) => Number(aStr);

console.log(typeof strToNum('124'));
// */

// 5

function removeVowels(aStr) {
  const loweredStr = aStr.toLowerCase();
  const myVowels = ['a', 'e', 'i', 'o', 'u'];
  const myVowelsObj = myVowels.reduce((arr, curr) => {
    arr[curr] = true;
    return arr;
  }, {});
  // console.log(myVowelsObj);

  let removedVowelsStr = '';

  for (let i = 0; i < aStr.length; i++) {
    if (myVowelsObj[loweredStr[i]]) {
      continue;
    }
    removedVowelsStr += aStr[i];
  }

  return removedVowelsStr;
}

console.log(removeVowels('Hello, this Is Swastik Patro!')); // 'Hll, ths s Swstk Ptr!'
// */

// 6

function isAlphaNumeric2(aStr) {
  const hasNum = aStr.split('').some((letter) => Number(letter));
  return hasNum;
}
function isAlphaNumeric(aStr) {
  let hasNum = false;
  for (let i = 0; i < aStr.length; i++) {
    if (Number(aStr[i])) {
      hasNum = true;
      break;
    }
  }
  return hasNum;
}

console.log(isAlphaNumeric('batman@45'));
console.log(isAlphaNumeric2('batman@45'));
// */

// 7

function outputMsg(adjective, { myStr, myLength }) {
  return `${adjective} sentence is '${myStr}' which contains ${myLength} characters`;
}

function getLongAndSmallStr(...allStrs) {
  const strNameAndlengths = allStrs.reduce((acc, curr) => {
    acc.push({ myStr: curr, myLength: curr.length });
    return acc;
  }, []);

  const sorted = strNameAndlengths.sort((a, b) => b.myLength - a.myLength);
  return `${outputMsg('Longest', sorted[0])} & ${outputMsg(
    'Smallest',
    sorted[sorted.length - 1]
  )}.`;
}

console.log(
  getLongAndSmallStr(
    'this is sanskruti patro',
    'hii',
    'this is swastik',
    'I got a job'
  )
);
// */

// 8

function countVowelsAndConsonants(aStr) {
  const loweredStr = aStr.toLowerCase();
  const vowel = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  const countObj = {
    consonantsCount: 0,
    vowelsCount: 0,
  };

  for (let i = 0; i < loweredStr.length; i++) {
    if (vowel[loweredStr[i]]) {
      countObj.vowelsCount++;
    } else {
      countObj.consonantsCount++;
    }
  }

  return `Consonants count is ${countObj.consonantsCount} & Vowels count is ${countObj.vowelsCount}.`;
}

console.log(
  countVowelsAndConsonants('Hello this Is Swastik Patro. I am 22 years old!')
);
// */

// 9

function givesStrLength(aStr) {
  return aStr.length > 7 ? true : false;
}

console.log(givesStrLength('Hello this'));
console.log(givesStrLength('Hello'));
// */

// 10

function copySmallIntoBig(str1, str2) {
  if (str1.length >= str2.length) return `${str1} ${str2}`;
  else if (str2.length > str1.length) return `${str2} ${str1}`;
}

console.log(copySmallIntoBig('Hii, this is', 'swastik patro')); // 'swastik patro Hii, this is'
// */

// 11

function isPalindrome(aStr) {
  // console.log(aStr.length);
  // console.log(Math.trunc(aStr.length / 2 ));
  let stringIsPalindrome = true;
  for (let i = 0; i < Math.floor(aStr.length / 2); i++) {
    // console.log(aStr[i]);
    if (aStr[i] !== aStr[aStr.length - 1 - i]) {
      stringIsPalindrome = false;
      break;
    }
  }

  return stringIsPalindrome;
}

console.log(isPalindrome('121121')); // true
console.log(isPalindrome('hello')); // false
// */

// 12

function mySubstring(aStr, startIndex, endExcluded = aStr.length) {
  let substring = '';
  for (let i = startIndex; i < endExcluded; i++) {
    substring += aStr[i];
  }
  return substring;
}

console.log(mySubstring('Mozilla', 1, 3)); // 'oz'
console.log(mySubstring('Mozilla', 1)); // 'ozilla'
// */

// 12 (b)

function allSubsStrings2(aStr) {
  const substrings = [];
  for (let i = 0; i < aStr.length - 1; i++) {
    for (let j = i + 1; j < aStr.length; j++) {
      substrings.push(aStr.slice(i, j + 1));
    }

    // for(let k=i+1; k<aStr.length; k++) {
    //   if (substrings.some(single => single === aStr[i] + aStr[k])) {
    //     continue;
    //   }
    //   substrings.push(aStr[i] + aStr[k]);
    // }
  }
  return substrings;
}

console.log(allSubsStrings2('swastik'));
// */

// 13

function dateWithoutTime(aStr) {
  let returnStr = '';
  for (let i = 0; i < aStr.length; i++) {
    if (aStr[i] === ',') {
      break;
    }

    returnStr += aStr[i];
  }
  return returnStr;
}

console.log(dateWithoutTime('Wed April 15, 7pm')); // 'Wed April 15'
// */

// 14

function maskLast4Chars(aStr) {
  let maskedStr = '';
  for (let i = 0; i < aStr.length; i++) {
    if (i >= aStr.length - 4) {
      maskedStr += '#';
      continue;
    }
    maskedStr += aStr[i];
  }

  return {
    originalStr: aStr,
    maskedStr,
  };
}

console.log(maskLast4Chars('5565534276455423'));
// */

// 15

function capitalize1st6Chars(aStr, numOfChars = 6) {
  let updatedStr = '';
  aStr = aStr.toLowerCase();
  let count = -1;
  for (let i = 0; i < aStr.length; i++) {
    count++;
    if (aStr[i] === ' ') {
      count--;
      updatedStr += aStr[i];
      continue;
    }
    if (count <= numOfChars - 1) {
      console.log(count, aStr[i]);
      updatedStr += aStr[i].toUpperCase();
      continue;
    }
    updatedStr += aStr[i];
  }

  return updatedStr;
}

console.log(capitalize1st6Chars('tic tac toe is a fun Game'));
// */

// Advance

// 1

// Unicode Table https://unicode-table.com/en/#0041

function isUpper(letter) {
  const code = letter.charCodeAt(0);
  return code >= 65 && code <= 90;
}
function replaceAll(aStr, letterToRemove, letterToAdd) {
  let outputStr = '';
  for (let i = 0; i < aStr.length; i++) {
    if (aStr[i].toLowerCase() === letterToRemove.toLowerCase()) {
      if (isUpper(aStr[i])) {
        outputStr += letterToAdd.toUpperCase();
        continue;
      }
      outputStr += letterToAdd;
      continue;
    }
    outputStr += aStr[i];
  }

  return outputStr;
}

console.log(replaceAll('This is Swastik Patro', 'i', 'p')); // 'Thps ps Swastpk Patro'
console.log(replaceAll('This is Swastik Patro', 't', 'x')); // 'Xhis is Swasxik Paxro'
// */

// 2

function removeSpaces(aStr) {
  let removedSpaceStr = '';
  for (let i = 0; i < aStr.length; i++) {
    if (aStr[i] === ' ') {
      continue;
    }
    removedSpaceStr += aStr[i];
  }

  return removedSpaceStr;
}

console.log(removeSpaces('Hello this   is             Swastik patro       ')); // 'HellothisisSwastikpatro'
// */

// 3

function reverseWordsNotLetters(aStr) {
  const allWords = aStr.split(' ');

  for (let i = 0; i < Math.trunc(allWords.length / 2); i++) {
    [allWords[i], allWords[allWords.length - 1 - i]] = [
      allWords[allWords.length - 1 - i],
      allWords[i],
    ];
  }
  const reversedWordStr = allWords.join(' ');
  return reversedWordStr;
}

console.log(reverseWordsNotLetters('Welcome to NeoG Camp Swastik'));
// */

// 4

function isNotSpace([char]) {
  const code = char.charCodeAt(0);
  const UNICODEFORSPACE = 32;
  return code !== UNICODEFORSPACE;
}

function mostRepeatedChar2(aStr) {
  const countTable = {};
  aStr = aStr.toLowerCase();

  let removedSpaceStr = '';
  for (let i = 0; i < aStr.length; i++) {
    if (aStr[i] === ' ') {
      continue;
    }
    removedSpaceStr += aStr[i];
  }

  for (let j = 0; j < removedSpaceStr.length; j++) {
    if (countTable[removedSpaceStr[j]]) {
      countTable[removedSpaceStr[j]]++;
    } else {
      countTable[removedSpaceStr[j]] = 1;
    }
  }

  const countArr = Object.entries(countTable);
  const maxLetters = [];
  let maxNum = 0;
  for (let k = 0; k < countArr.length; k++) {
    if (maxNum < Number(countArr[k][1])) {
      maxNum = Number(countArr[k][1]);
    }
  }

  for (let x = 0; x < countArr.length; x++) {
    if (Number(countArr[x][1]) === maxNum) {
      maxLetters.push(countArr[x]);
    }
  }

  if (maxLetters.length > 1) {
    // console.log(maxLetters[0])
    let outputMsg = 'Characters \n';
    for (let y = 0; y < maxLetters.length; y++) {
      // console.log(maxLetters[y][0], maxLetters[y][1]);
      outputMsg += `'${maxLetters[y][0]}' is repeated ${maxLetters[y][1]} times\n`;
    }

    return outputMsg;
  } else {
    return `'${maxLetters[0][0]}' is repeated ${maxLetters[0][1]} times.`;
  }
}

function mostRepeatedChar(aStr) {
  const countTable = aStr
    .toLowerCase()
    .split('')
    .reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      if (curr === ' ') {
        acc[curr] = 0;
      }
      return acc;
    }, {});

  const sortedList = Object.entries(countTable).sort((a, b) => b[1] - a[1]);
  const maxCount = sortedList[0][1];
  const maxCountChars = sortedList
    .filter((single) => Number(single[1]) === maxCount)
    .map((single) => `'${single[0]}' is repeated ${single[1]} times`);
  return maxCountChars.length > 1
    ? `Characters \n ${maxCountChars.join('\n ')}.`
    : `Character ${maxCountChars[0]}.`;
}

console.log(mostRepeatedChar2('Hello,,,, This is SwasTik PaTro'));
// Characters
// ',' is repeated 4 times
// 's' is repeated 4 times
console.log(mostRepeatedChar2('Hello, This is SwasTik PaTro')); // 's' is repeated 4 times.
console.log(mostRepeatedChar('Hello, This is SwasTik PaTro')); // Character 's' is repeated 4 times.
console.log(mostRepeatedChar('Hello,,,, This is SwasTik PaTro'));
// Characters
// ',' is repeated 4 times
// 's' is repeated 4 times.
// */

// 5

const isOdd = (num) => num % 2;

function capitalizeAlternate(aStr) {
  let toggledStr = '';
  aStr = aStr.toLowerCase();
  let count = -1;
  for (let i = 0; i < aStr.length; i++) {
    count++;
    if (aStr[i] === ' ') {
      count--;
      toggledStr += aStr[i];
      continue;
    }
    if (isOdd(count)) {
      toggledStr += aStr[i].toUpperCase();
    } else {
      toggledStr += aStr[i];
    }
  }

  return toggledStr;
}

console.log(capitalizeAlternate('neogcamp')); // nEoGcAmP
console.log(capitalizeAlternate('good afternoon')); // gOoD aFtErNoOn
// */

// 6

function removeWordFromStr(aStr, word) {
  const wordsArr = aStr.toLowerCase().split(' ');
  const outputMsgArr = [];
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word.toLowerCase()) {
      continue;
    }
    outputMsgArr.push(wordsArr[i]);
  }

  return outputMsgArr.join(' ');
}

console.log(removeWordFromStr('how was your day?', 'how')); // was your day?
console.log(removeWordFromStr('programming camp are amazing', 'programming')); // camp are amazing
// */
