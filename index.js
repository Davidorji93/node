console.log("Node is good")

// global variable

// local varible
// const firstName = "David"
// const lastName = "Orji"
// const age = "10"
// console.log(firstName  +   lastName  +  age,  "years old")

// David Orji is 10 years old

// const num = 12
// const num1 = 12
//  console.log(num + num1)

//  const number = 12
//  const number1 = 2
//  console.log(number - number1)
// const firstName = David
// const num = 10
// console.log (firstName + num)
// const person = "David"
// const age = 11
// const amount = 40
// console.log(amount)

// let lastName = "Orji"
// let lastName;

// let x = 6 + 5 - 2 
// console.log(x)

// =
// +
// -

// NaN
// not a number
// NaN

// Exercise 1 

// const firstName = "David" 
// const lastName = "Orji"
// const sentence = "is the node instructor"
// const age = 10 
// console.log(firstName +  lastName  +  sentence + age)



// What is the full meeaning of Nan
// What is a struing and give 2 examples 
// Declare a variable display it on your console

// Arrays

// const names = [
//     "david",
//     "Williams",
//     "Micheal",
//     "Famitah"
// ]
// console.log(names[3])

// const cars = [
//     "bwn","toyota","volvo", "porsh", "Honda"
// ]

// console.log(cars)

// objects
// const cars = {
//     person1: "Wiiliams", 
//     Person2: "Davido", 
//      person3 : "Smith",
//       age : "39",
//      height : "50"
// }
// console.log(cars.height)


// const fruits = [
// "mango", 
//  "Banana",
//  "Apple", 
//  "Peer",
//  "orange",
//  "pineapple",
// ]
 

// Function in javascript 

// function
// const x = 10
// const y = 20

// function myFunction(a, b) {
// return a * b
// }
// console.log(myFunction(x, y))

// let x = toCelisus(77)
// let text = "The temperature is " + x + " Celsius";
// let texts = "The temperature is" + toCelsius(77) + " Celsius";
 
// Statement

// let y =  7
// let name = williams

// number 
// let height = 50
// let weight = 100

// string
// let color = "Yellow"
// let colors = "Black"
// let statement = "Node is a runtime environment"

// Boolean
// true or false

// OBJECT 
// const persons = {
//     firstName: "David", LastName: "Orji" , age : "99"
// }
// Array 
// let names = [
//     "Williams", "David", "Fatimah"
// ]

// let xy= "16" + "david"
// console.log(xy)

// let num = "16" + "5" 
// console.log(num)

// Exercises 
// give examples of all the data types

// give examples of an addition and substration of an array

// how to convert array to a string

// function myFunction() {
//     alert ("Hello World")
// }

// let 
// const 
// var
// const name = "David"

// const classes  = [
//     "David", "Edwin", "Idowu"
// ]
// const number = 5
// const number1 = 6


//  function myFunction(number, number1) {
//     console.log(myFunction(number, number1))
//  }

// const numbers = 40
// const numbers1 = 45

//  function myFunction(p, y){
//   const p = 6
//   const y = 6
//  return p * y
//  }
//  console.log(myFunction(p,y ))

// const person =  {
//     firstName: "Davido",
//     lastName: "Williams",
//     age: "10",
//     height: "15",
//     weight: "4000"

// }
// console.log(person?.name )

// const cars = [
//     {
//         name: "Benz",
//         capacity: "6",
//         color: "black",
//         model: "1"

//     },

//     {
//         name: "Benz",
//         capacity: "6",
//         color: "black",
//         model: "1"
        
//     },
//     {
//         name: "honda",
//         capacity: "2",
//         color: "blue",
//         model: "4"
        
//     },
    

// ]
// let car = {
//     name: "honda",
//         capacity: "1",
//         color: "red",  
//         model: "3"     
// }
// // console.log(cars.map(cars))

// let sizes = cars.map(car => {
//     if (car.capacity <= 3){
//       return "small"; 
//     }
//     if (car.capacity <= 5){
//       return "medium";
//     }
//     return "large";
//   });
//   console.log(sizes);
  // output:
  // ['large','medium','medium', ..., 'small']

//   IF statement 
// const hour = "2"

// if(hour < 18 ) {
//      var greeting = "Good Morning"
// }
// console.log(greeting)


// // IF ELSE Statement
// const hour = "2"
// if(hour < 10){
//     var greetings = "Good morning"
// }else {
//     var greetings = "Good Evening"
// }
// console.log(greetings)


// else if statement

// if (time < 10) {
//    var greeting = "Good morning";
//   } else if (time < 20) {
//    var greeting = "Good day";
//   } else {
//     var greeting = "Good evening";
//   }

// let myFunction = (a, b) => a * b
// hello = () => "Hello World!";


// biginit

// const classes = {
//  firstName: "Williams" , lastName: "Davido", age: "60",  occupation: "Software Engineer"
// }
// console.log(classes.lastName)

// const person = ["Williams", "David", "Fatimah"]
// person.push("Micheal")
// console.log(person)


// const scores = [22, 54, 76, 92, 43, 33];

// scores.forEach((score)=>{
//     console.log(score)
// })
const data = [
    {
        name: "Williams",
        age: "39",
        occupation: "Software Engineer",
        size: "large"
    },
    {
        name: "Idowu",
        age: "60",
        occupation: "Software Engineer Instructor",
        size: "large"
    },
    {
        name: "Davido",
        age: "12",
        occupation: "Artist",
        size: "medium"
    },
    {
        name: "Fatimah",
        age: "10",
        occupation: "Marketer",
        size: "large"
    }
]
for (let i = 0; i < data?.length; i++ ){
    console.log(data[i])
}





