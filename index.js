console.log("hi")

const arr=[1,2,3,4];
console.log(arr[3])

// ECMA features

// Destructuring of array
const [one,two,three]=[1,2,3];
console.log(one);
// console.log(four)
// This gives error not declared

// const [one,two,three,four]=[1,2,3];
// console.log(four)
// undefined bcs only dec not init

function getscores(){
    return[90,100]
}

let [x,y,z] = getscores()

console.log(x)
console.log(y)
console.log(z)

// object destrucyturing
// use [] for array and{}for obj

const obj = {
    fullname: "Nikhil Agarwal",
    // dont use name ...its keyword
    email: "nikhilagarwaliitkgp@gmail.com",
    age: 20
}
// direct accesing thru obj without destructuring
console.log(obj.email)

// destructuring
let {dum, age, email, fullname} = obj;
console.log(fullname)
console.log(dum)
// dum dec not def so undefined not error

// order of packing and unpacking doesnt matter

let person = {
    firstname: "Nikhil",
    lastname: "Agarwal",
    age1: 20,
    middlename: "DNA"
}
const {age1, firstname, lastname, middlename="" } = person;
// here if you give const instead of let also dna only will be printed.bcs the whole array type only const and cant be changed not the content is const
// middlename="ep"
// console.log(middlename) error bcs const val cant be changed here
// default value can be adssigned to prevent print of undefined in console
// let var const anything can be used in destructyuring

console.log(firstname);
console.log(lastname);
console.log(middlename);
console.log(age1);


// Arrow function
// type 1
//  function add(x, y) {
    //     return x+y;
    // }
    // console.log(add(10, 20));
    
// type2
    // let add = function(x,y) {
    //     return x+y;
    // }
    // console.log(add(10,20))
//type 3 arrow fun 
    let add = (x, y) => {
      return x + y;
    };
    console.log(add(10, 20));
    
//  reference for this keyword 

const counter=
{
    count:1,
    // need not mention let var inside obj dec of variables
    manipulate: function()
    {
        return ++(this.count);
        // this along with the mentioned var of obj has local scope within the fucnction of object. this wont work even if you use it with var outside fun inside obj too
        // when given within the function only it refers to specifies variable..when given outside function bt inside obj means it refers to window itself and wont work as we desire
    },
    // arrow fun also can be used inside obj
    agarwal1: (x, y) => {
        return x + y;
        
      },
    //this cant be used in arrow fun
    agarwal2:()=>{
        return --(this.count)
    },
    manipulate1: function()
    {
        return ++(this.count);
        // since count has global obj scope it gets updated in another method also inside same obj
    },
    // this keyword scope is within fun not the entire obj.so only key:this wont work as expected and refers to window

    key:this.location,
    // above returns window itself
    // key:this.count
    // this returns undefined since this refers to window when used outside fun in a object also, there is n count method or para associated with it
    
  }
//  accessing cariables of object counter and printing them
console.log(counter)
console.log(counter.manipulate())
console.log(counter.agarwal1(10,20))
console.log(counter.manipulate())
console.log(counter.manipulate())
console.log(counter.manipulate())


console.log(counter.agarwal2())
// returns nan since this keyword cant be used in arrow function
// also arrow functions cant be used in event listeners and all
// functions has this  values stores so event lis can be performed and arrow fun failes to do

console.log(counter.key)
console.log(counter.heymath)
// heymath not declared in obj it shows undefined not undeclared error
// whatever not given in obj and try to use na auto init and no val. so it prints undefined.
console.log(counter.manipulate())
console.log(counter.manipulate1())



