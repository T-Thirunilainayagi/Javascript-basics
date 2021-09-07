// console.log("Hey this is my first piece of js code!!")
// console.log(299999)
// console.log("thiru")
// console.log(false,333,"thiru",{name:"yadha"})

// console.log("true")
// console.log("false")


// console.warn("This is a warning")

// console.error("This is an error")

// Data types in js
// Primitive data types

let age=100;
console.log(age)

// var and let used to declare variables.no need to specify data types

var age1=0999999;
console.log(typeof age);
console.log(typeof age1);
 
let Name='ffff4$%';
console.log(typeof Name);

let brand
console.log(brand)
console.log(typeof brand)

// op is undefined bcs its just allocated.bt no value assigned

 brand= null
console.log(brand)
console.log(typeof brand)

let istrue=true
let isfalse=false



// variables can be overriden. while using second time give only name not var or let keyword.whatever given last taken since js is interpretor language

// Non primitive data types

let arr =[1,2,"44",6]
arr.push(false)
arr.push("shiva")
arr.unshift(01)
console.log(arr)
console.log(typeof arr)


let Name1 = "thirunilai"


console.log(Name1.toUpperCase())
// This is to tell that primitive data types does not have any methods associated with it..bt above u used method.. after period. .. its because of coercion..

// You can change the values of assigned variables.but you cant declare a variable again which has already been declared



// Loops concept

// let i=1;

// For loop
for(var i=1;i<=10;i++){
    // let a=10;
    console.log("Iteration" + i)
}
console.log(i)
// console.log(a) 
// error since a is dec inside for with let
// Above is error since i dec inside loop with let..if var used na it is printing 11
// variable can be declared and initialized before or also in loop also

// function temp(){
//     var let="let"
// }

// console.log(let)

// var inside fun also cant be used outside

// **************************

// while loop

let iteration=1;
while(iteration<10){
    console.log(iteration +" next ")
    iteration++
}


// Array demo***************


const balls=document.getElementsByClassName("ball")
// const balls=document.querySelectorAll(".ball")
const body=document.querySelector("body")
// const body=document.getElementsByTagName("body") alt way

console.log(balls)
console.log(body)
// above code just trial

// Array methods
const array=[1,2,3,4,5]
console.log(array)

array.push(6)
console.log(array)
console.log(array.length)

while(array.length<10){
    array.push("Thiru")
}
console.log(array)
console.log(array.length)

const index=array.indexOf(1)
console.log(index)
const includes=array.includes(10)
console.log(includes)
// dddd

array.shift()
console.log(array)

array.unshift(30)
console.log(array)

array.splice(2,2)

array.forEach( (element , iteration) =>{
    console.log(element,iteration)
    console.log("next pass")
})

// balls thing
balls.forEach((ball, iteration) => {
    const value = iteration * 50
    ball.style = `transform:translateY(${value}px)`
})

// template string
// sc for printing with space
let age = 19
let Name = "Sakshi"

console.log('Your age is ' + age)
console.log(`Hi ${Name} Your age is ${age}`)

























