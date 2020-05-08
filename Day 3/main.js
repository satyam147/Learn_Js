// Day 3

// Operators | Decision | Looping Statements

//Operator Statements

// 1) Athematic
// + - * / % ++ -- 
/* arthematic();

function arthematic() {
     var a = 45;
     var b = 2;
     console.log(a % b);

    for (let i = 5; i > 0; i--) {
        console.log(i);
    }
} */


// 2) Relational
// > < >= <= == !=
/* relational();

function relational() {
    let a = 1;
    let b = 0;

    console.log(a != b);
} */

// 3) Logical
// &&  ||  !

/* logical();

function logical() {
    let a = true;
    let b = false;

    console.log(!b);
} */



// 4) Bitwise
// &  |  ^  ~  <<  >>  >>>
/* bit();

function bit() {
    let a3 = 00000011;
    let a7 = 00000111;
    console.log(a3 >>> 2);
} */

// 5) Assignment
// = += -= *= /=
/* assignment();

function assignment() {
    let factorial = 5;
    for (let i = 1; i <= 5; i++) {
        factorial /= i; //factorial = factorial + i;
    }
    console.log(factorial);
} */

// 6) Other
// - + ? :

/* other();

function other() {
        var a = 5;
        var b = -a;
        console.log(a);
        console.log(b);

     var body = 'Hai! ' + 'There ';
     var name = 5;
     console.log(body + name);
    var a = true;
    var b = false;

    b == false ? console.log('Is true') : console.log('Is false');
} */



//Decision Statements

// 1) if
/* if_state();

function if_state() {
    var a = 1;
    var b = 0;

    if (a < b) {
        console.log('Condition Satisfied');
    }
} */


// 2) else

/* else_state();

function else_state() {
    var a = 1;
    var b = 0;

    if (a < b) {
        console.log('Condition Satisfied');
    } else {
        console.log('Condition Not Satisfied');
    }
} */


// 3) if (else if)

/* else_if_state();

function else_if_state() {
    var a = 1;
    var b = 0;

    if (a < b) {
        console.log('Condition Satisfied');
    } else if (a > b) {
        console.log('Condition 2 Satisfied');
    }
} */

// 4) if (else if) else

/* else_if_else_state();

function else_if_else_state() {
    var a = 1;
    var b = undefined;

    if (a < b) {
        console.log('Condition Satisfied');
    } else if (a > b) {
        console.log('Condition 2 Satisfied');
    } else {
        console.log('Final Condition');
    }
}
 */

// 5) switch

/* switch_con();

function switch_con() {
    var name = 'd';

    switch (name) {
        case 'a':
            console.log('Case A');
            break;
        case 'b':
            console.log('Case B');
            break;
        case 'c':
            console.log('Case C');
            break;
        default:
            console.log('No Case Found');
    }
} */


// Looping Statements

// 1) Defined

// a) for 

/* for_loop();

function for_loop() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
} */


// b) for in 

/* let object = { 'name': 'your name', 'city': 'your city', 'state': 'your state' };

for (let property in object) {
    console.log(property + ': ' + object[property]);
}
 */

// c) for of 

/* let items = [10, 20, 30, 40, 50];
for (let item of items) {
    console.log(item);
} */


// 2) Un - Defined

// a) while 
/* var a = 7;
var factorial = 1; */

/* while (a == 1) {
    a--;
    console.log(factorial *= a);
} */

// b) do while

/* do {
    a--;
    console.log(factorial *= a);
} while (a == 1); */