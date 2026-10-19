let arr = [2, 7, 11, 15];
let target = 9;

for (let i=0; i<=arr.length-1; i++) {
    for (let j=i+1; j<=arr.length-1; j++) {
        if (arr[i]+arr[j]===target){
            console.log([arr[i],arr[j]]);
        }
    }
}

// let arr = [2, 7, 11, 15];
// let target = 9;

// let map = {};

// for (let i = 0; i < arr.length; i++) {
//   let current = arr[i];
//   let needed = target - current;

//   if (map[needed] !== undefined) {
//     console.log([needed, current]);
//     break;
//   }

//   map[current] = i;
// }
// console.log(map);