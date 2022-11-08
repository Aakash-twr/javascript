

const js = {
    "name":"gather",
    "health":"variable"
}

const obj = JSON.stringify(js)

const another = JSON.parse(obj)

console.log(another)