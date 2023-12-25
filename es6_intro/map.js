const numbers = [2,8,4,6,3];
const output = [];
for(const number of numbers) {
    const result = number*2;
    output.push(result);
}

console.log(output);

function getDoubles(numbers){
    const output = [];
    for(const number of numbers){
        const doubled = number * 2; 
        output.push(doubled);
    }

    return output;
}

const makeDouble = numbers.map(num => num*2)
console.log(makeDouble);
const result = getDoubles(numbers);
console.log(result[0]);