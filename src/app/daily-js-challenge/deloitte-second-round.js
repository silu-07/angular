console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve()

    .then(() => {

        console.log('3');

        setTimeout(() => console.log('4'), 0);

    })

    .then(() => console.log('5'));

queueMicrotask(() => console.log('6'));

(async () => {

    console.log('7');

    await null;

    console.log('8');

})();

console.log('9');