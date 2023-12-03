const people = [
    {
        name: 'John',
        age: 20,
        position: 'intern',
    },  
    {
        name: 'tuhin',
        age: 23,
        position: 'shera',
    },
    {
        name: 'fahim',
        age: 21,
        position: 'kajer',
    },
];

// people is an array of objects
//map always returns a new array...

//const ages = people.map((person)=> person.age*2);// ekhn ar taile return statement likhar dorkar nai

// const getAges = (person) => person.age*3;
// const ages = people.map(getAges);
// console.log(ages);

const newPeople = people.map((person)=>{
    return{
        firtName:person.name.toUpperCase(),
        oldAge:person.age+20
    }
}
)

console.log(newPeople);

const names = people.map((person)=>`<h2>${person.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML = names.join(' ');