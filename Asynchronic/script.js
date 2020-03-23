// a simple example of promise using setTimeout

const delay = seconds => 
{
    return new Promise((resolve, reject) => {
        if(typeof seconds !== 'number')
        {
            reject(new Error('Argument seconds must be a number'));
        }
        else
        {
           setTimeout(
        () => resolve(`${seconds} seconds delay is up`),seconds *1000);
        }
    });
};

console.log("zero seconds");
delay(1).then(() => console.log("one second"));
delay(4).then(() => console.log("four seconds"));
delay(7).then(msg => msg.toUpperCase())
        .then(msg => (`${msg}`))
        .then(msg => console.log(msg));


const spacePeople = () => {
    return new Promise((resolves, rejects) => {
        const api = 'http://api.open-notify.org/astros.json';
        const request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = () =>
        {
            if(request.status === 200)
            {
                resolves(JSON.parse(request.response));
            }
            else
            {
                rejects(Error(request.statusText));
            }
        };
        request.onerror = err => rejects(err);
        request.send();
    });
};

spacePeople().then(
    spaceData => console.log(spaceData),
    err => console.error(
        new Error('Cannot load space people')
    )
);

// Now its visible in a console log, that work of the code written above is asynchronic. We dont wait until the timeout is done, but its working 'behind the stage'.


//Fetch - method that provides an easy, logical way to fetch resources asynchronously across the network

const getPeopleInSpace = () =>
fetch('http://api.open-notify.org/astros.json')
.then(res => res.json());

const spaceNames = () => 
getPeopleInSpace()
.then(json=> json.people)
.then(people=>people.map(p => p.name))
.then(names=>names.join(', '));

spaceNames()
.then(console.log);

