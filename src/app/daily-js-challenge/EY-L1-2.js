const arr = [1, 2, 3, 4, 5, 6];

// Output - [1,2,3,7,4,6]

const index = arr.indexOf(3) + 1;

arr.splice(index, 0, 7);

arr.splice(arr.indexOf(5), 1);

console.log(arr)