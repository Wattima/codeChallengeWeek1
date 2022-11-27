/*
Student Grade Generator
Prompts user to input student marks and outputs
respective grade
*/
let studentMark = prompt("Input student marks");
if (studentMark > 79 && studentMark <= 100) {
  console.log("A");
} else if (studentMark >= 60 && studentMark <= 79) {
  console.log("B");
} else if (studentMark > 49 && studentMark <= 59) {
  console.log("C");
} else if (studentMark >= 40 && studentMark <= 49) {
  console.log("D");
} else if (studentMark < 40) {
  console.log("E");
} else {
  console.log("Invalid student mark");
}

// Speed Detector
let speed = prompt("Input speed of car");
if (speed <= 70) {
  console.log("Ok");
} else if (speed > 70) {
  let points = (speed - 70) / 5;
  if (points <= 12) {
    console.log(`Points:${points}`);
  } else if (points > 12) {
    console.log("License suspended");
  }
}

// Net Salary Calculator
let preBasicSalary = prompt("Input basic salary");
let benefits = prompt("Input benefits");
let basicSalary = preBasicSalary - benefits;
//PAYE
if (basicSalary <= 24000) {
  paye = basicSalary / 10;
} else if (basicSalary >= 24001 && basicSalary <= 32333) {
  paye = basicSalary / 4;
} else if ((basicSalary > 32, 333)) {
  paye = (basicSalary * 3) / 10;
}
console.log(`Paye:${paye}`);

//NHIF deduction
if (basicSalary <= 5999) {
  deductionN = 150;
} else if (basicSalary >= 6000 && basicSalary <= 7999) {
  deductionN = 300;
} else if (basicSalary >= 8000 && basicSalary <= 11999) {
  deductionN = 400;
} else if (basicSalary >= 12000 && basicSalary <= 14999) {
  deductionN = 500;
} else if (basicSalary >= 15000 && basicSalary <= 19999) {
  deductionN = 600;
} else if (basicSalary >= 20000 && basicSalary <= 24999) {
  deductionN = 750;
} else if (basicSalary >= 25000 && basicSalary <= 29999) {
  deductionN = 850;
} else if (basicSalary >= 30000 && basicSalary <= 34999) {
  deductionN = 900;
} else if (basicSalary >= 35000 && basicSalary <= 39999) {
  deductionN = 950;
} else if (basicSalary >= 40000 && basicSalary <= 44999) {
  deductionN = 1000;
} else if (basicSalary >= 45000 && basicSalary <= 49999) {
  deductionN = 1100;
} else if (basicSalary >= 50000 && basicSalary <= 59999) {
  deductionN = 1200;
} else if (basicSalary >= 60000 && basicSalary <= 69999) {
  deductionN = 1300;
} else if (basicSalary >= 70000 && basicSalary <= 79999) {
  deductionN = 1400;
} else if (basicSalary >= 80000 && basicSalary <= 89999) {
  deductionN = 1500;
} else if (basicSalary >= 90000 && basicSalary <= 99999) {
  deductionN = 1600;
} else if (basicSalary >= 100000) {
  deductionN = 1700;
}
console.log(`NHIF:${deductionN}`);

//NSSF deductions
let nssf = (basicSalary * 6) / 100;
console.log(`NSSF:${nssf}`);

let netSalary = basicSalary - paye - deductionN;
console.log(`Net Salary:${netSalary}`);
