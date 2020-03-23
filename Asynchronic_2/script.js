//IMPORTANT


//Async and await

const delay = seconds => {
    return new Promise(
        resolve => setTimeout(resolve, seconds * 1000)
    )
};

const countToFive = async() => {
    console.log('zero seconds');
    await delay(1);
    console.log('one second');
    await delay(1);
    console.log('two seconds');
    await delay(3);
    console.log('five seconds');
};

countToFive();

//Async with fetch - works well with data. If sth didnt happen as its planned, an event e will be catched

const githubRequest = async(loginName) =>{
    try 
    {
        var response = await fetch(`https://api.github.com/users/${loginName}/followers`);
        var json = await response.json();
        var followerList = json.map(user => user.login);
        console.log(followerList);
    }
    catch(e)
    {
        console.log("Data didn't load", e);
    }

};

githubRequest('SaraBlich');