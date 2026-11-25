let x = 10;

function outer() {
    let x = 20;

    return function inner() {
        console.log(x);
        let x = 30;
    };
}

const fn = outer();
fn();