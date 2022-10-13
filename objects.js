// Objects and OOPS

// 1
// // i.
const studentDetails = [
  {
    roll: '1',
    name: 'Rohan Singh',
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },
  {
    roll: '2',
    name: 'Ritvik Patel',
    maths: 27,
    science: 30,
    english: 35,
    computer: 30,
  },
  {
    roll: '3',
    name: 'Neha Maurya',
    maths: 75,
    science: 69,
    english: 40,
    computer: 75,
  },
  {
    roll: '4',
    name: 'Mohit Verma',
    maths: 21,
    science: 31,
    english: 45,
    computer: 40,
  },
  {
    roll: '5',
    name: 'Karan Trivedi',
    maths: 70,
    science: 80,
    english: 35,
    computer: 60,
  },
  {
    roll: '6',
    name: 'Swastik',
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },
];

function studentsDataIncludingTotalMarks(studentsObj) {
  const studentsDataCloneWithTotal = [...structuredClone(studentsObj)];

  studentsDataCloneWithTotal.forEach((single) => {
    single['total'] =
      single.maths + single.science + single.english + single.computer;
  });
  studentsDataCloneWithTotal.forEach((single) => {
    single['total'] =
      single.maths + single.science + single.english + single.computer;
  });

  return studentsDataCloneWithTotal;
}

function showNameWithTotalMarks(studentsObj) {
  const studentsWithTotal = [
    ...structuredClone(studentsDataIncludingTotalMarks(studentsObj)),
  ];

  return studentsWithTotal
    .map(({ name, total }) => `Total marks obtained by ${name} is ${total}`)
    .join(',\n');
}

console.log(showNameWithTotalMarks(studentDetails));
// Total marks obtained by Rohan Singh is 336,
// Total marks obtained by Ritvik Patel is 122,
// Total marks obtained by Neha Maurya is 259,
// Total marks obtained by Mohit Verma is 137,
// Total marks obtained by Karan Trivedi is 245

// ii.

function showMostScorer(studentsObj) {
  const studentsWithTotal = [
    ...structuredClone(studentsDataIncludingTotalMarks(studentsObj)),
  ];

  const highestMarks = studentsWithTotal.sort((a, b) => b.total - a.total)[0]
    .total;
  const filterHighestScorers = studentsWithTotal
    .filter((single) => single.total === highestMarks)
    .map((single) => `${single.name} with total ${single.total} marks`);
  return filterHighestScorers.length > 1
    ? `Highest scores are: \n${filterHighestScorers.join(',\n')}.`
    : `Highest scored by ${filterHighestScorers[0]}`;
}

console.log(showMostScorer(studentDetails));
// Highest scores are:
// Rohan Singh with total 336 marks,
// Swastik with total 336 marks.

// iii.

function showLowestScorer(studentsObj) {
  const studentsWithTotal = [
    ...structuredClone(studentsDataIncludingTotalMarks(studentsObj)),
  ];

  const lowestMarks = studentsWithTotal.sort((a, b) => a.total - b.total)[0]
    .total;
  const filterLowestScorers = studentsWithTotal
    .filter((single) => single.total === lowestMarks)
    .map((single) => `${single.name} with total ${single.total} marks`);
  return filterLowestScorers.length > 1
    ? `Lowest scores are: \n${filterLowestScorers.join(',\n')}.`
    : `Lowest scored by ${filterLowestScorers[0]}`;
}
console.log(showLowestScorer(studentDetails)); // Lowest scored by Ritvik Patel with total 122 marks

// iv.

function getAvgCSMarksOfClass(studentsObj) {
  const studentsNoTotalClone = [...structuredClone(studentsObj)];
  const computerMarksArr = studentsNoTotalClone.map(({ computer }) => computer);
  const avgMarks = computerMarksArr.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
  return avgMarks;
}

console.log(getAvgCSMarksOfClass(studentDetails)); // 375

// v.

function getGrade(total, totalSubj) {
  const percent = ((total / (totalSubj * 100)) * 100).toFixed(2);
  let grade;
  // console.log(percent)

  if (percent >= 75) {
    grade = 'A';
  } else if (percent >= 60) {
    grade = 'B';
  } else if (percent >= 35) {
    grade = 'C';
  } else {
    grade = 'D';
  }
  return grade;
}

function printGradesOfEveryStudent(studentsObj) {
  const studentsWithTotal = [
    ...structuredClone(studentsDataIncludingTotalMarks(studentsObj)),
  ];

  studentsWithTotal.forEach(
    (single) => (single['grade'] = getGrade(single.total, 4))
  );

  const studentsWithTotalAndGrade = studentsWithTotal
    .map(({ name, grade }) => {
      return `${name} got '${grade}' grade`;
    })
    .join(',\n');

  return studentsWithTotalAndGrade;
}

