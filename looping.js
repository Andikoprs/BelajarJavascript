// for (let i = 1; i <= 15; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FezzzBuzzzz");
//   } else if (i % 5 == 0) {
//     console.log("Buzzz");
//   } else if (i % 3 == 0) {
//     console.log("Fezzz");
//   }
// }

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 5, 6, 7, 8];
const newArray = [];

array1.forEach((eachArray1) => {
  array2.filter((eachArray2) => {
    if (eachArray1 == eachArray2) newArray.push(eachArray1);
  });
});

console.log(newArray);
