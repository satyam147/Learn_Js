// Object Oriented Programming

/* class Desert {
    constructor(calories = 250) {
        console.log('Total calories ' + calories);
    }
}
const desert = new Desert(); */

// this variable and instance variable

/* class Desert {
    constructor(calories = 250) {
        this.calories = calories;
    }
}
const desert = new Desert(100);
console.log(desert.calories); */


// getter and setter

class Desert {
    constructor(calories = 250, ingredients = []) {
        this.calories = calories;
        this.ingredients = ingredients;
    }

    addingredient(name) { //setter
        this.ingredients.push(name);
    }

    getingredients() { //getter
        console.log(`There are ${this.ingredients} in this desert.`);
        // console.log('There are isn\'t ' + this.ingredients + ' in this desert.');
    }
}
/* const desert = new Desert(100);
desert.addingredient('milk');
desert.addingredient('Ice');
desert.getingredients(); */

// inheritance  
// super and local variables

class IceCream extends Desert {
    constructor(flavour, calories, ingredients) {
        super(calories, ingredients);
        this.flavour = flavour;
    }
}

const vanilla = new IceCream('vanilla', 300, ['milk', 'ice', 'cream']);
// vanilla.getingredients();

// Under the Hood

/* function IceCream2(flavour, calories) {
    this.flavour = flavour;
    this.calories - calories;
}

IceCream2.prototype.getIceCream = function() {
    console.log(`Flavour of the ice cream is ${this.flavour}.`);
}

const vanilla2 = new IceCream2('vanilla', 300);
vanilla2.getIceCream(); */

// static variables and methods

class IceCream3 extends Desert {
    constructor(flavour, calories, ingredients) {
        super(calories, ingredients);
        this.flavour = flavour;
    }

    static Status = true;

    static getStatus() {
        console.log(this.Status);
    }
}

const vanilla3 = new IceCream3('vanilla', 300, ['milk', 'ice', 'cream']);
// console.log(IceCream3.status);