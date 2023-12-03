const menu = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },

    {
        name: 'burger',
        category: 'lunch',
    },

    {
        name: 'bacon',
        category: 'breakfast',
    },

    {
        name: 'eggs',
        category: 'breakfast',
    },
];

const categories = ['all',...new Set (menu.map((food)=> food.category))];
console.log(categories);

const result = document.querySelector('.result');
result.innerHTML = categories.map((category)=>{
    return  `<button>${category}</button>`;
}).join(' ');