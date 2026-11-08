function test() {
    try {
        return 10;
    } finally {
        return 20;
    }
}

console.log(test());