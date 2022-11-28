// Map class is an advance version of object that provides some new features
// to the object.
// We can use keys of any datatype in Maps. Unlike Objects, thats only store strings
// as keys.

const obj = {
    1:'number',
    true:'boolean',
    23.4:'Decimal Value'
}

// console.log(obj.1)  Not Allowed

const data = new Map([
    [1,'number'],
    [true,'Boolean'],
    [23.5,'Decimal Value'],
    [{},'Object'],
    [()=>{},'Arrow Function']

])

console.log(data.get(1))  // To get specific values

console.log(data.keys()) // To get all keys

data.set('city','Delhi')   // To set key-value

console.log(data.values())  // To get all the values

console.log(data.size)      // To get the size

console.log(data.has(1))   // to check if the key is present or not

data.forEach((v,k)=> console.log(v,k))  // To loop through the map