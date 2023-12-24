
const result = add(10)
console.log(result)
function add(first,second = 0){  // after the introduction of es6...
    const total = first + second; 
    return total;
}


const a = 10 
const b = 20 
const sum = `sum of ${a} and ${b} is: ${a+b}`
console.log(sum)