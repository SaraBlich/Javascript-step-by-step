// Getters and setters

var attendance = 
{
    _list: [],
    set addName(name) 
    {    
        this._list.push(name);
    },
    get list()
    {
        return this._list.join(', ');
    }
};

attendance.addName = 'Sara';
console.log("List getter: ", attendance.list);
console.log("Underscore list (prop)", attendance._list);
attendance.addName = 'Jamie';
attendance.addName = 'Greg';
console.log(attendance.list);

class Hike
{
    constructor(distance, pace)
    {
        this.distance = distance;
        this.pace = pace;
    }
    get lengthInHours()
    {
        return `${this.calcLength()} hours`;
    }
    calcLength()
    {
        return this.distance/this.pace;
    }
}

const naGubalowke = new Hike(10, 3);
console.log(naGubalowke.lengthInHours);