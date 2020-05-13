// Arrays || Intervals || TimeOuts


let arr = [1, 2, 3, 4, 5];

// console.log(arr[0]);

let arr1 = new Array(4);

arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
arr1[3] = 40;
arr1[4] = 40;

// console.log(arr1);

let arr2 = new Array(1, 2, 3, 4, 5, 6);
// console.log(arr2);

// array methods
// ----------------------

// concatenate

let arr3 = arr.concat(arr1);
// console.log(arr3);

// pop and push
// pop
let pop = arr3.pop();
/* console.log(pop);
console.log(arr3); */

//push

arr3.push(50);
// console.log(arr3);

// reverse

let rev = arr3.reverse();
// console.log(rev);


// to string

let string = arr3.toString();
// console.log(string);




// ########################################


// set Interval

let func1 = () => {
    console.log('This is function 1');
}

let func2 = () => {
    console.log('This is function 2');
}

// setInterval(func1, 1000);
// func2();

// set Timeout

/* setTimeout(func1, 3000);
func2(); */