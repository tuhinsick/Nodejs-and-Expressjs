const cart = [
    {
        title : 'Samsung Galaxy s5',
        price : 599.9,
        amount : 3,
    },
    {
        title : 'iPad 9th gen',
        price : 345.9,
        amount : 2,
    },
];


// cart is an array of objects...


let total = cart.reduce((total,cartItem)=>{
    const {amount,price} = cartItem;
    total.totalItems += amount
    total.cartTotal += amount*price
    return total
},{
    totalItems : 0,
    cartTotal : 0
})

console.log(total);