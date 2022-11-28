/*
Student Grade Generator
Prompts user to input student marks and outputs
respective grade
*/
function gradeGenerator() {
  //declaration of student mark to be input by user
  let studentMark = prompt("Input student marks");
  //conditional statement to assign grade to respective ranges
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
    //Given input marks are not in the provided range of between 0 and 100 
    console.log("Invalid student mark");
  }
}
gradeGenerator();
