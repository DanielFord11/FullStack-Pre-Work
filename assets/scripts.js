var shape = "circle";
var shapes = ["triangle", "square", "pentagon", "circle"];

var topics = ["HTML, CSS, Git, JavaScript"];
var topic = "HTML";

var studentInfo = ["Lu", 54, true];


if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}

console.log(topics);

console.log(topic);

console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);

for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
   }