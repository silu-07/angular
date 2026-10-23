console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

async function test() {
    console.log("D");
    await Promise.resolve();
    console.log("E");
}

test();

console.log("F");