
/*

Arrow fn cannot be used as a constructor
Arrow fn cannot be used with 'new'


*/

const numbers = [1, 2, 3, 4];
// map
const doubled = numbers.map( (num) => num *2 );
// filter
console.log(numbers.filter( (num) => num % 2 === 0));
// reduce
console.log(numbers.reduce((count, num) => count + (num%2 == 0 ? 1 : 0),0 ));

// higher order fn
// closure
// currying 

// write a function that can only be executed 5 times


// create own reduce function
