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



