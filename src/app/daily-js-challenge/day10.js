for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("A:", i);
    }, 0);

    Promise.resolve().then(() => {
        console.log("B:", i);
    });
}

console.log("C: Done");