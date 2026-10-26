const a = [1, 2, 3];
const b = a;

b.push(4);

const c = [...a];
c.push(5);

console.log("A:", a);
console.log("B:", b);
console.log("C:", c);

console.log(a === b);
console.log(a === c);