// Objects  || Arrays || Intervals || TimeOuts


// Objects 4types

// object is a key value pair


// a) Initialization

/* let user = {
    id: 15,
    name: "User Name",
    msg: function() {
        return 'Hello! My Name is ' + this.name;
    },
    tech: ['Web', 'AI'],
    works: function() {
        var works = '';
        for (let te of this.tech) {
            works = works + ' ' + te;
        }
        return works;
    }
}

// console.log(user.tech[0]);

// console.log(user.works());

console.log(user.msg() + ' Works on' + user.works()); */


// b) Constructor

/* let laptop = new Object();

laptop.brand = "Dell";
laptop.cores = 8;

console.log(laptop); */


// c) create

/* 
const occupation = {
    type: 'none',
    displayType: function() {
        console.log(this.type);
    }
}

let user = Object.create(occupation);
user.type = 'User Type';
user.displayType() */


// d) assign
// -------------------------------

// a) cloning

/* let user = {
    name: 'User Name',
    age: 00,
}

let user2 = {};

user2 = Object.assign({}, user);
user2.name = "User Name 2";

console.log(user);
console.log(user2); */



// b) appending

/* let user = {
    name: 'User Name',
    age: 00,
}

let skills = {
    languages: "Php, Java Script",
}


user = Object.assign({}, user, skills);

console.log(user); */




// c) merging

/* let user = {
    name: 'User Name',
    age: 00,
}

let skills = {
    languages: "Php, Java Script",
}

console.log(user);

user = Object.assign(user, user, skills);

console.log(user); */


// delete
// -----------------

/* let obj = new Object();

obj.a = "a object";
obj.b = "b object";

console.log(obj);
delete obj.a;
console.log(obj); */


// comparison

/* let a = 1;
let b = 1;

console.log(a == b); */

/* 
let obj1 = */


//deconstruction

/* let student = new Object();
student.name = "Student Name";
student.classe = "Student class";

let { name, classe } = student;

console.log(name, classe); */