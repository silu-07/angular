const obj = {};

const a = { id: 1 };
const b = { id: 2 };

obj[a] = "JavaScript";
obj[b] = "Angular";

console.log(obj[a]);
console.log(obj[b]);
console.log(Object.keys(obj).length);