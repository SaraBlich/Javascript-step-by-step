// repeat() as a new ES6 method helps to deal with strings

var dog = 
{
    bark(times)
    {
        console.log("woof ".repeat(times));
    },
    mlem(times)
    {
        console.log("mlem ".repeat(times));
    },
    snore(times)
    {
        console.log("snore ".repeat(times));
    },
    introduce()
    {
        console.log("Im a daaawg ( ͡° ͜ʖ ͡°)");
    }
};

dog.bark(5); // wont start iteration with 0 but 1
dog.mlem(3); // as above
dog.snore(10); // as above
dog.introduce(); //idk why its here


//fat arrow syntax

var studentList = function(students)
{
    console.log(students);
};

//is used as

var studentListArrow = (students) => console.log(students)

studentList(["Joe", "Cindy", "Jeanne"]);
studentListArrow(["Joe", "Cindy", "Jeanne"]);

//this in a regular function

var person =
{
    name: "Peter",
    activites: ["swim", "hike"],
    showActivities: function()
    {
        this.activites.forEach(function(activity)
        {
            var str = this.name + " likes to " + activity;
            console.log(str);
        }.bind(this)); //as this is out of scope, bind is creating sth like 'expanded scope' (wrapping)
    }
};

person.showActivities();

//this in an arrow function
var personTwo = 
{
    name: "Johnatan",
    activities: ["look at the stars", "eat cotton candy"],
    showActivities()
    {
        this.activities.forEach(activity => {
            var str = this.name + " likes to " + activity;
            console.log(str);
        }); // we dont need bind(this anymore)
    }
};

personTwo.showActivities();

//Destructuring assignment

var sandwich = 
{
    title: "American",
    price: 7,
    description: "Pastrami, mayo, rucola",
    ingredients: ["bread", "pastrami", "mayo", "rucola"]
};

console.log(sandwich.title);
console.log(sandwich.ingredients);

//works as

var {title, ingredients} = 
{
    title: "American",
    price: 7,
    description: "Pastrami, mayo, rucola",
    ingredients: ["bread", "pastrami", "mayo", "rucola"]
};

console.log(title);
console.log(ingredients);

// Something useful this time - passing an object to an outer function

var vacation = 
{
    destination: "Chile",
    travelers: 3,
    dish: "chilli",
    cost: 2000
};

function vacationMarketing({destination, dish})
{
    return `Come to ${destination} and do some ${dish}!`;
}

console.log(vacationMarketing(vacation)); //we dont need curly braces here

//Generators ---> its useful if we want to control iterations. yield is being induced in some sort of a queue

function* eachItem(arr)
{
    for(var i=0; i<arr.length; i++)
    {
        yield arr[i];
    }
}

var letters = eachItem(["a", "b", "c"]);

var alfabet = setInterval(function()
{
    var letter = letters.next();
    if(letter.done)
    {
        clearInterval(alfabet);
        console.log("Now i know the alfabet");
    }
    else
    {
        console.log(letter.value);
    }
},500);

//Iterators 
var title = 'ES6';
console.log(typeof[Symbol.iterator]);

var iterateIt = title[Symbol.iterator]();

console.log(iterateIt.next());
console.log(iterateIt.next());
console.log(iterateIt.next());
console.log(iterateIt.next());

function tableReady(arr)
{
    var nextIndex = 0;
    return{next()
        {
            if(nextIndex<arr.length)
            {
                return{value:arr.shift(), done:false}
            }
            else
            {
              return {done: true}  
            }
        }
    }
}
var waitingList = ['Sara', 'Dominika', 'Julia', 'Jasemine'];
var iterateList = tableReady(waitingList);

console.log(`${iterateList.next().value}, your table is ready. Enjoy!`);
console.log(`${iterateList.next().value}, your table is ready. Enjoy!`);
console.log(`${iterateList.next().value}, your table is ready. Enjoy!`);
console.log(`${iterateList.next().value}, your table is ready. Enjoy!`);


