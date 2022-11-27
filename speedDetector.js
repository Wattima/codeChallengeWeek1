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