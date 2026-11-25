const a = { value: 10 };
const b = { value: 10 };

const set = new Set([a, b, a]);

a.value = 20;

console.log(set.size);
console.log(set.has({ value: 20 }));
console.log(set.has(a));
console.log([...set][0].value);