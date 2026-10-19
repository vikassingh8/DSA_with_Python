let arr = [1, 2, 2, 2, 3];
let count = {};       // new Map()  // new Set()  
for (let i=0; i <= arr.length-1; i++) {
    if (count[arr[i]]){
        count[arr[i]]++;
    } else {
        count[arr[i]] = 1;
    }


}

console.log(count);