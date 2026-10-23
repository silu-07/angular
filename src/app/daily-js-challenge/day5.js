function outer() {
    let x = 10;
    return function inner() {
        x += 5;
        console.log(x);

    };
}

const fn1 = outer();
const fn2 = outer();

fn1();
fn1();
fn2();
fn1();
fn2();