// Shallow copy - Exactly clones an existing data-type but shares the same memory reference.
// Only the first level of objects are copied but deeper levels are referenced.

// Works with nested object

let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

let ingredients_list_copy = Array.from(ingredients_list);
console.log(JSON.stringify(ingredients_list_copy));
// ["noodles",{"list":["eggs","flour","water"]}]

ingredients_list_copy[1].list = ["rice flour", "water"];
console.log(ingredients_list[1].list);
// Array [ "rice flour", "water" ]
console.log(JSON.stringify(ingredients_list));
// ["noodles",{"list":["rice flour","water"]}]

// For example, if in a shallow copy named copy of an array object, 
//the value of the copy[0] element is {"list":["butter","flour"]}, 
//and you do copy[0].list = ["oil","flour"], then the corresponding
// element in the source object will change, too — because you selectively
// changed a property of an object shared by both the source object and the shallow copy.

// However, if instead you do copy[0] = {"list":["oil","flour"]},
// then the corresponding element in the source object will not change — 
//because in that case, you're not just selectively changing a property of an existing
// array element that the shallow copy shares with the source object; instead you're actually
// assigning a completely new value to that copy[0] array element, just in the shallow copy.



// Deep copy - exactly clones the data type and reserve a separate memory space