console.log(printGradesOfEveryStudent(studentDetails));
console.log(studentDetails);

// vi.

function isPass(total, totalSubjs) {
  return (total / (totalSubjs * 100)) * 100 > 35;
}

function showPassedStudents(studentsObj) {
  const studentsWithTotal = [
    ...structuredClone(studentsDataIncludingTotalMarks(studentsObj)),
  ];
  const passedStudents = studentsWithTotal.filter(({ total }) =>
    isPass(total, 4)
  );
  const nameOfPassedStudentsArr = passedStudents.map(({ name }) => name);
  return `Total ${
    nameOfPassedStudentsArr.length
  } students passed namely: ${nameOfPassedStudentsArr.join(', ')}`;
}

console.log(showPassedStudents(studentDetails)); // Total 4 students passed namely: Rohan Singh, Neha Maurya, Karan Trivedi, Swastik
console.log(studentDetails);

// 2

class Employee {
  constructor(name, id, basicSalary, hra, allowances) {
    this.name = name;
    this.id = id;
    this.basic = basicSalary;
    this.extras = allowances + hra;
  }

  getSalary() {
    return this.basic + this.extras;
  }
}

const swastikObj = new Employee('swastik', 1, 500, 100, 50);
const sanskrutiObj = new Employee('sanskruti', 2, 1000, 50, 25);

console.log(swastikObj.getSalary()); // 650
console.log(sanskrutiObj.getSalary()); // 1075

/* 3 */

class BankAccount {
  constructor(name, accNo, balance, accType, ifsc) {
    this.name = name;
    this.accountNo = accNo;
    this.balance = balance;
    this.accType = accType;
    this.ifscCode = ifsc;
    this.getNameAndBalance = function () {
      return `${this.name} has a balance of Rs.${this.balance}`;
    };
    BankAccount.balanceInstancesArr.push(this.balance);
    BankAccount.showAllInstancesArr.push(`${this.name} has Rs.${this.balance}`);
  }
  static balanceInstancesArr = [];
  static showAllInstancesArr = [];
  static avgMoney() {
    let sum = 0;
    for (let i = 0; i < this.balanceInstancesArr.length; i++) {
      sum += this.balanceInstancesArr[i];
    }
    return sum / this.balanceInstancesArr.length;
  }

  static showAllInstances() {
    return this.showAllInstancesArr.join(',\n');
  }
}

const swastikAcc = new BankAccount(
  'swastik',
  2738823911112122,
  12000,
  'saving',
  4450
);
const sanskrutiAcc = new BankAccount(
  'sanskruti',
  2738823911112122,
  5000,
  'current',
  5500
);
const taliAcc = new BankAccount('tali', 2738823911112122, 1000, 'FD', 1120);

console.log(swastikAcc.getNameAndBalance()); // swastik has a balance of Rs.12000
console.log(swastikAcc.balance); // 12000
console.log(BankAccount.showAllInstances());
// swastik has Rs.12000,
// sanskruti has Rs.5000,
// tali has Rs.1000

console.log(BankAccount.avgMoney()); // 6000

/* 4 */

const cartItems = [
  {
    id: '101',
    name: 'Oreo',
    count: 2,
    price: 30.0,
    discount: 0.18,
  },
  {
    id: '102',
    name: 'Red Bull',
    count: 1,
    price: 99.0,
    discount: 0.15,
  },
  {
    id: '103',
    name: 'Dairy Milk Silk',
    count: 3,
    price: 175.0,
    discount: 0.05,
  },
  {
    id: '104',
    name: 'Pulse Candy Pack',
    count: 1,
    price: 135.0,
    discount: 0.2,
  },
];

// i

console.log(`There are ${cartItems.length} items in the cart.`);

// ii.

function valueOfCurrProduct(myCount, myPrice, myDiscount) {
  const totalPrice = myCount * myPrice;
  const totalValueAfterDiscount = totalPrice - totalPrice * myDiscount;
  return totalValueAfterDiscount;
}

function giveCartValue(cartData) {
  const valueOfAllProductsInCart = cartData.reduce(
    (acc, { count, price, discount }) => {
      acc += valueOfCurrProduct(count, price, discount);
      return acc;
    },
    0
  );
  return valueOfAllProductsInCart;
}

console.log(giveCartValue(cartItems)); // 740.1

// iii.

function discountAmount(myCount, myPrice, myDiscount) {
  return Number((myPrice * myDiscount * myCount).toFixed(2));
}

function totalValueDiscounted(cartData) {
  return cartData
    .map(({ count, price, discount }) => discountAmount(count, price, discount))
    .reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
}

console.log(totalValueDiscounted(cartItems)); // 78.9

// .iv

function totalTax(cartData) {
  return giveCartValue(cartData) * (18 / 100);
}
console.log(totalTax(cartItems)); // 133.28
