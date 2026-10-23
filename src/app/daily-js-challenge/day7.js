console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Promise 1");
    })
    .then(() => {
        console.log("Promise 2");
    });

async function test() {
    console.log("Async 1");
    await Promise.resolve();
    console.log("Async 2");
}

test();

console.log("End");