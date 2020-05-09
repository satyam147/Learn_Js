// functions | Arrow Functions


// basic function
/* main();

function main() {
    console.log('Hello World');
} */


// 1) returning
/* 
returning();

function returning() {
    return 10;
}

var a = returning();
console.log(a);
 */


// 2) Parameterized

// a) normal
/* normal();

function normal(a, b) {
    return a + b;
}
var a = normal(5, 5);
console.log(a); */


// b) default parameters

/* defaults();

function defaults(a, b = 7) {
    return a + b;
}
var a = defaults(5);
console.log(a); */

// c) rest operator

/* restop(1, 2, 3, 4, 5, 6);

function restop(...parameters) {
    console.log(parameters);
}
 */


// 3) Construction

/* let name = new Function("a", "b", "return a*b;");

console.log(name(5, 8)); */

// 4) Recurssion

/* function factorial(num) {
    if (num <= 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5)); */


// 5) Anonymous

/* (function() {
    console.log('function');
})(); */


// 6) Arrow or lambda

// type 1
/* var test1 = (a, b, c) => {
    var x = c * b;
    var z = a * b;
    return a + b + c + z + x;
};

console.log(test1(1, 2, 3)); */


// type 2
/* var test2 = (a, b, c) => a + b + c;

console.log(test2(1, 2, 3)); */

//type 3

/* var test3 = a => a + 200;
console.log(test3(5)); */


// 7) Generatior

/* function* number() {
    let number = 1;
    while (true)
        yield number++;
}

var slno = number();

console.log(slno.next().value);
console.log(slno.next().value);
console.log(slno.next().value); */