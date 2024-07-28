let myMap = new Map();

const window1 = {name : 'engin', surname : 'paksoy'};

myMap.set('key', 100);
myMap.set(window1, 200);
myMap.set(5, 300);

console.log(myMap.get(window1));
console.log(window1.name);
console.log(myMap.size);
myMap.delete(window1);
console.log(myMap.size);
console.log(myMap.keys());
console.log(myMap.values());
console.log('');

for (let value of myMap.keys()){
    console.log(value);
}
