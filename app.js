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





// function logName() {
//      console.log("Thirunilai")
// }
// function logName(name) {
//     console.log(name)
// }

// logName("Nishi")

// Either you can have function with parameter or no parameter also..give acc to function call.

// name intialized at fun itself and scope is within the fun
function logName(name="John Doe", age=18) {
    console.log(name+"tou are" + age)
}

logName("Nishi",20)
logName()
logName("Nishi",20)
  

// never mispel keyword function

// multi para can be passed 
// var declared in function cant be used(console.log(sum)) outside since its scope is within function 
// default value can be set

function add1(a=0,b=0){
    const sum=a+b;
    console.log(a+b)

}

add1(10,20)
// console.log(sum)


// function using name


function add(a=0,b=0){
    const sum=a+b;
    return sum;
    // no need to specify return type 
    // same fun 2 times dec means last one only gets executed not the fist one

}
const result=add(30,20)
console.log(result)






// ECMA is a standrd pf JS. js is based..like html to xml...

// function using var

const addition= function(a=0,b=0){
     return(a+b)
}

console.log(addition(40,30))

// arrow function

const addition1= (a=0,b=0)=>{
    return(a+b)
}
console.log(addition1(40,30))



// function with keyword will work even if yo place stmt before it

// with arrow keyword it wont work

const rock=document.querySelector("#rock")
const paper=document.querySelector("#paper")
const scissor=document.querySelector("#scissor")

const handler=(action) => {
    console.log("You clicked "+action)
}

// handler("rock")



// rock.addEventListener("click",handler(rock))
// here we give only function call bt it expects function defenition(we have no facility to control when to use that fun with fc alone.bcs here once call given it auto executes) i.e callback which is something to be executed after fc
// one sol is to place the fun inside the fun call
// rock.addEventListener("click",(action) => {
//     console.log("You clicked an image" )}
// )
// Another way using keyword
// rock.addEventListener("click",function() {
//     console.log("You clicked an image" )}
// )

// }  Bt it is not prefered since code gets repeated
// )
// so just wrap the thing with arrow function and it will act as callback
// with arrow fun we make the function passed not only fc

rock.addEventListener("click", () =>{handler("rock")})
paper.addEventListener("click",()=>{handler("paper")})
scissor.addEventListener("click",()=>{handler("scissor")})
//   scissor.addEventListener("click",function() {handler("scissor")})
// selfly executed


















































