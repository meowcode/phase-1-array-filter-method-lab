// Code your solution here

//This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching(drivers, name){
    //if name in drivers is found then return newDrivers, we do not care about case
    const newDrivers = drivers.filter(drivers=> drivers.toLowerCase() === name.toLowerCase())
    return newDrivers
}

//This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, query){
    return drivers.filter(function(el){
        return el.toLowerCase().indexOf(query.toLowerCase()) === 0
    })
}


//This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
function matchName(drivers, name){
    return drivers.filter(function(driver){
        return driver.name === name
    })
}