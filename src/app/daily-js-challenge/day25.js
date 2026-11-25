console.log("A");

Promise.resolve()
    .then(() => {
        console.log("B");
        return Promise.resolve("C");
    })
    .then(console.log);

queueMicrotask(() => console.log("D"));

Promise.resolve()
    .then(() => console.log("E"));

console.log("F");