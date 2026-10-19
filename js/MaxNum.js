// // find the maximum element.
// let arr = [10, 20, 30, 40, 50,2,88];

// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);


// Time  → O(n)
// Space → O(1)
   

// Best way



let arr = [10, 20, 7, 40, 25];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log(secondLargest); // 25




// other way



// Remove duplicates from the array
// let arr = [10, 20, 40, 40, 25, 20];

// let unique = [...new Set(arr)];

// unique.sort((a, b) => b - a);

// console.log(unique[1]); // 25

