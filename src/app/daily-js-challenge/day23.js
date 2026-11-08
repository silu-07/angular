const obj = {
    a: undefined,
    b: null,
    c: 0
};

const {
    a = 10,
    b = 20,
    c = 30,
    d = 40
} = obj;

console.log(a, b, c, d);