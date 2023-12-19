// методы массива 
// clear 

const array = ["1"]
console.log(array);
array.push (2)
array.push(4)
array.unshift(100)
array.unshift(101)
console.log(array);
array.pop()
array.shift()
console.log(array);
// [] <- push (45) je push ('text')
// [45, 'text'] -> pop()-text , pop ---45
// unshift(100) --> [] --> [100]
//unshift(100) --> [] ---> [101,100]
//shift() --> [101,100] -> [100]
//shift() --> [100] -> []

const users = [
    {
        name: "User 1",
        age:45
    },
    {
        name: "User 2",
        age: 41
    },
    {
        name: "User 3",
        age: 25
    }
]
// .map (callBackfunction(value index array) {}) -- синтаксис 
const userAge = users.map(getNames)
function getNames(user){
    console.log(user, '---value---');
    return user.age 
}
console.log(userAge);
//     console.log(index,'---index---');
//     console.log(array,'---array---');

//.filter (cbFn (v, i, arr){})
// фугк виды
const oldMan = users.filter((user,i,arr) =>{
    return user.age < 40
})
console.log(oldMan);
const oldzMan = users.filter((user,i,arr) =>{
    return user.name === "kolbai"
})
console.log(oldzMan);
const userSalamat = users.find((user) => {
    return user.name === "Salamat"
})
console.log(userSalamat);

// const numbers = [2,4,6,8] //-----> [4,8,12,16]
// ["banana","pineapple", "strawberry",]

const numbers = [2,4,6,8];

const number = numbers.map(function(elem) {
	return elem * 2;
});

console.log(number);


const fruits = ["banana", "apple", "pineapple", "strawberry", ]
const furitName = fruits.filter((item) => {
    if (item !== 'apple') return item;
  });
  
  console.log(furitName); 