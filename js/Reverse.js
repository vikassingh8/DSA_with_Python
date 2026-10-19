

// let arr = [10, 20, 30, 40, 50];

// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//   let temp = arr[left];
//   arr[left] = arr[right];
//   arr[right] = temp;

//   left++;
//   right--;
// }

// console.log(arr);

let arr = [6, 5, 4, 3, 2, 1];

for (let i = 0; i < arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}
console.log(arr);