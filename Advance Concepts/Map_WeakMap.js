const map = new Map();
map.set('key',10);
console.log(map);   // keys are Primitive data types


const weakMap = new Map();
weakMap.set(['apple','juice'],198);

console.log(weakMap);  // Weak Map whose keys can be Structural data types - Arrays,objects etc