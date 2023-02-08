// const data = [1, 2, 3, 1, 3, 4, 5, 4];
// const uniqueArray = [];

// data.forEach((eachData1) => {
//   const isExist = uniqueArray.includes(eachData1);
//   if (!isExist) uniqueArray.push(eachData1);
// });

// console.log(uniqueArray);

const userNames = ["diko", "tya", "jabbar", "tya"];
const allName = [];
// console.log(userNames.indexOf('diko'))
// userNames[0] = 'tyo'
// console.log(userNames);

// create
// userNames.push('hafizh')

// function addName(name) {
//   userNames.push(name)
// }
// addName('hafizh')
// console.log(userNames);

//update
// oldName jabbar
// newName jabbar2
// expected array

// function editName(oldName, newName) {
//   const x = userNames.indexOf(oldName, newName);
//   userNames[x] = newName;
// }
// editName("diko", "ali");
// console.log(userNames);

// editName("jabbar", "malik");
// editName("tya", "putri");
// console.log(userNames);

const numbers = [100, 2, 3, 9, 4, 5];
// return higest and lowest number
// expected. [2,100]
//[genap], [ganjil]
let lowNumber;
let highNumber;
const result = [];
const genap = [];
const ganjil = [];

numbers.forEach((eachNumber) => {
  if (eachNumber % 2 == 0) {
    genap.push(eachNumber);
  } else ganjil.push(eachNumber);
});
//sort

console.log(
  genap.sort((a, b) => {
    return b - a;
  })
);
console.log(
  ganjil.sort((a, b) => {
    return b - a;
  })
);

numbers.forEach((element) => {
  if (lowNumber > element) {
    lowNumber = element;
  }
  if (!lowNumber) lowNumber = element;
  result[0] = lowNumber;
  if (highNumber < element) {
    highNumber = element;
  }
  if (!highNumber) highNumber = element;
  result[1] = highNumber;
});
console.log(result);
