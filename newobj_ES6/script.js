// The for... of loop

for (let letter of 'Javascript')
{
    console.log(letter);
}

var topics = ['JavaScript', 'Node', 'React'];

for (let topic of topics)
{
    console.log(topic);
}

// var will be overriten as I used var, not let
// new ES6 object - Map();
var topics = new Map();
topics.set('HTML', '/class/html');
topics.set('JavaScript', '/class/js');
topics.set('React', '/class/react');
topics.set('Node', '/class/node');

//printing out the key name of Map
for (let topic of topics.keys())
{
    console.log(topic, "is the course name");
}

//printing out the value of Map
for (let topic of topics.values())
{
    console.log("The course description con be found at", topic);
}

//printing out the 'key&values'
for (let topic of topics.entries())
{
    console.log(topic);
}

//Sets - actually really useful

var books = new Set();
books.add('Deep learning');
books.add('Algorithms and Structures');
books.add('ES6 for dummies');

console.log(books);

books.delete('Algorithms and Structures')

console.log('Has Algorithms and Structures still?', books.has('Algorithms and Structures'));

var data = ['Deep learning', 'Deep learning', 'Algorithms and Structures', 'Algorithms and Structures', 'ES6 for dummies', 'ES6 for dummies'];

var set = new Set(data);

console.log('data.length', data.length); // for the usual data we use .lenght (ofc)
console.log('set.size ', set.size) // for the set object we use .size method

// Spread operator '...'
var more_books = ['Joy', 'Winnie the Pooh', 'The Notebook'];

var library = ['Deep Learning', 'React', ...more_books];
console.log(library);