const arr = [1, 2, 3];

arr.length = 5;
arr[4] = 10;

console.log(arr.length);
console.log(arr[3]);
console.log(3 in arr);
console.log(arr.map(x => x * 2));