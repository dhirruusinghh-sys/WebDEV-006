function willDoSomething(p,q, add){
    console.log("Doing Something");
    let m = p + 10;
let n = q + 10;

console.log(add(m , n));

}

function sum (a,b){
    let x = a  + 1;
    let y = b - 1;

    return x + y;
}


willDoSomething(5, 6, sum);

willDoSomething(5,6,(r,s) => {
    return r * s;
});
