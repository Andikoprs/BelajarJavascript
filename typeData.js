let nama = "Jabbar jelek";
let jumlah = 99;
let boolean = true;
const matrix = ["Jabbar", "Diko", 99, true, 99];
let object = [
  {
    nama: "Jabbar doang", //properties
    jumlah: 100,
  },
  {
    nama: "Jabbar doang 2", //properties
    jumlah: 1002,
  },
];
// string, number, boolean, array, object
// var
nama = "Diko";
// console.log(object);
// console.log(matrix);

// for (let i = 0; i < 4; i++) {
//   console.log(matrix[i]);
// }

const nilai = matrix.find((eachMatrix, index) => {
  if (eachMatrix === 99) {
    return eachMatrix;
  }
});
console.log(nilai);

// for (const eachMatrix of matrix) {
//   console.log(eachMatrix);
// }

// const data = object.find((eachMatrix) => {});
// console.log(data);
