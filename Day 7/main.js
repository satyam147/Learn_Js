// Advanced Array (Maps and Methods)

// Map list of iterable objects


let employee1 = {
    name: 'Name1',
    position: 'Position1',
    salary: 10000,
}

let employee2 = {
    name: "Name2",
    position: "Position2",
    salary: 20000
}

let employee3 = {
    name: "Name3",
    position: "Position3",
    salary: 30000
}

let employee4 = {
    name: "Name4",
    position: "Position4",
    salary: 40000
}

let employee5 = {
    name: "Name5",
    position: "Position5",
    salary: 50000
}

let employee6 = {
    name: "Name6",
    position: "Position6",
    salary: 60000
}

let employee7 = {
    name: "Name7",
    position: "Position7",
    salary: 70000
}

let employee8 = {
    name: "Name8",
    position: "Position8",
    salary: 80000
}

let employee9 = {
    name: "Name9",
    position: "Position9",
    salary: 90000
}

let employee10 = {
    name: "Name10",
    position: "Position10",
    salary: 100000
}

let employee11 = {
    name: "Name11",
    position: "Position11",
    salary: 110000
}

let employee12 = {
    name: "Name12",
    position: "Position12",
    salary: 120000
}

let employee13 = {
    name: "Name13",
    position: "Position13",
    salary: 130000
}

let employee14 = {
    name: "Name14",
    position: "Position14",
    salary: 140000
}

let employee15 = {
    name: "Name15",
    position: "Position15",
    salary: 150000
}

let employees = [employee1, employee2, employee3, employee4, employee5, employee6, employee7, employee8, employee9, employee10, employee11, employee12, employee13, employee14, employee15];

// increase salary by 25%

let NewSalarylist = employees.map(employee => employee['salary'] *= 1.25);


// reduce
// ------------------

let totalincreasedsalary = NewSalarylist.reduce((totalsalary, currentvalue) => totalsalary + currentvalue);


// filter
// task to find employees salary under 50000
let salunder50k = employees.filter(employee => employee['salary'] <= 50000);

// some
// task to check if any employee has salary under 10000,20000;
// returns true || false

let isunder10k = employees.some((employee) => employee['salary'] <= 30000);

// every
// task to check if every employee has salary above 10000,20000;
// returns true || false

let ismore10k = employees.every((employee) => employee['salary'] >= 20000);

// find 
//task get details of employee where name === name1

let details = employees.find((employee) => employee['salary'] > 50000);


// findindex
//task get index of employee where name === name1

let index = employees.findIndex((employee) => employee['salary'] > 50000);