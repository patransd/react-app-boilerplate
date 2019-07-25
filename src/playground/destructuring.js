//Object destructuring

// console.log('running');

// const  person = {
//     name: 'Elli2',
//     age: 24, 
//     location: {
//         city: 'Tokyo',
//         temperature: 70
//     }
// };

// const { name = 'Elli', age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temperature} = person.location;
// if (city &&  temperature) {
//     console.log(`It's ${temperature} in ${city}.`);    
// }

// const book = {
//     title: 'Mrs. is the Best', 
//     author: 'Elli',
//     publisher: {
//         name: 'Elli publisher'
//     }
// };


// const { name: publisherName = 'Penguin' } = book.publisher;
// if (publisherName) {
//     console.log(publisherName);
// }

// Array destructuring

const address = ['1321 Tokyo Street', 'Tokyo', 'Chiba', '12321'];

const [, , state = 'Kyoto', zip] = address;

// console.log(`You are in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];

const [item1, , price, ] = item;

console.log(`A medium ${item1} costs ${price}.`);