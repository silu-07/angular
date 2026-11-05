let x = 10;

function test(a = x) {
  let x = 20;
  return () => {
    console.log(a, x);
  };
}

x = 30;

const result = test();

result();