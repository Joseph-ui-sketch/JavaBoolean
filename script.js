let a = false;
let b = false;

console.log("A is " + a);
console.log("B is " + b);

console.log("Not A is " + !a)
console.log("Not B is " + !b);

console.log("A and B is " + (a && b));
console.log("A or B is " + (a || b));

function test (x) {
    // console.log(x);

    let element = document.getElementById("result");
    x =+x;

    if (x === 1) {
        element.innerHTML = "You clicked Button 1"
    }
    if (x === 2) {
       element.innerHTML = "You clicked Button 2"
    }


}
