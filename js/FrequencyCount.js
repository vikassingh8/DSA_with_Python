let arr = [ "a", "b", "c", "a", "b", "d", "e", "e", "f" ];
let count = {};

for(let i=0; i<=arr.length-1; i++){
    if (count[arr[i]]){
        count[arr[i]]++;
    } else {
        count[arr[i]] = 1;
    }

}
// first non-repeating character
for (let key in count){
    if (count[key] === 1){
        console.log(key);
        break;
    }
}


