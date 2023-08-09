// let numbers = [3, 56, 4, 9, 5, 32, 6, 8, 95, 34];

// for( let number of numbers ){
//     console.log( numbers.indexOf(number) , ':', number );
// }

let products = [
    {id: 1, itemName: 'Samsung mobile', price: 2000, brand: 'Samsung'},
    {id: 2, itemName: 'Walton mobile', price: 20000, brand: 'Walton'},
    {id: 5, itemName: 'vivo mobile', price: 41000, brand: 'vivo'},
    {id: 3, itemName: 'Samsung mobile', price: 2000, brand: 'Samsung'},
    {id: 4, itemName: 'redmi mobile', price: 12000, brand: 'redmi'},
    {id: 5, itemName: 'vivo mobile', price: 41000, brand: 'viVo'},
    {id: 6, itemName: 'redmi mobile', price: 12000, brand: 'redmi'},
    {id: 5, itemName: 'vivo mobile', price: 41000, brand: 'vivo'},
]
function findMatched(obj, search){
    let matchedItem = [];
    for( let product of obj ){
        if(product.brand.toLowerCase().includes(search.toLowerCase())){
            matchedItem.push(product);
        }
    }
    return matchedItem;
}
let result = findMatched(products, 'vivO');
console.log( result );

