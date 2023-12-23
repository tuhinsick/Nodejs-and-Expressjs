const people = [
    { name: 'John',age:20,position:'developer', salary: 100},
    { name: 'bob',age:25,position:'designer',salary: 300},
    { name: 'susy',age:30,position:'the boss', salary: 4000},
    { name: 'anna',age:35,position:'intern',salary: 10},
];


const dailyTotal = people.reduce((total,person)=>{
    console.log(total);
    total+=person.salary;
    return total;
},0)