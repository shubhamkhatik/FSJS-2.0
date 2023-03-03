const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]

// add Sugar at the end of your shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

//- remove 'Honey'
const honeyindex = shoppingCart.indexOf("Honey");
shoppingCart.splice(honeyindex, 1);
console.log(shoppingCart); //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]

//modify Tea to 'Green Tea
const teaindex= shoppingCart.indexOf("Tea");
shoppingCart.splice(teaindex, 1, "Green Tea");
console.log(shoppingCart); //[ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]