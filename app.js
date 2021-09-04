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



// operators

//   Arithmetic operators

const a = 2
const b = 15

const a1="anu"
const a2="thiru"
console.log(a1 + a2)

const a3="2"
const a4=3
console.log(a3-a4)
// in the above example string acts as number since operator is -. auto type conversion happens
console.log(a + b)

console.log(a - b)

console.log(a * b)

console.log(a / b)

console.log(a ** b)
// Exponent **

console.log(b % a)

console.log('-------------------------------------------')

let c = 5
// Increment operators
c += 1
console.log(c)
// Arithmetic assignments
c *= 5

// c operator=number is equivalent to c = c operator number
// c = c * 5 = 5*5 = 25

console.log(c)


// Assignment operator
let d="anu"

let name="sakshi"
let an=19
an+=name
console.log(an)
console.log(typeof an)

// this happens bcs 19 converted to string by tc and gets added..the type is gonna be string


// Comparision ops

let p=21
let q=7
let r=21

console.log(p>q)
console.log(p<q)
console.log(p==q)
console.log(p==r)
console.log(p>=r)

console.log("----------------------------")

let p1= "12"
let p2= 12
console.log(p1==p2)
// == loose comparision..compares by just typecasting..

// p1="gaurav"
// p2="Gaurav"
// console.log(p1==p2)
// not equal since letter case varies 

console.log(p1===p2)
// == compares only value..so p1==p2 is true.bt p1===p2 chks value as well as type..so its false


// Logical operators

p1=2
p2=3
console.log(p1==p2)
console.log(p1!=p2)
// Logical and operator

console.log(false&&false)
console.log(false&&true)
console.log(true&&false)
console.log(true&&true)

// Logical or operator

console.log("------------")
console.log(false||false)
console.log(false||true)
console.log(true||false)
console.log(true||true)


p1 = 10
p2 = 50
let p3 = 55

console.log(p3>p1&& p3<p2)

// Conditional statements

// If and else...

let t=99;

if(t%2===0)
   console.log("The number is even")
else 
   console.log("The number is odd")   

// Best to use === since type mismatch cant happen

t="99"
if (typeof t==="number")
{
  if(t%2===0){
    console.log("The number is even")
  }
   else {
    console.log("The number is odd")  
   }
}

else{
    console.error("Not a number")
}
// For ip 0 and floats the condition fails to chk..\\

console.log("------------")
t=0
if (typeof t==="number")
if(t!=0)
{
  if(t%2===0){
    console.log("The number is even")
  }
   else {
    console.log("The number is odd")  
   }
}

else if(t===0){
    console.error("neither odd nor even")
}
else{
    console.error("Not a number")
}

// if no elseif in above condition means reqd crt op wont be produced

// if is a new conditional blk itself...else if is not a different con blk..

// 
// const element = document.getElementById("selectme")
// const element = document.getElementsByClassName("heading")

// *****************************
// by using id only one element rendered.bt class name multiple (array ) of elements rendered.same for tag name also
// const element = document.getElementsByTagName("div")
// console.log(element)

// console.log(typeof (element))

// const element = document.querySelector(".heading")
//  console.log(element)

// qs selects only first matchMedia.apply.to render all use qs all

//  const element = document.querySelectorAll(".heading")
//  console.log(element)

//  to slect h3 in heading class use h3.heading similar to css

const element = document.querySelector('#selectme')
// element.innerHTML = "This is from JS"

// element.style.color = "cyan"
// element.style.fontSize = "40px"
// element.style = 'display:none'




// console.log(element.classList)
// element.classList.add('five')
// console.log(element.classList)
// element.classList.remove('one')
// console.log(element.classList)
// 8****************************


const button=document.querySelector("button")

const element1=document.querySelector("#selectme")

const body =document.querySelector("body")

// button.addEventListener('click', () => {
//   console.log('you clicked me')
// })
// add el to specific element

button.addEventListener('click', () => {
  element1.style="background:aqua"
})
// instead of explicitly specifying style in js file create a class and define the styles in html file and call it here
// *************



button.addEventListener('click', () => {
  body.classList.toggle("dark")
})
// toggle is a method



// button.addEventListener("click",)
// el is something that listens for an event

// console.log(button,element1)
























































































































































