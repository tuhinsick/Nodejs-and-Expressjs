const numbers = [
    {firstName: 'John', lastName: 'Abraham'},
    {firstName: 'Linkon', lastName: 'Jonathan'},
    {firstName: 'Joy', lastName:'Abedin'}
]

const fullName = numbers.map(item => [item.firstName,item.lastName].join(" "))
console.log(fullName);