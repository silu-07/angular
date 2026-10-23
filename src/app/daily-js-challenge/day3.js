for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log("var:", i), 1000);
}

for (let j = 1; j <= 3; j++) {
    setTimeout(() => console.log("let:", j), 1000);
}

console.log("Done");