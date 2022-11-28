// Speed Detector

//Declared function speedDetector
function speedDetector() {
  //declared a variable speed which is input by the user
  let speed = prompt("Input speed of car");
  // intiliazed a conditional if else if statement
  //if the speed defined by the prompt is less than or equal to 70
  if (speed <= 70) {
    console.log("Ok");
    //if the speed is greater than 70
  } else if (speed > 70) {
    //calculation of points
    //method to round points down to nearest integer as every 5 is equal to 1
    let points = Math.floor((speed - 70) / 5);
    if (points <= 12) {
      console.log(`Points:${points}`);
    } else if (points > 12) {
      console.log("License suspended");
    }
  }
}
console.log(speedDetector());
