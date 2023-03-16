const str = "Hello String"

const ans = new Set();

const str1 = str.split('');

console.log(str1);

str1.forEach((item)=> ans.add(item));

ans.forEach((item)=> console.log(item))